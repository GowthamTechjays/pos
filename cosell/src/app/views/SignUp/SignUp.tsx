/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from 'src/app/components/Loader';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import { SignUpLabels } from '../../../strings';

import { selectSignUpResponse, signUpAction } from './SignUpSlice';

import {
  RenderTextField,
  RenderCheckbox,
  RenderLabel,
  RenderErrorMessage,
} from '../../components/Form/index';
import styles from './SignUp.module.css';
import { signUpPayload } from './types';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signUpRespData = useSelector(selectSignUpResponse);
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const initialValues: signUpPayload = {
    firstName: '',
    lastName: '',
    workEmail: '',
    password: '',
    termsAgreed: false,
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required('First name is required'),
    lastName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required('Last name is required'),
    workEmail: Yup.string()
      .trim()
      .email('Must be a valid email')
      .required('Email is required'),
    password: Yup.string()
      .trim()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password must contain minimum 8 characters. Atleast one uppercase, one lowercase, one number and one special character.'
      ),
  });
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setVisibility(!visibility);
  };
  const handleSignUp = (formValues: signUpPayload) => {
    dispatch(
      signUpAction(
        formValues,
        history,
        () => setLoading(false),
        () => setShowAlert(true)
      )
    );
  };

  return (
    <div className={styles.flexBackground}>
      <div className={styles.container}>
        <h2>{SignUpLabels.createAccount}</h2>
        <div className={styles.createAccountWrap}>
          {SignUpLabels.accountSetupContent}
        </div>
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              setLoading(true);
              handleSignUp(values);
            }}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                setFieldValue,
              } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <RenderLabel label={SignUpLabels.firstName} />
                  <Field
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    placeholder={SignUpLabels.firstName}
                    component={RenderTextField}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    hasError={errors.firstName && touched.firstName}
                    errorMessage={errors.firstName}
                  />
                  <RenderErrorMessage name="firstName" />
                  <RenderLabel label={SignUpLabels.lastName} />
                  <Field
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    placeholder={SignUpLabels.lastName}
                    component={RenderTextField}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    hasError={errors.lastName && touched.lastName}
                    errorMessage={errors.lastName}
                  />
                  <RenderErrorMessage name="lastName" />
                  <RenderLabel label={SignUpLabels.workEmail} />
                  <Field
                    type="email"
                    name="workEmail"
                    value={values.workEmail}
                    placeholder={SignUpLabels.workEmail}
                    component={RenderTextField}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    hasError
                    errorMessage={errors.workEmail}
                  />
                  <RenderErrorMessage name="workEmail" />

                  <RenderLabel label={SignUpLabels.password} />
                  <Field
                    type={visibility ? 'text' : 'password'}
                    name="password"
                    value={values.password}
                    placeholder={SignUpLabels.password}
                    component={RenderTextField}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    hasError={errors.password && touched.password}
                    errorMessage={errors.password}
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
                      marginBottom: '15px',
                    }}
                    className={`${styles.link} ${styles.termsWrap}`}
                  >
                    <Field
                      name="termsAgreed"
                      type="checkbox"
                      component={RenderCheckbox}
                      label={SignUpLabels.agreeTxt}
                      checked={values.termsAgreed}
                      onChange={(e: any) => setFieldValue('termsAgreed', e)}
                    />

                    <Button href="/terms" size="small">
                      {SignUpLabels.termsAndConditions}
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.sendBtn}
                    disabled={
                      values.termsAgreed === false ||
                      values.firstName === '' ||
                      values.lastName === '' ||
                      values.password === '' ||
                      values.workEmail === ''
                    }
                  >
                    {SignUpLabels.signUpButton}
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </>
        <div className={`${styles.link} ${styles.mailReceiveTxt}`}>
          {SignUpLabels.alreadyHaveAccount}{' '}
          <Button href="/" size="small" className={styles.linkBtn}>
            {SignUpLabels.signInlabel}
          </Button>
        </div>
      </div>
      {loading === true && <Loader />}
      {showAlert && (
        <SnackbarAlert
          severity="error"
          handler={() => setShowAlert(false)}
          showalert={signUpRespData.errorMsg !== ''}
          message={signUpRespData.errorMsg}
        />
      )}
    </div>
  );
};

export default SignUp;
