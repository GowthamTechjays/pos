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
} from '../../service';
import { AppDispatch, RootState } from '../../store';
import {
  PartnershipInfoPayload,
  CompanyInfoPayload,
  CompanyPartnerInfoPayload,
  CoordinatorPartnerInfoPayload,
  PreviewPartnershipPayload,
  State,
} from './types';

let token = localStorage.getItem('token');

const initialState: State = {
  partnershipId: '',
  companyInformationId: '',
  partnerCompanyInformationId: '',
  errorMsg: '',
  validationErrField: '',
  timeStamp: Date.now(),
  refreshTimeStamp: Date.now(),
};

// Slice
export const createPartnershipSlice = createSlice({
  name: 'createPartnership',
  initialState,
  reducers: {
    setPartnershipID(state, { payload }: PayloadAction<{ id: string }>) {
      state.partnershipId = payload.id;
    },
    setCompanyInfoID(
      state,
      { payload }: PayloadAction<{ companyInfoId: string }>
    ) {
      state.companyInformationId = payload.companyInfoId;
    },
    setPartnerCompanyInfoID(
      state,
      { payload }: PayloadAction<{ partnerCompanyInformationId: string }>
    ) {
      state.partnerCompanyInformationId = payload.partnerCompanyInformationId;
    },
    setErrMsg(
      state,
      {
        payload,
      }: PayloadAction<{
        errorMsg: string;
        validationErrField: string;
        timeStamp: number;
      }>
    ) {
      state.errorMsg = payload.errorMsg;
      state.validationErrField = payload.validationErrField;
      state.timeStamp = payload.timeStamp;
    },
    setPreviewRefresh(
      state,
      {
        payload,
      }: PayloadAction<{
        refreshTimeStamp: number;
      }>
    ) {
      state.refreshTimeStamp = payload.refreshTimeStamp;
    },
  },
});

// Actions
export const {
  setPartnershipID,
  setCompanyInfoID,
  setPartnerCompanyInfoID,
  setErrMsg,
  setPreviewRefresh,
} = createPartnershipSlice.actions;

export const PartnershipInfoAction =
  (
    payload: PartnershipInfoPayload,
    history: any,
    isUpdate: boolean,
    partnershipId: string,
    companyInformationId: string,
    partnerInfoId: string,
    loadingClear: () => void
  ) =>
  (dispatch: AppDispatch) => {
    token = localStorage.getItem('token');
    if (isUpdate) {
      putRequest(
        `partnership/`,
        {
          partnership_id: partnershipId,
          partnership_name: payload.partnershipName,
          content_hub_subdomain_name: payload.websiteSubDomain,
        },
        {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        }
      ).then((resp: any) => {
        if (resp.result === true) {
          history.push(
            companyInformationId
              ? `/createPartnership?form=CompanyInfo&partner_ship_id=${partnershipId}&type=update`
              : `/createPartnership?form=CompanyInfo&partner_ship_id=${partnershipId}`
          );
          dispatch(setPartnershipID({ id: resp.data.partnership_id }));
        } else {
          dispatch(
            setErrMsg({
              errorMsg: resp.data.msg,
              validationErrField: resp.data.validation_error_field!,
              timeStamp: Date.now(),
            })
          );
        }
        loadingClear();
      });
    } else {
      postRequest(
        `partnership/`,
        {
          partnership_name: payload.partnershipName,
          content_hub_subdomain_name: payload.websiteSubDomain,
        },
        {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        }
      ).then((resp: any) => {
        if (resp.result === true) {
          history.push(
            companyInformationId
              ? `/createPartnership?form=CompanyInfo&partner_ship_id=${resp.data.partnership_id}&type=update`
              : `/createPartnership?form=CompanyInfo&partner_ship_id=${resp.data.partnership_id}`
          );
          dispatch(setPartnershipID({ id: resp.data.partnership_id }));
        } else {
          dispatch(
            setErrMsg({
              errorMsg: resp.data.msg,
              validationErrField: resp.data.validation_error_field!,
              timeStamp: Date.now(),
            })
          );
        }
        loadingClear();
      });
    }
  };

