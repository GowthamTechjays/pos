/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
// import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Loader from 'src/app/components/Loader';
import { useHistory } from 'react-router';
import { VerifyMailLabels } from '../../../strings';
import { postRequest } from '../../service';
import verifyEmail from '../../assets/mailverification.png';
import styles from './MailVerification.module.css';
import { selectSignUpResponse } from '../SignUp/SignUpSlice';

const VerifyMail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signUpRespData = useSelector(selectSignUpResponse);
  const [loading, setLoading] = React.useState(false);

  const mailResend = () => {
    setLoading(true);
    postRequest(`users/resend-verification-mail/`, {
      email: signUpRespData.email,
    }).then(() => {
      setLoading(false);
    });
  };
  return (
    <div className={styles.flexBackground}>
      <div className={styles.container}>
        <div className={styles.mailImgWrap}>
          {' '}
          <img src={verifyEmail} alt="" className="mailImg" />
        </div>
        <div className={styles.verifyTitle}>{VerifyMailLabels.verifyEmail}</div>
        <div className={`${styles.verifyTxt} ${styles.mailSent}`}>
          <div>{VerifyMailLabels.emailSentTxt}</div>
          <div>
            {VerifyMailLabels.address}{' '}
            <span className={styles.mail}>{signUpRespData.email}</span>
          </div>
        </div>
        <div className={styles.verifyTxt}>
          <div className={`${styles.link} ${styles.mailReceiveTxt}`}>
            {VerifyMailLabels.mailReceiveLabel}{' '}
            <Button
              size="small"
              className={styles.linkBtn}
              onClick={() => dispatch(mailResend)}
            >
              {VerifyMailLabels.resend}
            </Button>
          </div>
          <div>
            {VerifyMailLabels.checkTxt}{' '}
            <span className={styles.spam}>{VerifyMailLabels.spamMail}</span>
          </div>
          <div className={`${styles.link} ${styles.signIn}`}>
            <Button size="small" onClick={() => history.push('/')}>
              {VerifyMailLabels.signIn}
            </Button>
          </div>
        </div>
      </div>
      {loading === true && <Loader />}
    </div>
  );
};
export default VerifyMail;
