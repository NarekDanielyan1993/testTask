import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    '&': {
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.darken,
        fontSize: theme.spacing(4.5),
        lineHeight: theme.spacing(5.5),
        fontWeight: 400,
        borderRadius: theme.spacing(2),
    },
    '&.toggle': {
        marginBottom: theme.spacing(2),
        border: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.spacing(0.3),
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
        },
    },
}));

export default StyledButton;
