/* eslint-disable linebreak-style */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import signInReduer from '../views/SignIn/SignInSlice';
import signUpReducer from '../views/SignUp/SignUpSlice';
import createPartnershipReducer from '../views/CreatePartnership/CreatePartnerShipSlice';
import UploadAssetReducer from '../views/UploadAssets/UploadAssetSlice';
import solutionNarrativeReducer from '../views/SolutionNarrative/SolutionNarrativeSlice';

const rootReducer = combineReducers({
  signInSlice: signInReduer,
  signUpSlice: signUpReducer,
  uploadAssetSlice: UploadAssetReducer,
  createPartnershipSlice: createPartnershipReducer,
  solutionNarrativeSlice: solutionNarrativeReducer,
  form: formReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
