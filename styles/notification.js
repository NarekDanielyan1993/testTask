import { styled } from '@mui/material/styles';
import { MaterialDesignContent } from 'notistack';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
    () => ({
        '&.notistack-MuiContent-success': {
            backgroundColor: 'rgba(34, 34, 34, 1)',
        },
        '&.notistack-MuiContent-error': {
            backgroundColor: '#970C0C',
        },
    })
);
