import { styled } from '@mui/material/styles';

export const StyledCardContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    maxWidth: theme.spacing(150),
}));
