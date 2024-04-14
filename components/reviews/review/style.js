import { styled } from '@mui/material/styles';

export const StyledReview = styled('div')(({ theme }) => ({
    width: '29rem',
    maxWidth: '100%',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(2),
}));

export const StyledContent = styled('div')(({ theme }) => ({
    fontSize: theme.spacing(3),
    lineHeight: '29px',
    fontWeight: 400,
    marginBottom: theme.spacing(1),
}));
