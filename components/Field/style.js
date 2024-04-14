import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .Mui-disabled': {
        color: `${theme.palette.secondary.darken}!important`,
        WebkitTextFillColor: `${theme.palette.secondary.darken}!important`,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
            '&:hover fieldset': {
                border: 'none',
            },
            '&.Mui-focused fieldset': {
                border: 'none',
            },
        },
    },
    '& .MuiInputBase-input': {
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
        color: theme.palette.secondary.darken,
        fontSize: theme.spacing(4.5),
        lineHeight: theme.spacing(5.5),
        fontWeight: 400,
    },
    '& .Mui-error': {
        '& .MuiInputBase-input': {
            color: 'red',
        },
    },
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(2),
}));

// export const StyledTextField = styled(TextField)(({ theme }) => ({
//     backgroundColor: theme.palette.primary.main,
//     color: 'white',
//     padEnd: theme.spacing(1),
// }));

// export const StyledErrorText = styled(Typography)(({ theme }) => ({
//     width: '100%',
//     color: theme.palette.error.main,
//     paddingLeft: theme.spacing(2),
//     fontSize: theme.spacing(1.5),
// }));
