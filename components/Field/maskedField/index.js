import { StyledTextField } from 'components/Field/style';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

const MaskedField = ({ name, mask, disabled }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, value, ref },
                formState: { errors },
            }) => (
                <PatternFormat
                    format={mask}
                    mask="_"
                    disabled={disabled}
                    error={!!errors[name]}
                    onChange={onChange}
                    value={value}
                    getInputRef={ref}
                    allowEmptyFormatting
                    customInput={StyledTextField}
                />
            )}
        />
    );
};

export default MaskedField;
