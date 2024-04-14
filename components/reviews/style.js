import { styled } from '@mui/material/styles';

export const StyledReviewList = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    maxWidth: '75rem',
    marginBottom: theme.spacing(18),
}));
