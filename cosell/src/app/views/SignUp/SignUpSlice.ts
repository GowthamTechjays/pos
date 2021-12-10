/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postRequest } from '../../service';
import { AppDispatch, RootState } from '../../store';
import { State, signUpPayload } from './types';

const initialState: State = {
  email: '',
  errorMsg: '',
  validationErrField: '',
};

// Slice
export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setEmail(state, { payload }: PayloadAction<{ email: string }>) {
      state.email = payload.email;
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
export const { setEmail, setErrMsg } = signUpSlice.actions;

export const signUpAction =
  (
    payload: signUpPayload,
    history: any,
    loaderAction: () => void,
    showAlert: () => void
  ) =>
  (dispatch: AppDispatch) => {
    postRequest(`users/signup/`, {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.workEmail,
      password: payload.password,
      source: 'web',
    }).then((resp: any) => {
      if (resp.result === true) {
        history.push('/verifyMail');
        dispatch(setEmail({ email: resp.data.email }));
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
export const selectSignUpResponse = (state: RootState) => state.signUpSlice;

export default signUpSlice.reducer;