export const CompanyInfoAction =
  (
    payload: CompanyInfoPayload,
    history: any,
    isUpdate: boolean,
    partnershipId: string,
    companyInformationId: string,
    partnerCompanyInformationId: string,
    logoImageData: any,
    loadingClear: () => void
  ) =>
  (dispatch: AppDispatch) => {
    const formData = new FormData();
    formData.append('partnership_id', partnershipId);
    formData.append('company_name', payload.companyName);
    formData.append('company_address', payload.companyAddress);
    formData.append('city', payload.city);
    formData.append('country', payload.country);
    formData.append('privacy_policy_url', payload.privacyPolicyURL);
    formData.append('site_terms_url', payload.siteTermsURL);
    formData.append('cookie_policy', payload.cookiePolicy);
    formData.append('state', payload.state);
    formData.append('zipcode', payload.zipCode);
    formData.append('logo', logoImageData);
    token = localStorage.getItem('token');
    if (isUpdate) {
      formData.append('company_information_id', companyInformationId);
      multiPartPutRequest(`partnership/company-information/`, formData, {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      }).then((resp: any) => {
        if (resp.result === true) {
          history.push(
            partnerCompanyInformationId
              ? `/createPartnership?form=CompanyPartnerInfo&partner_ship_id=${partnershipId}&type=update`
              : `/createPartnership?form=CompanyPartnerInfo&partner_ship_id=${partnershipId}`
          );
          dispatch(
            setCompanyInfoID({
              companyInfoId:
                resp.data.company_information.company_information_id,
            })
          );
        }
        loadingClear();
      });
    } else {
      multiPartRequest(`partnership/company-information/`, formData, {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      }).then((resp: any) => {
        if (resp.result === true) {
          history.push(
            partnerCompanyInformationId
              ? `/createPartnership?form=CompanyPartnerInfo&partner_ship_id=${partnershipId}&type=update`
              : `/createPartnership?form=CompanyPartnerInfo&partner_ship_id=${partnershipId}`
          );
          dispatch(
            setCompanyInfoID({
              companyInfoId:
                resp.data.company_information.company_information_id,
            })
          );
        }
        loadingClear();
      });
    }
  };

export const CompanyPartnerInfoAction =
  (
    payload: CompanyPartnerInfoPayload,
    history: any,
    isUpdate: boolean,
    partnershipId: string,
    partnerCompanyInformationId: string,
    companyPartnerLogo: any,
    loadingClear: () => void
  ) =>
  (dispatch: AppDispatch) => {
    const formData = new FormData();
    formData.append('partnership_id', partnershipId);
    formData.append('company_name', payload.partnerCompanyName);
    formData.append(
      'privacy_policy_url',
      payload.partnerCompanyPrivacyPolicyURL
    );
    formData.append('site_terms_url', payload.partnerCompanySiteTermsURL);
    formData.append('cookie_policy', payload.partnerCompanyCookiePolicy);
    formData.append('logo', companyPartnerLogo);
    token = localStorage.getItem('token');
    if (isUpdate) {
      formData.append(
        'partner_company_information_id',
        partnerCompanyInformationId
      );
      multiPartPutRequest(
        `partnership/partner-company-information/`,
        formData,
        {
          Accept: 'application/json',
          Authorization: `Token ${token}`,
        }
      ).then((resp: any) => {
        if (resp.result === true) {
          history.push(
            `/createPartnership?form=CoordinatorPartnerInfo&partner_ship_id=${partnershipId}`
          );
          dispatch(
            setPartnerCompanyInfoID({
              partnerCompanyInformationId:
                resp.data.partner_company_information
                  .partner_company_information_id,
            })
          );
        }
        loadingClear();
      });
    } else {
      multiPartRequest(`partnership/partner-company-information/`, formData, {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      }).then((resp: any) => {
        if (resp.result === true) {
          history.push(`/previewPartnership?partner_ship_id=${partnershipId}`);
          dispatch(
            setPartnerCompanyInfoID({
              partnerCompanyInformationId:
                resp.data.partner_company_information
                  .partner_company_information_id,
            })
          );
        }
        loadingClear();
      });
    }
  };

export const CoordinatorPartnerInfoAction =
  (
    payload: CoordinatorPartnerInfoPayload,
    history: any,
    partnershipId: string,
    loadingClear: () => void
  ) =>
  () => {
    history.push(`/previewPartnership?partner_ship_id=${partnershipId}`);
    loadingClear();
  };

