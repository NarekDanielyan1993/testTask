import Button from 'components/button';
import ProductCardActionInput from 'components/card/productCartActions/productCartActionInput';
import { useProductContext } from 'context/product';
import { useMemo, useState } from 'react';

const ProductCartActions = ({ id }) => {
    const [isVisibleCartButton, setIsVisibleCartButton] = useState(true);
    const { onAddToCart, cartProducts } = useProductContext();

    const cartProduct = useMemo(() => {
        return cartProducts.find((pr) => pr.id === id) || null;
    }, [cartProducts]);

    const addProductToCart = () => {
        setIsVisibleCartButton(false);
        onAddToCart(id, cartProduct?.quantity ?? 1);
    };

    return isVisibleCartButton ? (
        <Button onClick={addProductToCart} className="submit">
            купить
        </Button>
    ) : (
        <ProductCardActionInput cartProduct={cartProduct} productId={id} />
    );
};

export default ProductCartActions;
