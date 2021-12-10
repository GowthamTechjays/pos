/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postRequest } from '../../service';
import { AppDispatch, RootState } from '../../store';
import { State, SigninPayload, UserData } from './types';

const initialState: State = {
  userData: {
    userId: '',
    token: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  },
  isSignedIn: false,
  errorMsg: '',
  validationErrField: '',
};

// Slice
export const signInSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setSignedIn(state, { payload }: PayloadAction<{ userData: UserData }>) {
      state.userData = payload.userData;
      state.isSignedIn = true;
    },
    setErrMsg(
      state,
      {
        payload,
      }: PayloadAction<{ errorMsg: string; validationErrField: string }>
    ) {
      state.errorMsg = payload.errorMsg;
      state.validationErrField = payload.validationErrField;
    },
  },
});

// Actions
export const { setSignedIn, setErrMsg } = signInSlice.actions;

export const loginAction =
  (
    payload: SigninPayload,
    history: any,
    loaderAction: () => void,
    showAlert: () => void
  ) =>
  (dispatch: AppDispatch) => {
    postRequest(`users/sign-in/`, {
      email: payload.email,
      password: payload.password,
    }).then((resp: any) => {
      if (resp.result === true) {
        history.push('/accountSetup');
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('userId', resp.data.user_id);
        dispatch(
          setSignedIn({
            userData: { ...resp.data, password: payload.password },
          })
        );
        dispatch(
          setErrMsg({
            errorMsg: '',
            validationErrField: '',
          })
        );
        loaderAction();
      } else {
        dispatch(
          setErrMsg({
            errorMsg: resp.data.msg,
            validationErrField: resp.data.validation_error_field!,
          })
        );
        loaderAction();
        showAlert();
      }
    });
  };

// Selectors
export const selectUserData = (state: RootState) => state.signInSlice.userData;

export const selectSignInRespData = (state: RootState) => state.signInSlice;

export default signInSlice.reducer;
