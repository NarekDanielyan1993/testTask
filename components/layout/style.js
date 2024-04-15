import { styled } from '@mui/material/styles';

export const StyledLayout = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '75rem',
    margin: `${theme.spacing(18)} auto`,
    paddingInline: '3vw',
}));
