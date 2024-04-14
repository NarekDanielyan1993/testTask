/* eslint-disable no-useless-catch */
/* eslint-disable consistent-return */
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import {
    METHODS,
    PAGINATION_PARAMS_DEFAULT,
    PRODUCT_NOTIFICATION_MESSAGES,
    PRODUCT_PATHS,
    STORAGE_IDS,
} from 'constant';
import { useProductContext } from 'context';
import useLocalStorage from 'hooks/useLocalStorage';
import useNotification from 'hooks/useNotification';
import useObserver from 'hooks/useObserver';
import { apiRequest } from 'utils';

export const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';

export const fetchPaginatedData = async ({ pageParam }) => {
    const { data } = await apiRequest({
        method: METHODS.GET,
        url: PRODUCT_PATHS.GET_PRODUCTS,
        params: {
            page: pageParam,
            page_size: PAGINATION_PARAMS_DEFAULT.PAGE_LIMIT,
        },
    });
    return data;
};

export const usePaginatedProducts = () => {
    const {
        status,
        data,
        error,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: [GET_FILTERED_PRODUCTS],
        queryFn: async ({ pageParam = 1 }) =>
            await fetchPaginatedData({ pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.page * lastPage.amount < lastPage.total) {
                return lastPage.page + 1;
            }
            return undefined;
        },
        getPreviousPageParam: (firstPage) => firstPage.prevCursor,
        select: (data) => {
            return data?.pages.flatMap((page) => page.products) || [];
        },
        staleTime: Infinity,
    });

    const { sentinelRef } = useObserver({
        callback: fetchNextPage,
        isEnabled: hasNextPage,
    });

    return {
        status,
        data: data || {},
        error,
        sentinelRef,
        isFetchingNextPage,
        hasNextPage,
        isLoading: isLoading,
        fetchNextPage,
    };
};

const useOrderProduct = () => {
    const { successSnackbar, failedSnackbar } = useNotification();
    const { deleteValue } = useLocalStorage();
    const { setCarts } = useProductContext();
    return useMutation({
        mutationFn: async (formData) => {
            const { data } = await apiRequest({
                method: METHODS.POST,
                url: PRODUCT_PATHS.ORDER_PRODUCT,
                body: formData,
            });
            if (data.success === 1) {
                deleteValue(STORAGE_IDS.CARTS);
                setCarts([]);
                successSnackbar(PRODUCT_NOTIFICATION_MESSAGES.ORDER_SUCCESS);
            } else {
                failedSnackbar(PRODUCT_NOTIFICATION_MESSAGES.ORDER_FAILED);
            }
        },
    });
};

export { useOrderProduct };
