import CartForm from 'components/cart/cartForm';
import CartItem from 'components/cart/cartItem';
import {
    StyledCart,
    StyledCartContent,
    StyledCartHeader,
} from 'components/cart/style';
import { useProductContext } from 'context/product';

const CartList = () => {
    const { cartProducts: carts } = useProductContext();
    return (
        <StyledCart>
            <StyledCartHeader>Добавленные товары</StyledCartHeader>
            <StyledCartContent>
                {Array.isArray(carts) &&
                    carts.map((cart) => {
                        return (
                            <CartItem
                                key={cart.id}
                                quantity={cart.quantity}
                                name={cart.title}
                                price={cart.price}
                            />
                        );
                    })}
            </StyledCartContent>
            <CartForm />
        </StyledCart>
    );
};

export default CartList;
