/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  postRequest,
  multiPartRequest,
  putRequest,
  multiPartPutRequest,
  getRequest,
  deleteRequest,
} from '../../service';
import { AppDispatch, RootState } from '../../store';
import { State } from './types';

const initialState: State = {
  errorMsg: '',
  solutionNarrativeInfo: [],
  selectedSalesHubId: '',
  salesHubInfo: [],
};

interface salesHubValues {
  headerText: string;
  subHeaderText: string;
  headerImage: string;
}

// Slice
export const salesHubSlice = createSlice({
  name: 'salesHub',
  initialState,
  reducers: {
    setErrMsg(state, { payload }: PayloadAction<{ errorMsg: string }>) {
      // state.errorMsg = payload.errorMsg;
    },
  },
});

// Actions

// Selectors
export const salesHubResponse = (state: RootState) => state.salesHubSlice;

export default salesHubSlice.reducer;
