/* eslint-disable linebreak-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Loader from 'src/app/components/Loader';
import { useHistory } from 'react-router';
import { postRequest, getRequest } from '../../service';
import { ResetPasswordLabels } from '../../../strings';
import {
  RenderTextField,
  RenderLabel,
  RenderErrorMessage,
} from '../../components/Form/index';
import styles from './resetpassword.module.css';

interface Values {
  newPassword: '';
  confirmPassword: '';
}
const ResetPassword = () => {
  const initialValues: Values = {
    newPassword: '',
    confirmPassword: '',
  };
  const history = useHistory();
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required('Please enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must contain 8 characters, One uppercase, One lowercase, One number and one special case character'
      ),
    confirmPassword: Yup.string()
      .required('Please confirm your new password')
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });
  const [newPWShow, setNewPWShow] = React.useState(false);
  const [confirmPWShow, setconfirmPWShow] = React.useState(false);
  const [showMsg, setshowMsg] = React.useState(false);
  const [displayMsg, setDisplayMsg] = React.useState('');
  const [response, setResponse] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const token = new URLSearchParams(window.location.search).get('token');

  useEffect(() => {
    setLoading(true);
    getRequest(`users/password-reset?token=${token}`).then((resp: any) => {
      if (resp.result === true) {
        setshowMsg(false);
      } else {
        setDisplayMsg('Token Invalid');
        setshowMsg(true);
        setResponse(false);
      }
      setLoading(false);
    });
  }, []);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const handleClickShowPassword = (isNew: string) =>
    isNew === 'newPass'
      ? setNewPWShow(!newPWShow)
      : setconfirmPWShow(!confirmPWShow);
  const changePassword = (values: Values) => {
    setLoading(true);
    postRequest(`users/password-reset/`, {
      token,
      password: values.newPassword,
      confirm_password: values.confirmPassword,
    }).then((resp: any) => {
      if (resp.result === true) {
        setDisplayMsg(resp.msg);
        setResponse(resp.result);
        setshowMsg(true);
      } else {
        setDisplayMsg(resp.data.msg);
        setResponse(resp.data.result);
      }
      setLoading(false);
    });
  };
  return (
    <>
      {showMsg === false && (
        <div className={styles.flexBackground}>
          <div className={styles.container}>
            <h2>{ResetPasswordLabels.resetPassword}</h2>
            <>
              <Formik
                initialValues={initialValues}
                validate={() => ({})}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  changePassword(values);
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
                    <Form onSubmit={handleSubmit}>
                      <RenderLabel label={ResetPasswordLabels.newPassword} />
                      <Field
                        type={newPWShow ? 'text' : 'password'}
                        name="newPassword"
                        value={values.newPassword}
                        placeholder={ResetPasswordLabels.newPassword}
                        component={RenderTextField}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        hasError={errors.newPassword && touched.newPassword}
                        errorMessage={errors.newPassword}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  handleClickShowPassword('newPass')
                                }
                                onMouseDown={handleMouseDownPassword}
                              >
                                {newPWShow ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <RenderErrorMessage name="newPassword" />
                      <RenderLabel
                        label={ResetPasswordLabels.confirmPassword}
                      />
                      <Field
                        type={confirmPWShow ? 'text' : 'password'}
                        name="confirmPassword"
                        value={values.confirmPassword}
                        placeholder={ResetPasswordLabels.confirmPassword}
                        component={RenderTextField}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        hasError={
                          errors.confirmPassword && touched.confirmPassword
                        }
                        errorMessage={errors.confirmPassword}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  handleClickShowPassword('confirmPass')
                                }
                                onMouseDown={handleMouseDownPassword}
                              >
                                {confirmPWShow ? (
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
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.sendBtn}
                      >
                        {ResetPasswordLabels.changePassword}
                      </Button>
                      <div className={`${styles.link} ${styles.signIn}`}>
                        <Button onClick={() => history.push('/')} size="small">
                          {ResetPasswordLabels.signIn}
                        </Button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </>
          </div>
        </div>
      )}
      {showMsg === true && (
        <div className={styles.successMsg}>
          {response === true ? (
            <div className={styles.msgWrap}>
              <div className={styles.tickSvg}>
                <CheckCircleIcon color="primary" fontSize="large" />
              </div>
              <h3>{displayMsg}</h3>

              <a
                target="_blank"
                href="https://sprint-portal.cosell.partners/"
                rel="noreferrer"
              >
                {ResetPasswordLabels.signInwithNewPw}
              </a>
            </div>
          ) : (
            <h3
              style={{
                color: '#4C70E3',
                fontSize: '24px',
                textTransform: 'capitalize',
              }}
            >
              {displayMsg}
            </h3>
          )}
        </div>
      )}
      {loading === true && <Loader />}
    </>
  );
};

export default ResetPassword;
