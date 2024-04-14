import { styled } from '@mui/material/styles';
import { StyledTextField } from 'components/Field/style';

export const StyledNumberTextField = styled(StyledTextField)(() => ({
    '& input[type=number]': {
        '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
    },
}));
