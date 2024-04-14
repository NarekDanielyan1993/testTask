import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: 'rgba(0, 0, 0, 1)',
            darken: 'rgba(34, 34, 34, 1)',
        },
        secondary: {
            main: 'rgba(240, 240, 240, 1)',
            darken: 'rgba(217, 217, 217, 1)',
        },
        error: {
            main: '#CC0000',
            darken: '#990000',
        },
        disabled: {
            main: '#BDBDBD',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        '&:disabled': {
                            opacity: '0.4!important',
                            color: theme.palette.secondary.main,
                        },
                        whiteSpace: 'nowrap',
                        minWidth: 'max-content',
                        '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                        },
                        padding: `${theme.typography.pxToRem(
                            10
                        )} ${theme.typography.pxToRem(14)}`,
                        textTransform: 'uppercase',
                    };
                },
            },
        },
    },
});

export default theme;
