import { Box } from '@mui/material';
import {
    StyledCardInput,
    StyledCardStepButton,
} from 'components/card/productCartActions/style';
import { MAX_ALLOWED_PRODUCT_QUANTITY_TO_ORDER } from 'constant';
import { useProductContext } from 'context/product';
import { useDebounce } from 'hooks/useDebounce';
import useDidUpdate from 'hooks/useDidUpdate';
import { useState } from 'react';

const ProductCardActionInput = ({ cartProduct, productId }) => {
    const { onAddToCart } = useProductContext();
    const [productQuantity, setProductQuantity] = useState(
        cartProduct?.quantity || 1
    );

    const { debounce: productQuantityDebounced } = useDebounce(productQuantity);

    useDidUpdate(() => {
        if (productQuantityDebounced) {
            addProductToCartQuantityHandler('change', productQuantityDebounced);
        }
    }, [productQuantityDebounced]);

    const addProductToCartQuantityHandler = (type, val) => {
        if (type === 'change') {
            const newProductQuantity = Math.min(
                val,
                MAX_ALLOWED_PRODUCT_QUANTITY_TO_ORDER
            );
            onAddToCart(productId, newProductQuantity);
            setProductQuantity(newProductQuantity);
        }
        if (type === 'add') {
            onAddToCart(
                productId,
                Math.min(
                    productQuantity + 1,
                    MAX_ALLOWED_PRODUCT_QUANTITY_TO_ORDER
                )
            );
            setProductQuantity((prev) =>
                Math.min(prev + 1, MAX_ALLOWED_PRODUCT_QUANTITY_TO_ORDER)
            );
        }
        if (type === 'subtract') {
            onAddToCart(productId, Math.max(1, productQuantity - 1));
            setProductQuantity((prev) => Math.max(1, prev - 1));
        }
    };

    return (
        <Box display="flex" gap={1}>
            <StyledCardStepButton
                onClick={() => addProductToCartQuantityHandler('subtract')}
            >
                -
            </StyledCardStepButton>
            <StyledCardInput
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
            />
            <StyledCardStepButton
                onClick={() => addProductToCartQuantityHandler('add')}
            >
                +
            </StyledCardStepButton>
        </Box>
    );
};

export default ProductCardActionInput;
