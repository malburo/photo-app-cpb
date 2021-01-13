import { FormControl, InputAdornment, TextField, Typography } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { form, name, disabled, placeholder, icon, label, defaultValue, size, iconRight } = props;
  const { errors } = form;
  const hasError = !!errors[name];
  return (
    <FormControl fullWidth margin="normal" error={hasError}>
      <Typography variant="h6" color="initial">
        {label}
      </Typography>
      <Controller
        name={name}
        control={form.control}
        as={<TextField />}
        variant="outlined"
        error={hasError}
        disabled={disabled}
        placeholder={placeholder}
        size={size}
        InputProps={
          (icon && {
            startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
          },
          iconRight && {
            endAdornment: <InputAdornment position="end">{iconRight}</InputAdornment>,
          })
        }
        defaultValue={defaultValue}
        helperText={errors[name]?.message}
      />
    </FormControl>
  );
};

export default InputField;
