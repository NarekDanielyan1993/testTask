import { styled } from '@mui/material/styles';

export const StyledCartForm = styled('form')(({ theme }) => ({
    display: 'flex',
    alignItems: 'stretch',
    gap: theme.spacing(2),
    '&:last-child': {
        flexGrow: 1,
    },
    '&:first-child': {
        flexBasis: theme.spacing(50),
    },
}));
