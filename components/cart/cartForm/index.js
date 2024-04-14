import { Box } from '@mui/material';
import MaskedField from 'components/Field/maskedField';
import { StyledCartForm } from 'components/cart/cartForm/style';
import { RUSSIAN_PHONE_MASK } from 'constant';
import { useProductContext } from 'context/product';
import useForm from 'hooks/useForm';
import { FormProvider } from 'react-hook-form';
import { useOrderProduct } from 'services';

import Button from 'components/button';
import Loader from 'components/loader';
import { productOrderValidationSchema } from 'utils';

const CartForm = () => {
    const { phoneChangeHandler, cartProducts, phone } = useProductContext();
    const { mutateAsync, isLoading } = useOrderProduct(phone);
    const methods = useForm({
        defaultValues: {
            phone: phone ?? '',
        },
        validationSchema: productOrderValidationSchema,
    });

    const { handleSubmit, formState } = methods;
    const formSubmitHandler = (data) => {
        const phone_number = data.phone.replace(/\D/g, '');
        const cart = cartProducts.map((pr) => ({
            id: pr.id,
            quantity: pr.quantity,
        }));
        mutateAsync({ phone: phone_number, cart });
    };

    const formChangeHandler = (data) => {
        phoneChangeHandler(data.target.value);
    };
    return (
        <Box display="flex" gap={2} position="relative">
            {isLoading && <Loader />}
            <FormProvider {...methods}>
                <StyledCartForm
                    onChange={formChangeHandler}
                    onSubmit={handleSubmit(formSubmitHandler)}
                >
                    <MaskedField
                        disabled={!(cartProducts?.length > 0)}
                        mask={RUSSIAN_PHONE_MASK}
                        name="phone"
                    />
                    <Button
                        disabled={
                            !(formState.isValid && cartProducts?.length > 0)
                        }
                        type="submit"
                        className="submit"
                    >
                        заказать
                    </Button>
                </StyledCartForm>
            </FormProvider>
        </Box>
    );
};

export default CartForm;
