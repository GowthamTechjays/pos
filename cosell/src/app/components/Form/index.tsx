/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { ErrorMessage, ErrorMessageProps, FieldProps } from 'formik';
import { TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel/FormControlLabel';
import { CheckboxProps } from '@material-ui/core/Checkbox/Checkbox';

type LabelProps = {
  label: string;
};
export const RenderTextField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  label,
  error,
  field,
  type,
  InputProps,
}) => (
  <TextField
    fullWidth
    InputLabelProps={{ shrink: false }}
    placeholder={placeholder}
    label={label}
    type={type}
    {...field}
    variant="outlined"
    margin="dense"
    error={error}
    style={{ marginBottom: '15px', width: '100%' }}
    InputProps={InputProps}
  />
);

export const GenTextField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  label,
  error,
  field,
  multiline,
  InputProps,
  required,
  disabled,
}) => (
  <TextField
    placeholder={placeholder}
    label={label}
    {...field}
    required={required || false}
    disabled={disabled || false}
    multiline={multiline || false}
    InputProps={InputProps}
    variant="outlined"
    margin="dense"
    error={error}
  />
);

export const RenderCheckbox: React.FC<
  FieldProps & CheckboxProps & FormControlLabelProps
> = ({ label, checked, field }) => (
  <FormControlLabel
    control={
      <Checkbox {...field} checked={checked} size="medium" color="primary" />
    }
    style={{ margin: '0', color: '#707683', fontSize: '14px !important' }}
    label={label}
  />
);

export const RenderErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => (
      <div
        style={{
          color: 'red',
          fontSize: '12px',
          paddingBottom: '10px',
        }}
      >
        {msg}
      </div>
    )}
  </ErrorMessage>
);

export const RenderLabel: React.FC<LabelProps> = ({ label }) => (
  <div
    style={{
      color: '#707683',
      fontSize: '14px',
      fontWeight: 500,
      margin: '0',
    }}
  >
    {label}
  </div>
);
