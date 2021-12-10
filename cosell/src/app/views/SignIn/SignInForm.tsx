/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import {
  RenderTextField,
  RenderCheckbox,
  RenderErrorMessage,
  RenderLabel,
} from '../../components/Form/index';
import { SignInLabels } from '../../../strings';
import styles from './SignIn.module.css';

interface Values {
  email: string;
  password: string;
  rememberMe: boolean;
}
interface Props {
  onSubmit: (values: Values) => void;
  signInRespData: any;
}

export const SignInForm: React.FC<Props> = ({ onSubmit, signInRespData }) => {
  const initialValues: Values = { email: '', password: '', rememberMe: false };
  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email('Must be a valid email')
      .required('Email is required'),
    password: Yup.string()
      .trim()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Enter a valid password'
      ),
  });
  const [visibility, setVisibility] = React.useState(false);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={() => ({})}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            handleBlur,
            setFieldValue,
          } = formik;
          return (
            <Form onSubmit={handleSubmit}>
              <RenderLabel label={SignInLabels.email} />
              <Field
                type="email"
                name="email"
                value={values.email}
                placeholder={SignInLabels.email}
                component={RenderTextField}
                onBlur={handleBlur}
                onChange={handleChange}
                hasError
                errorMessage={
                  signInRespData.validationErrField === 'email'
                    ? signInRespData.errorMsg
                    : errors.email
                }
              />
              <RenderErrorMessage name="email" />

              <RenderLabel label={SignInLabels.password} />
              <Field
                name="password"
                type={visibility ? 'text' : 'password'}
                value={values.password}
                placeholder={SignInLabels.password}
                component={RenderTextField}
                onBlur={handleBlur}
                onChange={handleChange}
                hasError
                errorMessage={
                  signInRespData.validationErrField === 'password'
                    ? signInRespData.errorMsg
                    : errors.password
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {visibility ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <RenderErrorMessage name="password" />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                }}
                className={styles.link}
              >
                <Field
                  name="rememberMe"
                  type="checkbox"
                  component={RenderCheckbox}
                  label={SignInLabels.rememberMe}
                  style={{ color: '#707683', fontSize: '14px' }}
                  checked={values.rememberMe}
                  onChange={(e: any) => setFieldValue('rememberMe', e)}
                />

                <Button href="/forgotPassword" size="small">
                  {SignInLabels.forgotPassword}
                </Button>
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.signInButton}
              >
                {SignInLabels.signInlabel}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
