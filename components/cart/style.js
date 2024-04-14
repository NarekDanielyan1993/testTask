import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCart = styled('div')(({ theme }) => ({
    maxWidth: theme.spacing(88.5),
    width: '100%',
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.secondary.darken,
    borderRadius: theme.spacing(2),
}));

export const StyledCartHeader = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4.5),
    color: theme.palette.primary.main,
    fontWeight: 400,
    lineHeight: theme.spacing(5.5),
    marginBottom: theme.spacing(2),
}));

export const StyledCartContent = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '10rem min-content min-content',
    gap: theme.spacing(5),
    marginBottom: theme.spacing(2),
    '& > p': {
        wordWrap: 'break-word',
    },
}));
