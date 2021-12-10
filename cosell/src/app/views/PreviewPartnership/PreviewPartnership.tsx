/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import './PreviewPartnership.css';
import { InputAdornment } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { getRequest } from 'src/app/service';
import { useLocation, useHistory } from 'react-router-dom';
import Loader from 'src/app/components/Loader';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';
import SecondaryButton from 'src/app/components/Button/SecondaryButton';
import { errorMessageLabels, PreviewPartnershipLabels } from '../../../strings';
import { RenderErrorMessage, GenTextField } from '../../components/Form/index';
import UploadLogo from '../../components/Icons/PreviewPartnership/UploadLogoIcon.svg';
import DownArrow from '../../components/Icons/PreviewPartnership/DownArrow.svg';

import {
  selectCreatePartnershipResponse,
  PreviewAndSaveInfoAction,
} from '../CreatePartnership/CreatePartnerShipSlice';

interface previewPartnershipValues {
  partnershipName: string;
  websiteSubDomain: string;
  companyName: string;
  companyLogo: string;
  companyAddress: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  privacyPolicyURL: string;
  siteTermsURL: string;
  cookiePolicy: string;
  partnerCompanyName: string;
  partnerCompanySiteTermsURL: string;
  partnerCompanyLogo: string;
  partnerCompanyCookiePolicy: string;
  partnerCompanyPrivacyPolicyURL: string;
}

