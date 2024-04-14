import ProductCard from 'components/card';
import { StyledCardContainer } from 'components/card/productList/style';
import { useProductContext } from 'context/product';

const ProductList = () => {
    const { products } = useProductContext();
    return (
        <StyledCardContainer>
            {Array.isArray(products)
                ? products.map((product) => {
                      return (
                          <ProductCard
                              key={product.id}
                              id={product.id}
                              src={product.image_url}
                              title={product.title}
                              description={product.description}
                              price={product.price}
                          />
                      );
                  })
                : null}
        </StyledCardContainer>
    );
};

export default ProductList;
