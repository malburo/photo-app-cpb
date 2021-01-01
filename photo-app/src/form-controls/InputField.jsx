import { InputAdornment, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { form, name, disabled, placeholder, icon } = props;
  const { errors } = form;
  const hasError = !!errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      as={<TextField />}
      variant="outlined"
      margin="normal"
      fullWidth
      error={hasError}
      disabled={disabled}
      placeholder={placeholder}
      InputProps={{
        startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
      }}
    />
  );
};

export default InputField;
