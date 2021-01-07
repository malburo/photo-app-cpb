import { FormControl, InputAdornment, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { form, name, disabled, placeholder, icon, label, defaultValue } = props;
  const { errors } = form;
  const hasError = !!errors[name];
  return (
    <FormControl fullWidth margin="normal" error={hasError}>
      <Controller
        name={name}
        control={form.control}
        as={<TextField />}
        variant="outlined"
        error={hasError}
        disabled={disabled}
        placeholder={placeholder}
        label={label}
        InputProps={
          icon && {
            startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
          }
        }
        defaultValue={defaultValue}
        helperText={errors[name]?.message}
      />
    </FormControl>
  );
};

export default InputField;
