import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import NumberField from 'components/Field/numberField';
import Button from 'components/button';

export const StyledCardAction = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(0.5),
    flexFlow: 'row nowrap',
    textAlign: 'center',
}));

export const StyledCardStepButton = styled(Button)(({ theme }) => ({
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.darken,
    fontSize: theme.spacing(4.5),
    lineHeight: theme.spacing(5.5),
    fontWeight: 400,
    borderRadius: theme.spacing(2),
    '&.increment': {
        order: 2,
    },
}));

export const StyledCardInput = styled(NumberField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        textAlign: 'center',
        padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`,
    },
}));
