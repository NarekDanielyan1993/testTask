import { Box, CircularProgress } from '@mui/material';

function Loader({ fixed = true, withOverlay = true, zIndex = 9999 }) {
    return (
        <Box
            alignItems="center"
            bottom={0}
            display="flex"
            justifyContent="center"
            left={0}
            position={fixed ? 'fixed' : 'absolute'}
            py={10}
            right={0}
            top={0}
            {...(withOverlay && { backgroundColor: 'rgba(0, 0, 0, 0.5)' })}
            sx={{ color: (theme) => theme.palette.primary.main }}
            zIndex={zIndex}
        >
            <CircularProgress />
        </Box>
    );
}

export default Loader;
