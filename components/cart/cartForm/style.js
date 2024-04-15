import { styled } from '@mui/material/styles';

export const StyledCartForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    gap: theme.spacing(2),
    '& > *': {
        flexGrow: 1,
    },
    '& .MuiFormControl-root': {
        width: theme.spacing(43),
    },
}));
