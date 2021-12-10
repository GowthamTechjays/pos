/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';
import { postRequest, getRequest } from '../../../../service';

import { ButtonLabels, MyAccountLabels } from '../../../../../strings';
import {
  RenderErrorMessage,
  RenderTextField,
} from '../../../../components/Form';
import SecondaryButton from '../../../../components/Button/SecondaryButton';
import styles from './MyAccount.module.css';
import {
  selectUserData,
  setSignedIn,
} from '../../../../views/SignIn/SignInSlice';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
const MyAccount = (props: any) => {
  const { cancelHandler } = props;
  const userData = useSelector(selectUserData);
  const token = localStorage.getItem('token');
  const [pWChangeShow, setPWChangeShow] = React.useState(false);
  const [fieldError, setFieldError] = React.useState('');
  const [visibilityCurrentPswd, setVisibilityCurrentPswd] =
    React.useState(false);
  const [visibilityNewPswd, setVisibilityNewPswd] = React.useState(false);
  const [visibilityConfirmPswd, setVisibilityConfirmPswd] =
    React.useState(false);
  const [initialValues, setInitialValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  React.useEffect(() => {
    getRequest(`users/my-account/`, {
      Authorization: `Token ${token}`,
    }).then((resp: any) => {
      if (resp.result === true) {
        setInitialValues({
          firstName: resp.data.first_name,
          lastName: resp.data.last_name,
          email: resp.data.email,
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      }
    });
  }, []);
  const setAccountDetail = (formValues: Values) => {
    postRequest(
      `users/my-account/`,
      {
        first_name: formValues.firstName,
        last_name: formValues.lastName,
        email: formValues.email,
        current_password: formValues.currentPassword,
        new_password: formValues.newPassword,
        confirm_password: formValues.confirmPassword,
      },
      {
        Authorization: `Token ${token}`,
      }
    ).then((resp: any) => {
      if (resp.result === true) {
        setShowAlert(true);
        setSignedIn({
          userData: {
            ...userData,
            email: resp.data.email,
            firstName: resp.data.first_name,
            lastName: resp.data.last_name,
          },
        });
        setPWChangeShow(false);
      }
      const timer = setTimeout(() => setFieldError(''), 3000);
      setFieldError(resp.data.msg);
      return () => clearTimeout(timer);
    });
  };
  const myPwSchema = Yup.object().shape({
    firstName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required('First name required'),
    lastName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required('Last name required'),
    email: Yup.string()
      .email('Must be a valid email')
      .required('Email required'),
    currentPassword: Yup.string().required(
      'Please enter your current password'
    ),
    newPassword: Yup.string()
      .required('Please enter your new password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must contain 8 Characters, One uppercase, One lowercase, One number and one special case character'
      ),
    confirmPassword: Yup.string()
      .required('Please confirm your new password')
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });
  const MyAccountSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string()
      .email('Must be a valid email')
      .required('Email required'),
  });
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const handleClickShowCurrentPassword = () => {
    setVisibilityCurrentPswd(!visibilityCurrentPswd);
  };
  const handleClickShowNewPswd = () => {
    setVisibilityNewPswd(!visibilityNewPswd);
  };
  const handleClickShowConfirmPswd = () => {
    setVisibilityConfirmPswd(!visibilityConfirmPswd);
  };

  return (
    <div className={styles.myAccWrap}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={pWChangeShow ? myPwSchema : MyAccountSchema}
        onSubmit={(values) => {
          setAccountDetail(values);
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
          } = formik;
          return (
            <Form
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onSubmit={handleSubmit}
            >
              <div className={styles.accInfoFom}>
                <div className={styles.accInfoField}>
                  <div className={`${styles.semiField} ${styles.labelField}`}>
                    {MyAccountLabels.firstName}
                  </div>
                  <div className={styles.semiField}>
                    <Field
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={MyAccountLabels.firstName}
                      hasError={errors.firstName && touched.firstName}
                      errorMessage={errors.firstName}
                      component={RenderTextField}
                    />
                    <RenderErrorMessage name="firstName" />
                  </div>
                </div>
                <div className={styles.accInfoField}>
                  <div className={`${styles.semiField} ${styles.labelField}`}>
                    {MyAccountLabels.lastName}
                  </div>
                  <div className={styles.semiField}>
                    <Field
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={MyAccountLabels.lastName}
                      hasError={errors.lastName && touched.lastName}
                      errorMessage={errors.lastName}
                      component={RenderTextField}
                    />
                    <RenderErrorMessage name="lastName" />
                  </div>
                </div>
                <div className={styles.accInfoField}>
                  <div className={`${styles.semiField} ${styles.labelField}`}>
                    {MyAccountLabels.emailAddress}
                  </div>
                  <div className={styles.semiField}>
                    <Field
                      type="text"
                      name="email"
                      value={values.email}
                      readOnly
                      className="Mui-disabled"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      placeholder={MyAccountLabels.emailAddress}
                      hasError={errors.email && touched.email}
                      errorMessage={errors.email}
                      InputProps={{
                        readOnly: true,
                      }}
                      component={RenderTextField}
                    />
                    <RenderErrorMessage name="email" />
                    {pWChangeShow === false && (
                      <div
                        onClickCapture={() => setPWChangeShow(true)}
                        className={styles.changePwLink}
                      >
                        {MyAccountLabels.changePassword}
                      </div>
                    )}
                  </div>
                </div>
                {pWChangeShow === true && (
                  <>
                    <div className={styles.accInfoField}>
                      <div
                        className={`${styles.semiField} ${styles.labelField}`}
                      >
                        {MyAccountLabels.currentPassword}
                      </div>
                      <div className={styles.semiField}>
                        <Field
                          type={visibilityCurrentPswd ? 'text' : 'password'}
                          name="currentPassword"
                          value={values.currentPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={MyAccountLabels.currentPassword}
                          hasError={
                            errors.currentPassword && touched.currentPassword
                          }
                          errorMessage={errors.currentPassword}
                          component={RenderTextField}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowCurrentPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {visibilityCurrentPswd ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />

                        {fieldError !== '' ? (
                          <div
                            style={{
                              color: 'red',
                              fontSize: '12px',
                              paddingBottom: '10px',
                            }}
                          >
                            {fieldError}
                          </div>
                        ) : (
                          <RenderErrorMessage name="currentPassword" />
                        )}
                      </div>
                    </div>
                    <div className={styles.accInfoField}>
                      <div
                        className={`${styles.semiField} ${styles.labelField}`}
                      >
                        {MyAccountLabels.newPassword}
                      </div>
                      <div className={styles.semiField}>
                        <Field
                          type={visibilityNewPswd ? 'text' : 'password'}
                          name="newPassword"
                          value={values.newPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={MyAccountLabels.newPassword}
                          hasError={errors.newPassword && touched.newPassword}
                          errorMessage={errors.newPassword}
                          component={RenderTextField}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowNewPswd}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {visibilityNewPswd ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <RenderErrorMessage name="newPassword" />
                      </div>
                    </div>
                    <div className={styles.accInfoField}>
                      <div
                        className={`${styles.semiField} ${styles.labelField}`}
                      >
                        {MyAccountLabels.confirmPassword}
                      </div>
                      <div className={styles.semiField}>
                        <Field
                          type={visibilityConfirmPswd ? 'text' : 'password'}
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={MyAccountLabels.confirmPassword}
                          hasError={
                            errors.confirmPassword && touched.confirmPassword
                          }
                          errorMessage={errors.confirmPassword}
                          component={RenderTextField}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowConfirmPswd}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {visibilityConfirmPswd ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <RenderErrorMessage name="confirmPassword" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className={`${styles.accInfoBtnWrap} ${styles.bottomLayer}`}>
                <SecondaryButton
                  onClick={cancelHandler}
                  style={{ minWidth: '160px', marginRight: '30px' }}
                >
                  {ButtonLabels.cancel}
                </SecondaryButton>
                <PrimaryButton type="submit" style={{ minWidth: '160px' }}>
                  {ButtonLabels.update}
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      </Formik>
      {showAlert && (
        <SnackbarAlert
          severity="success"
          handler={() => setShowAlert(false)}
          showalert={showAlert}
          message={MyAccountLabels.successProfileMsg}
        />
      )}
    </div>
  );
};
export default MyAccount;
