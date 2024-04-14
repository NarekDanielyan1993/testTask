import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(37.5),
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(2),
}));

export const StyledCardImage = styled('img')(({ theme }) => ({
    width: '100%',
    position: 'relative',
    height: theme.spacing(45.75),
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing(0.5),
}));

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    fontSize: theme.spacing(4.5),
    lineHeight: theme.spacing(5.43),
    fontWeight: 400,
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    wordWrap: 'break-word',
}));

export const StyledCardDescription = styled(Box)(({ theme }) => ({
    fontSize: theme.spacing(3),
    lineHeight: theme.spacing(3.6),
    fontWeight: 400,
    marginBottom: theme.spacing(2),
    wordWrap: 'break-word',
}));

export const StyledCardPrice = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4.5),
    lineHeight: theme.spacing(5.43),
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: theme.spacing(2),
}));