export const PreviewAndSaveInfoAction =
  (
    payload: PreviewPartnershipPayload,
    partnershipId: string,
    companyInformationId: string,
    partnerCompanyInformationId: string,
    companyLogo: any,
    companyPartnerLogo: any,
    loadingClear: () => void,
    showAlert: () => void
  ) =>
  (dispatch: AppDispatch) => {
    token = localStorage.getItem('token');
    const multipartCompanyInfoRequest = (formData: any) => {
      if (!companyInformationId) {
        return multiPartRequest(`partnership/company-information/`, formData, {
          Accept: 'application/json',
          Authorization: `Token ${token}`,
        });
      }
      return multiPartPutRequest(`partnership/company-information/`, formData, {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      });
    };

    const multiPartPartnerCompanyRequest = (formData: any) => {
      if (!partnerCompanyInformationId) {
        return multiPartRequest(
          `partnership/partner-company-information/`,
          formData,
          {
            Accept: 'application/json',
            Authorization: `Token ${token}`,
          }
        );
      }
      return multiPartPutRequest(
        `partnership/partner-company-information/`,
        formData,
        {
          Accept: 'application/json',
          Authorization: `Token ${token}`,
        }
      );
    };
    const companyInfoFormData = new FormData();
    const companyPartnerInfoFormData = new FormData();
    companyInfoFormData.append('partnership_id', partnershipId);
    companyInfoFormData.append('company_name', payload.companyName);
    companyInfoFormData.append('company_address', payload.companyAddress);
    companyInfoFormData.append('city', payload.city);
    companyInfoFormData.append('country', payload.country);
    companyInfoFormData.append('privacy_policy_url', payload.privacyPolicyURL);
    companyInfoFormData.append('site_terms_url', payload.siteTermsURL);
    companyInfoFormData.append('cookie_policy', payload.cookiePolicy);
    companyInfoFormData.append('state', payload.state);
    companyInfoFormData.append('zipcode', payload.zipCode);
    companyInfoFormData.append('logo', companyLogo);
    if (companyInformationId) {
      companyInfoFormData.append(
        'company_information_id',
        companyInformationId
      );
    }
    companyPartnerInfoFormData.append('partnership_id', partnershipId);
    companyPartnerInfoFormData.append(
      'company_name',
      payload.partnerCompanyName
    );
    companyPartnerInfoFormData.append(
      'privacy_policy_url',
      payload.partnerCompanyPrivacyPolicyURL
    );
    companyPartnerInfoFormData.append(
      'site_terms_url',
      payload.partnerCompanySiteTermsURL
    );
    companyPartnerInfoFormData.append(
      'cookie_policy',
      payload.partnerCompanyCookiePolicy
    );
    companyPartnerInfoFormData.append('logo', companyPartnerLogo);
    if (partnerCompanyInformationId) {
      companyPartnerInfoFormData.append(
        'partner_company_information_id',
        partnerCompanyInformationId
      );
    }
    putRequest(
      `partnership/`,
      {
        partnership_id: partnershipId,
        partnership_name: payload.partnershipName,
        content_hub_subdomain_name: payload.websiteSubDomain,
      },
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      }
    ).then((response: any) => {
      if (response.result === true) {
        dispatch(setPartnershipID({ id: response.data.partnership_id }));
        multipartCompanyInfoRequest(companyInfoFormData).then((resp: any) => {
          if (resp.result === true) {
            dispatch(
              setCompanyInfoID({
                companyInfoId:
                  resp.data.company_information.company_information_id,
              })
            );
            multiPartPartnerCompanyRequest(companyPartnerInfoFormData)
              .then((resp1: any) => {
                if (resp1.result === true) {
                  dispatch(
                    setPartnerCompanyInfoID({
                      partnerCompanyInformationId:
                        resp1.data.partner_company_information
                          .partner_company_information_id,
                    })
                  );
                  showAlert();
                }
              })
              .finally(() => {
                dispatch(
                  setPreviewRefresh({
                    refreshTimeStamp: Date.now(),
                  })
                );
                loadingClear();
              });
          }
        });
      }
    });
  };

// Selectors
export const selectCreatePartnershipResponse = (state: RootState) =>
  state.createPartnershipSlice;

export default createPartnershipSlice.reducer;
