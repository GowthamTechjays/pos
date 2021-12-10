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
  multiPartRequest,
  multiPartPutRequest,
  deleteRequest,
} from '../../service';
import { AppDispatch, RootState } from '../../store';
import {
  State,
  solutionNarrativePayload,
  SolutionNarrativeAssetInfo,
  SolutionNarrativeInfo,
} from './types';

const initialState: State = {
  errorMsg: '',
  assetInfo: [],
  thumbnailUploadedTime: Date.now(),
  selectedSolutionNarrativeIds: [],
  solutionNarrativeInfo: [],
};

interface assetValues {
  name: string;
  tags: string[];
  docType: string;
  id: number;
  file: string;
  accessDocType: string;
}
// Slice
export const solutionNarrativeSlice = createSlice({
  name: 'uploadAsset',
  initialState,
  reducers: {
    setErrMsg(state, { payload }: PayloadAction<{ errorMsg: string }>) {
      state.errorMsg = payload.errorMsg;
    },
    setAssetInfo(
      state,
      { payload }: PayloadAction<{ assetInfo: SolutionNarrativeAssetInfo[] }>
    ) {
      state.assetInfo = payload.assetInfo;
    },
    setThumbnailUploadedTime(
      state,
      {
        payload,
      }: PayloadAction<{
        thumbnailUploadedTime: number;
      }>
    ) {
      state.thumbnailUploadedTime = payload.thumbnailUploadedTime;
    },
    setSlectedSolutionNarrativeIds(
      state,
      { payload }: PayloadAction<{ selectedSolutionNarrativeIds: number[] }>
    ) {
      state.selectedSolutionNarrativeIds = payload.selectedSolutionNarrativeIds;
    },
    setSlectedSolutionNarrativeInfo(
      state,
      {
        payload,
      }: PayloadAction<{ solutionNarrativeInfo: SolutionNarrativeInfo[] }>
    ) {
      state.solutionNarrativeInfo = payload.solutionNarrativeInfo;
    },
  },
});

// Actions
export const {
  setErrMsg,
  setAssetInfo,
  setThumbnailUploadedTime,
  setSlectedSolutionNarrativeIds,
  setSlectedSolutionNarrativeInfo,
} = solutionNarrativeSlice.actions;

export const saveSolutionNarrativeAction =
  (
    payload: solutionNarrativePayload,
    solutionNarrativeId: string,
    partnershipId: string,
    // thumbnailImage: File,
    loaderAction: () => void,
    setAlert: (value: string) => void,
    closeModal: () => void,
    cbFunc: () => void
  ) =>
  (dispatch: AppDispatch) => {
    console.log('inside solution narrative action', solutionNarrativeId);
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('description', payload.description);
    formData.append('image', payload.thumbnailImage);
    formData.append('partnership_id', partnershipId);
    formData.append('tags', JSON.stringify(payload.tags));
    formData.append('asset_ids', JSON.stringify(payload.assetIds));

    if (solutionNarrativeId) {
      formData.append('solution_narrative_id', solutionNarrativeId);
      multiPartPutRequest(`partnership/solution-narrative/`, formData, {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      }).then((resp: any) => {
        if (resp.result === true) {
          loaderAction();
          closeModal();
          setAlert('success');
          cbFunc();
        } else {
          closeModal();
          dispatch(
            setErrMsg({
              errorMsg: resp.data.msg,
            })
          );
          loaderAction();
          cbFunc();
        }
      });
    } else {
      multiPartRequest(`partnership/solution-narrative/`, formData, {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      }).then((resp: any) => {
        if (resp.result === true) {
          loaderAction();
          closeModal();
          cbFunc();
        } else {
          closeModal();
          dispatch(
            setErrMsg({
              errorMsg: resp.data.msg,
            })
          );
          loaderAction();
          cbFunc();
        }
      });
    }
  };

export const deleteAssetAction =
  (
    partnershipId: string,
    solutionNarrativeIds: number[],
    loaderAction: () => void,
    setAlert: (value: string) => void,
    refreshSolutionNarrative: () => void
  ) =>
  (dispatch: AppDispatch) => {
    const token = localStorage.getItem('token');
    deleteRequest(
      `partnership/solution-narrative/`,
      {
        Authorization: `Token ${token}`,
      },
      {
        partnership_id: partnershipId,
        solution_narrative_ids: solutionNarrativeIds,
      }
    ).then((response: any) => {
      if (response.result === true) {
        loaderAction();
        setAlert('success');
        refreshSolutionNarrative();
      } else {
      }
    });
  };

export const selectSolutionNarrativeResponse = (state: RootState) =>
  state.solutionNarrativeSlice;

export default solutionNarrativeSlice.reducer;
