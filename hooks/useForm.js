import { joiResolver } from '@hookform/resolvers/joi';
import { useForm as useReactHookForm } from 'react-hook-form';

const useForm = ({ validationSchema, defaultValues }) => {
    const {
        register,
        watch,
        setValue,
        handleSubmit,
        control,
        reset,
        formState,
    } = useReactHookForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: joiResolver(validationSchema),
        defaultValues,
    });

    return {
        register,
        setValue,
        watch,
        handleSubmit,
        reset,
        control,
        formState,
    };
};

export default useForm;
