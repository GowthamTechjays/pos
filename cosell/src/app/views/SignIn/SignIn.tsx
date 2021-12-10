/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
// import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Loader from 'src/app/components/Loader';
import React from 'react';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import { SignInLabels } from '../../../strings';
import { SignInForm } from './SignInForm';
import { loginAction, selectSignInRespData } from './SignInSlice';
import { SigninPayload } from './types';
import styles from './SignIn.module.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signInRespData = useSelector(selectSignInRespData);
  const [loading, setLoading] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const handleLogin = async (values: SigninPayload) => {
    setLoading(true);
    dispatch(
      loginAction(
        values,
        history,
        () => setLoading(false),
        () => setShowAlert(true)
      )
    );
  };

  return (
    <div className={styles.flexBackground}>
      <div className={styles.container}>
        <h2>{SignInLabels.signInlabel}</h2>
        <SignInForm
          onSubmit={({ email, password, rememberMe }) => {
            const values = { email, password, rememberMe };
            handleLogin(values);
          }}
          signInRespData={signInRespData}
        />
        <div className={`${styles.link} ${styles.signupBox}`}>
          {SignInLabels.signUpLabel}{' '}
          <Button href="/signUp" size="small" className={styles.linkBtn}>
            {SignInLabels.signUpButton}
          </Button>
        </div>
      </div>
      {loading === true && <Loader />}
      {showAlert && (
        <SnackbarAlert
          severity="error"
          handler={() => setShowAlert(false)}
          showalert={signInRespData.errorMsg !== ''}
          message={signInRespData.errorMsg}
        />
      )}
    </div>
  );
};

export default SignIn;
