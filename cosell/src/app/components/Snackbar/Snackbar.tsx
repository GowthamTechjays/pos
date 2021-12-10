/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close.js';

const SlideTransition = (p: any) => <Slide {...p} direction="left" />;
const SnackbarAlert = (props: any) => (
  <div>
    <Snackbar
      autoHideDuration={props.severity === 'success' ? 3000 : null}
      style={{ height: '24%' }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.showalert}
      TransitionComponent={SlideTransition}
      onClose={() => props.handler('', '', false)}
    >
      <Alert
        action={
          <Button>
            <CloseIcon onClick={() => props.handler('', '', false)} />{' '}
          </Button>
        }
        style={{
          width: '350px',
          justifyContent: 'center',
          fontSize: '12px',
        }}
        severity={props.severity}
      >
        {props.message}
      </Alert>
    </Snackbar>
  </div>
);

export default SnackbarAlert;
