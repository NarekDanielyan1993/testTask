import { Typography } from '@mui/material';

const CartItem = ({ name, quantity, price }) => {
    return (
        <>
            <Typography>{name}</Typography>
            <Typography>x{quantity}</Typography>
            <Typography>{price}₽</Typography>
        </>
    );
};

export default CartItem;
