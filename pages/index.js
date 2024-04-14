import { QueryClient, dehydrate } from '@tanstack/react-query';
import ProductList from 'components/card/productList';
import CartList from 'components/cart';
import Layout from 'components/layout';
import Reviews from 'components/reviews';
import { QUERY_DEFAULT_PARAMS } from 'constant';
import { ProductProvider } from 'context/product';
import {
    GET_FILTERED_PRODUCTS,
    fetchPaginatedData,
    useGetReviews,
    usePaginatedProducts,
} from 'services';

export default function HomePage() {
    const { isFetchingNextPage, sentinelRef, hasNextPage } =
        usePaginatedProducts();

    const { data: reviews } = useGetReviews();

    return (
        <ProductProvider>
            <Layout>
                <Reviews reviews={reviews} />
                <CartList />
                <ProductList />
                {hasNextPage && (
                    <div ref={sentinelRef}>
                        {isFetchingNextPage && (
                            <p style={{ color: 'white' }}>Loading...</p>
                        )}
                    </div>
                )}
            </Layout>
        </ProductProvider>
    );
}

const queryClient = new QueryClient(QUERY_DEFAULT_PARAMS);

export async function getServerSideProps() {
    try {
        await queryClient.prefetchInfiniteQuery({
            queryKey: [GET_FILTERED_PRODUCTS],
            queryFn: async ({ pageParam = 1 }) =>
                await fetchPaginatedData({ pageParam }),
        });
        return {
            props: {
                dehydratedState: JSON.parse(
                    JSON.stringify(dehydrate(queryClient))
                ),
            },
        };
    } catch (error) {
        return {
            redirect: {
                destination: '/500',
                permanent: false,
            },
        };
    }
}