interface alert {
  showAlert: boolean;
  severity: string;
  message: string;
}
const PreviewPartnership = () => {
  const queryparams = new URLSearchParams(window.location.search);
  const partnershipId: string = queryparams.get('partner_ship_id') || '0';

  const [selectedCompanyFile, setSelectedCompanyFile] = useState();
  const [selectedPartnerCompanyFile, setSelectedPartnerCompanyFile] =
    useState();
  const [showPartnership, setShowPartnership] = useState(true);
  const [showCompany, setShowCompany] = useState(true);
  const [showCompanyPartner, setShowCompanyPartner] = useState(true);
  const [showPartnershipTeam, setShowPartnershipTeam] = useState(true);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const dispatch = useDispatch();
  const partnershipResponseData = useSelector(selectCreatePartnershipResponse);
  const location = useLocation();
  const companyFileInput = useRef<HTMLInputElement>(null);
  const companyPartnerFileInput = useRef<HTMLInputElement>(null);
  const formikForm = useRef<FormikProps<previewPartnershipValues>>(null);
  const [initialValues, setInitialValues] =
    useState<previewPartnershipValues>();
  const [companyId, setCompanyId] = useState('');
  const [partnerCompanyInfoId, setPartnerCompanyInfoId] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    showAlert: false,
    severity: '',
    message: '',
  });

  useEffect(() => {
    setLoading(true);
    getRequest(`partnership/?partnership_id=${partnershipId}`, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    }).then((resp: any) => {
      const companyInfo = resp.data.company_information;
      const partnerCompanyInfo = resp.data.partner_company_information;
      if (resp.result === true) {
        let companyInfoId;
        let partnerCompanyInfoID;
        if (!companyInfo && !partnerCompanyInfo) {
          setCompanyId('');
          setPartnerCompanyInfoId('');
          setInitialValues({
            partnershipName: resp.data.partnership_name,
            websiteSubDomain: resp.data.content_hub_subdomain_name,
            companyName: '',
            companyAddress: '',
            city: '',
            country: '',
            privacyPolicyURL: '',
            siteTermsURL: '',
            cookiePolicy: '',
            companyLogo: '',
            state: '',
            zipCode: '',
            partnerCompanyName: '',
            partnerCompanyLogo: '',
            partnerCompanyPrivacyPolicyURL: '',
            partnerCompanySiteTermsURL: '',
            partnerCompanyCookiePolicy: '',
          });
        } else if (companyInfo && !partnerCompanyInfo) {
          companyInfoId = resp.data.company_information.company_information_id;
          setCompanyId(companyInfoId);
          setPartnerCompanyInfoId('');
          setInitialValues({
            partnershipName: resp.data.partnership_name,
            websiteSubDomain: resp.data.content_hub_subdomain_name,
            companyName: resp.data.company_information.company_name,
            companyAddress: resp.data.company_information.company_address,
            city: resp.data.company_information.city,
            country: resp.data.company_information.country,
            privacyPolicyURL: resp.data.company_information.privacy_policy_url,
            siteTermsURL: resp.data.company_information.site_terms_url,
            cookiePolicy: resp.data.company_information.cookie_policy,
            companyLogo: resp.data.company_information.logo,
            state: resp.data.company_information.state,
            zipCode: resp.data.company_information.zipcode,
            partnerCompanyName: '',
            partnerCompanyLogo: '',
            partnerCompanyPrivacyPolicyURL: '',
            partnerCompanySiteTermsURL: '',
            partnerCompanyCookiePolicy: '',
          });
        } else if (companyInfo && partnerCompanyInfo) {
          companyInfoId = resp.data.company_information.company_information_id;
          partnerCompanyInfoID =
            resp.data.partner_company_information
              .partner_company_information_id;
          setCompanyId(companyInfoId);
          setPartnerCompanyInfoId(partnerCompanyInfoID);
          setInitialValues({
            partnershipName: resp.data.partnership_name,
            websiteSubDomain: resp.data.content_hub_subdomain_name,
            companyName: resp.data.company_information.company_name,
            companyAddress: resp.data.company_information.company_address,
            city: resp.data.company_information.city,
            country: resp.data.company_information.country,
            privacyPolicyURL: resp.data.company_information.privacy_policy_url,
            siteTermsURL: resp.data.company_information.site_terms_url,
            cookiePolicy: resp.data.company_information.cookie_policy,
            companyLogo: resp.data.company_information.logo,
            state: resp.data.company_information.state,
            zipCode: resp.data.company_information.zipcode,
            partnerCompanyName:
              resp.data.partner_company_information.company_name,
            partnerCompanyLogo: resp.data.partner_company_information.logo,
            partnerCompanyPrivacyPolicyURL:
              resp.data.partner_company_information.privacy_policy_url,
            partnerCompanySiteTermsURL:
              resp.data.partner_company_information.site_terms_url,
            partnerCompanyCookiePolicy:
              resp.data.partner_company_information.cookie_policy,
          });
        }
      }
      setLoading(false);
    });
  }, [location]);

  const onCompanyPartnerFileSelected = (event: any) => {
    const file = event.target.files[0];
    setSelectedPartnerCompanyFile(file);

    if (file && file.name && formikForm && formikForm.current) {
      const fileName = file.name as string;
      setInitialValues({
        ...formikForm.current.values,
        partnerCompanyLogo: fileName,
      });
    }
  };

  const onCompanyFileSelected = (event: any) => {
    const file1 = event.target.files[0];
    if (
      file1 &&
      file1.name &&
      formikForm &&
      formikForm.current &&
      file1.type.includes('image/')
    ) {
      setSelectedCompanyFile(file1);
      const fileName = file1.name as string;
      setInitialValues({
        ...formikForm.current.values,
        companyLogo: fileName,
      });
    } else {
      setAlert((prevState: alert) => ({
        ...prevState,
        showAlert: true,
        message: PreviewPartnershipLabels.fileErrorMessage,
        severity: 'error',
      }));
    }
  };

  const validationSchema = Yup.object().shape({
    partnershipName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.partnershipName),
    websiteSubDomain: Yup.string()
      .trim()
      .required(errorMessageLabels.websiteSubDomain),
    companyName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.companyName),
    // companyLogo: Yup.string().required('CompanyLogo required'),
    companyAddress: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.companyAddress),
    city: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.city),
    state: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.state),
    country: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.country),
    zipCode: Yup.string()
      .trim()
      .required(errorMessageLabels.zipCode)
      .matches(/^(?=.*\d)[\d ]+$/, errorMessageLabels.invalidZipCode),

    privacyPolicyURL: Yup.string()
      .trim()
      .required(errorMessageLabels.privacyPolicy)
      .matches(
        /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/g,
        errorMessageLabels.invalidURL
      ),
    siteTermsURL: Yup.string()
      .trim()
      .required(errorMessageLabels.siteTermsURL)
      .matches(
        /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/g,
        errorMessageLabels.invalidURL
      ),
    cookiePolicy: Yup.string().trim().required(errorMessageLabels.cookiePolicy),
    partnerCompanyName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.partnerCompanyName),
    partnerCompanySiteTermsURL: Yup.string()
      .trim()
      .required(errorMessageLabels.partnerCompanySiteTermsURL)
      .matches(
        /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/g,
        errorMessageLabels.invalidURL
      ),
    // partnerCompanyLogo: Yup.string().required('partnerCompanyLogo required'),
    partnerCompanyCookiePolicy: Yup.string()
      .trim()
      .required(errorMessageLabels.partnerCompanyCookiePolicy),
    partnerCompanyPrivacyPolicyURL: Yup.string()
      .trim()
      .required(errorMessageLabels.partnerCompanyPrivacyPolicyURL)
      .matches(
        /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/g,
        errorMessageLabels.invalidURL
      ),
  });

  return (
    <div className="main_div">
      <div className="preview_partnership_main_card">
        {initialValues && (
          <Formik
            innerRef={formikForm}
            enableReinitialize
            initialValues={initialValues}
            validate={() => ({})}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setLoading(true);
              dispatch(
                PreviewAndSaveInfoAction(
                  values,
                  partnershipId,
                  companyId,
                  partnerCompanyInfoId,
                  selectedCompanyFile,
                  selectedPartnerCompanyFile,
                  () => setLoading(false),
                  () =>
                    setAlert((prevState: alert) => ({
                      ...prevState,
                      showAlert: true,
                      message: PreviewPartnershipLabels.snackbarMsg,
                      severity: 'success',
                    }))
                )
              );
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
                  <div className="preview_partnership_title_div">
                    {PreviewPartnershipLabels.titleLabel}
                    <div>
                      <SecondaryButton
                        style={{ marginRight: '30px', minWidth: '160px' }}
                        onClick={() => history.push('/accountSetup')}
                      >
                        {PreviewPartnershipLabels.cancelButtonLabel}
                      </SecondaryButton>
                      <PrimaryButton
                        type="submit"
                        style={{ minWidth: '160px' }}
                      >
                        {PreviewPartnershipLabels.saveButtonLabel}
                      </PrimaryButton>
                    </div>
                  </div>
                  <div
                    className="preview_partnership_info_title_div"
                    onClickCapture={() => setShowPartnership(!showPartnership)}
                  >
                    {PreviewPartnershipLabels.partnershipInfoLabel}
                    <IconButton>
                      <img src={DownArrow} alt="" />
                    </IconButton>
                  </div>
                  {showPartnership ? (
                    <div className="info_div">
                      <div className="each_info_div">
                        {PreviewPartnershipLabels.partnershipNameLabel}
                        <div className="textfield_div">
                          <Field
                            type="text"
                            name="partnershipName"
                            value={values.partnershipName}
                            placeholder={
                              PreviewPartnershipLabels.partnershipNameLabel
                            }
                            onBlur={handleBlur}
                            onChange={handleChange}
                            hasError={
                              errors.partnershipName && touched.partnershipName
                            }
                            errorMessage={errors.partnershipName}
                            component={GenTextField}
                            style={{ padding: '0px 20% 0px 5%' }}
                          />
                          <RenderErrorMessage name="partnershipName" />
                        </div>
                      </div>
                      <div className="each_info_div">
                        {PreviewPartnershipLabels.webSubdomainNameLabel}
                        <div className="textfield_div">
                          <Field
                            type="text"
                            name="websiteSubDomain"
                            value={values.websiteSubDomain}
                            placeholder={
                              PreviewPartnershipLabels.webSubDomainNamePlaceholder
                            }
                            onBlur={handleBlur}
                            onChange={handleChange}
                            hasError={
                              errors.websiteSubDomain &&
                              touched.websiteSubDomain
                            }
                            errorMessage={errors.websiteSubDomain}
                            style={{
                              margin: '0px 20% 0px 5%',
                            }}
                            component={GenTextField}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end" variant="filled">
                                  {
                                    PreviewPartnershipLabels.endAdornmentTextLabel
                                  }
                                </InputAdornment>
                              ),
                            }}
                          />
                          <RenderErrorMessage name="websiteSubDomain" />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div
                    className="preview_partnership_info_title_div"
                    onClickCapture={() => setShowCompany(!showCompany)}
                  >
                    {PreviewPartnershipLabels.companyInfoLabel}
                    <IconButton>
                      <img src={DownArrow} alt="" />
                    </IconButton>
                  </div>
                  {showCompany ? (
                    <div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.companyNameLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="companyName"
                              value={values.companyName}
                              placeholder={
                                PreviewPartnershipLabels.companyNameLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.companyName && touched.companyName
                              }
                              errorMessage={errors.companyName}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="companyName" />
                          </div>
                        </div>
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.companyLogoLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="companyLogo"
                              value={values.companyLogo}
                              placeholder={
                                PreviewPartnershipLabels.companyLogoPlaceholder
                              }
                              // onBlur={handleBlur}
                              // onChange={handleChange}
                              hasError={
                                errors.companyLogo && touched.companyLogo
                              }
                              errorMessage={errors.companyLogo}
                              component={GenTextField}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() => {
                                        if (
                                          companyFileInput &&
                                          companyFileInput.current
                                        ) {
                                          companyFileInput.current.click();
                                        }
                                      }}
                                    >
                                      <input
                                        accept="image/x-png,image/gif,image/jpeg"
                                        ref={companyFileInput}
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={onCompanyFileSelected}
                                      />
                                      <img src={UploadLogo} alt="" />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                                accept: 'image/*',
                                readOnly: true,
                              }}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="companyLogo" />
                          </div>
                        </div>
                      </div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.companyAddressLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="companyAddress"
                              value={values.companyAddress}
                              placeholder={
                                PreviewPartnershipLabels.companyAddressLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.companyAddress && touched.companyAddress
                              }
                              errorMessage={errors.companyAddress}
                              component={GenTextField}
                              style={{
                                margin: '0px 20% 0px 5%',
                                minHeight: '85px',
                              }}
                              multiline
                            />
                            <RenderErrorMessage name="companyAddress" />
                          </div>
                        </div>
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.stateLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="state"
                              value={values.state}
                              placeholder={PreviewPartnershipLabels.stateLabel}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={errors.state && touched.state}
                              errorMessage={errors.state}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="state" />
                          </div>
                        </div>
                      </div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.cityLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="city"
                              value={values.city}
                              placeholder={PreviewPartnershipLabels.cityLabel}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={errors.city && touched.city}
                              errorMessage={errors.city}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="city" />
                          </div>
                        </div>
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.zipLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="zipCode"
                              value={values.zipCode}
                              placeholder={PreviewPartnershipLabels.zipLabel}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={errors.zipCode && touched.zipCode}
                              errorMessage={errors.zipCode}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="zipCode" />
                          </div>
                        </div>
                      </div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.countryLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="country"
                              value={values.country}
                              placeholder={
                                PreviewPartnershipLabels.countryLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={errors.country && touched.country}
                              errorMessage={errors.country}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="country" />
                          </div>
                        </div>
                      </div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.privacyPolicyURLLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="privacyPolicyURL"
                              value={values.privacyPolicyURL}
                              placeholder={
                                PreviewPartnershipLabels.privacyPolicyURLLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.privacyPolicyURL &&
                                touched.privacyPolicyURL
                              }
                              errorMessage={errors.privacyPolicyURL}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="privacyPolicyURL" />
                          </div>
                        </div>
                      </div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.siteTermsURLLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="siteTermsURL"
                              value={values.siteTermsURL}
                              placeholder={
                                PreviewPartnershipLabels.siteTermsURLLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.siteTermsURL && touched.siteTermsURL
                              }
                              errorMessage={errors.siteTermsURL}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="siteTermsURL" />
                          </div>
                        </div>
                      </div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.cookiePolicyLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="cookiePolicy"
                              value={values.cookiePolicy}
                              placeholder={
                                PreviewPartnershipLabels.cookiePolicyLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.cookiePolicy && touched.cookiePolicy
                              }
                              errorMessage={errors.cookiePolicy}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="cookiePolicy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div
                    className="preview_partnership_info_title_div"
                    onClickCapture={() =>
                      setShowCompanyPartner(!showCompanyPartner)
                    }
                  >
                    {PreviewPartnershipLabels.partnerCompanyInfoLabel}
                    <IconButton>
                      <img src={DownArrow} alt="" />
                    </IconButton>
                  </div>
                  {showCompanyPartner ? (
                    <div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.partnerCompanyNameLabel}
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="partnerCompanyName"
                              value={values.partnerCompanyName}
                              placeholder={
                                PreviewPartnershipLabels.partnerCompanyNameLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.partnerCompanyName &&
                                touched.partnerCompanyName
                              }
                              errorMessage={errors.partnerCompanyName}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="partnerCompanyName" />
                          </div>
                        </div>
                        <div className="each_info_div">
                          {
                            PreviewPartnershipLabels.partnerCompanySiteTermsURLLabel
                          }
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="partnerCompanySiteTermsURL"
                              value={values.partnerCompanySiteTermsURL}
                              placeholder={
                                PreviewPartnershipLabels.siteTermsURLLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.partnerCompanySiteTermsURL &&
                                touched.partnerCompanySiteTermsURL
                              }
                              errorMessage={errors.partnerCompanySiteTermsURL}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="partnerCompanySiteTermsURL" />
                          </div>
                        </div>
                      </div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {PreviewPartnershipLabels.partnerCompanyLogoLabel}
                          <div className="textfield_div">
                            <Field
                              type="file"
                              name="partnerCompanyLogo"
                              value={values.partnerCompanyLogo}
                              placeholder={
                                PreviewPartnershipLabels.companyLogoPlaceholder
                              }
                              // onBlur={handleBlur}
                              // onChange={handleChange}
                              hasError={
                                errors.partnerCompanyLogo &&
                                touched.partnerCompanyLogo
                              }
                              errorMessage={errors.partnerCompanyLogo}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() => {
                                        if (
                                          companyPartnerFileInput &&
                                          companyPartnerFileInput.current
                                        ) {
                                          companyPartnerFileInput.current.click();
                                        }
                                      }}
                                    >
                                      <input
                                        accept="image/*"
                                        ref={companyPartnerFileInput}
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={onCompanyPartnerFileSelected}
                                      />
                                      <img src={UploadLogo} alt="" />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                                accept: 'image/*',
                                readOnly: true,
                              }}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="partnerCompanyLogo" />
                          </div>
                        </div>
                        <div className="each_info_div">
                          {
                            PreviewPartnershipLabels.partnerCompanyCookiePolicyLabel
                          }
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="partnerCompanyCookiePolicy"
                              value={values.partnerCompanyCookiePolicy}
                              placeholder={
                                PreviewPartnershipLabels.cookiePolicyLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.partnerCompanyCookiePolicy &&
                                touched.partnerCompanyCookiePolicy
                              }
                              errorMessage={errors.partnerCompanyCookiePolicy}
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="partnerCompanyCookiePolicy" />
                          </div>
                        </div>
                      </div>
                      <div className="info_div">
                        <div className="each_info_div">
                          {
                            PreviewPartnershipLabels.partnerCompanyPrivacyPolicyURLLabel
                          }
                          <div className="textfield_div">
                            <Field
                              type="text"
                              name="partnerCompanyPrivacyPolicyURL"
                              value={values.partnerCompanyPrivacyPolicyURL}
                              placeholder={
                                PreviewPartnershipLabels.privacyPolicyURLLabel
                              }
                              onBlur={handleBlur}
                              onChange={handleChange}
                              hasError={
                                errors.partnerCompanyPrivacyPolicyURL &&
                                touched.partnerCompanyPrivacyPolicyURL
                              }
                              errorMessage={
                                errors.partnerCompanyPrivacyPolicyURL
                              }
                              component={GenTextField}
                              style={{ margin: '0px 20% 0px 5%' }}
                            />
                            <RenderErrorMessage name="partnerCompanyPrivacyPolicyURL" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* <div
                    className="preview_partnership_info_title_div"
                    onClick={() => setShowPartnershipTeam(!showPartnershipTeam)}
                  >
                    {PreviewPartnershipLabels.partnershipTeamLabel}
                    <IconButton>
                      <img src={DownArrow} alt="" />
                    </IconButton>
                  </div>
                  {showPartnershipTeam ? (
                    <div className="info_div">
                      <div className="addCollaborator_button_div">
                        <Button
                          className="save_button"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          {PreviewPartnershipLabels.addCollaboratorButtonLabel}
                        </Button>
                      </div>
                    </div>
                  ) : null} */}
                </Form>
              );
            }}
          </Formik>
        )}
      </div>
      {loading && <Loader />}
      {alert.showAlert && (
        <SnackbarAlert
          severity={alert.severity}
          handler={() => {
            setAlert((prevState: alert) => ({
              ...prevState,
              showAlert: false,
            }));
            if (alert.severity !== 'error') {
              history.push(
                `/accountSetup?partner_ship_id=${partnershipId}&uploadAsset=true`
              );
            }
          }}
          showalert={alert.showAlert}
          message={alert.message}
        />
      )}
    </div>
  );
};

export default PreviewPartnership;
