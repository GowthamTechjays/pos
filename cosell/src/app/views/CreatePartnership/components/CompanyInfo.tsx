/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps, Form, Field } from 'formik';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import '../createPartnership.css';
import { InputAdornment } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { getRequest } from 'src/app/service';
import Loader from 'src/app/components/Loader';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import {
  errorMessageLabels,
  ButtonLabels,
  CompanyInfoLabels,
} from '../../../../strings';

import { RenderErrorMessage, GenTextField } from '../../../components/Form';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import uploadIcon from '../../../assets/upload-logo.svg';
import {
  selectCreatePartnershipResponse,
  CompanyInfoAction,
} from '../CreatePartnerShipSlice';

interface CompanyInfoValues {
  companyName: string;
  companyAddress: string;
  city: string;
  country: string;
  privacyPolicyURL: string;
  siteTermsURL: string;
  cookiePolicy: string;
  companyLogo: string;
  state: string;
  zipCode: string;
}

interface Props {
  steps: string[];
  history: any;
  isUpdate: boolean;
}

interface alert {
  showAlert: boolean;
  severity: string;
  message: string;
}

const CompanyInfo = ({ steps, history, isUpdate }: Props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');
  const queryparams = new URLSearchParams(window.location.search);
  const partnershipId: string = queryparams.get('partner_ship_id') || '0';
  const dispatch = useDispatch();
  const partnershipResponseData = useSelector(selectCreatePartnershipResponse);
  const fileInput = useRef<HTMLInputElement>(null);
  const formikForm = useRef<FormikProps<CompanyInfoValues>>(null);

  const [initialValues, setInitialValues] = useState<CompanyInfoValues>();
  const [companyId, setCompanyId] = useState('');
  const [alert, setAlert] = useState({
    showAlert: false,
    severity: '',
    message: '',
  });

  useEffect(() => {
    setLoading(true);
    if (isUpdate) {
      getRequest(`partnership/?partnership_id=${partnershipId}`, {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      }).then((resp: any) => {
        if (resp.result === true) {
          const companyInfoId =
            resp.data.company_information.company_information_id;
          if (companyInfoId) {
            setCompanyId(companyInfoId);
            setInitialValues({
              companyName: resp.data.company_information.company_name,
              companyAddress: resp.data.company_information.company_address,
              city: resp.data.company_information.city,
              country: resp.data.company_information.country,
              privacyPolicyURL:
                resp.data.company_information.privacy_policy_url,
              siteTermsURL: resp.data.company_information.site_terms_url,
              cookiePolicy: resp.data.company_information.cookie_policy,
              companyLogo: resp.data.company_information.logo,
              state: resp.data.company_information.state,
              zipCode: resp.data.company_information.zipcode,
            });
          } else {
            setInitialValues({
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
            });
          }
        } else {
          console.log(resp.data, 'error');
        }
      });
      setLoading(false);
    } else {
      setInitialValues({
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
      });
      setLoading(false);
    }
  }, []);

  const onFileSelected = (event: any) => {
    const file = event.target.files[0];
    if (
      file &&
      file.name &&
      formikForm &&
      formikForm.current &&
      file.type.includes('image/')
    ) {
      console.log(file);
      setSelectedFile(file);
      const fileName = file.name as string;
      setInitialValues({
        ...formikForm.current.values,
        companyLogo: fileName,
      });
    } else {
      setAlert((prevState: alert) => ({
        ...prevState,
        showAlert: true,
        message: errorMessageLabels.fileErrorMessage,
        severity: 'error',
      }));
    }
  };

  const companyInfoSchema = Yup.object().shape({
    companyName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.companyName),
    companyAddress: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.companyAddress),
    city: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.city)
      .matches(/^[^0-9]+$/, errorMessageLabels.invalidCity),
    country: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.country)
      .matches(/^[^0-9]+$/, errorMessageLabels.invalidCountry),
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
    // companyLogo: Yup.string().required('Company Logo Required'),
    state: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.state)
      .matches(/^[^0-9]+$/, errorMessageLabels.invalidState),
    zipCode: Yup.string()
      .trim()
      .required(errorMessageLabels.zipCode)
      .matches(/^(?=.*\d)[\d ]+$/, errorMessageLabels.invalidZipCode),
  });
  return (
    <div className="create-partnership-main-container">
      <Box sx={{ width: '75%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div className="create-partnership-info-title">
        {CompanyInfoLabels.companyInfoTitle}{' '}
      </div>{' '}
      {initialValues && (
        <Formik
          innerRef={formikForm}
          enableReinitialize
          initialValues={initialValues}
          validate={() => ({})}
          validationSchema={companyInfoSchema}
          onSubmit={(values) => {
            setLoading(true);
            dispatch(
              CompanyInfoAction(
                values,
                history,
                isUpdate,
                partnershipId,
                companyId,
                partnershipResponseData.partnerCompanyInformationId,
                selectedFile,
                () => setLoading(false)
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
              <Form
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onSubmit={handleSubmit}
              >
                <div className="company-info-form">
                  <div className="company-info-main-column-container">
                    <div className="company-info-form-column1">
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.companyName}</div>
                        <div>
                          <Field
                            type="text"
                            name="companyName"
                            value={values.companyName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={CompanyInfoLabels.companyName}
                            hasError={errors.companyName && touched.companyName}
                            errorMessage={errors.companyName}
                            component={GenTextField}
                          />
                          <RenderErrorMessage name="companyName" />
                        </div>
                      </div>
                      <div className="company-info-field textAreaInput">
                        <div>{CompanyInfoLabels.companyAddress}</div>
                        <div>
                          <Field
                            className="company-info-field-address-field"
                            type="text"
                            name="companyAddress"
                            value={values.companyAddress}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={CompanyInfoLabels.companyAddress}
                            hasError={
                              errors.companyAddress && touched.companyAddress
                            }
                            multiline
                            errorMessage={errors.companyAddress}
                            component={GenTextField}
                          />
                          <RenderErrorMessage name="companyAddress" />
                        </div>
                      </div>
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.city}</div>
                        <div>
                          <Field
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasError={errors.city && touched.city}
                            errorMessage={errors.city}
                            component={GenTextField}
                            placeholder={CompanyInfoLabels.city}
                          />
                          <RenderErrorMessage name="city" />
                        </div>
                      </div>
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.country}</div>
                        <div>
                          <Field
                            type="text"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={CompanyInfoLabels.country}
                            hasError={errors.country && touched.country}
                            errorMessage={errors.country}
                            component={GenTextField}
                          />
                          <RenderErrorMessage name="country" />
                        </div>
                      </div>
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.privacyPolicyURL}</div>
                        <div>
                          <Field
                            type="text"
                            name="privacyPolicyURL"
                            value={values.privacyPolicyURL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasError={
                              errors.privacyPolicyURL &&
                              touched.privacyPolicyURL
                            }
                            errorMessage={errors.privacyPolicyURL}
                            component={GenTextField}
                            placeholder={CompanyInfoLabels.privacyPolicyURL}
                          />
                          <RenderErrorMessage name="privacyPolicyURL" />
                        </div>
                      </div>
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.siteTermsURL}</div>
                        <div>
                          <Field
                            type="text"
                            name="siteTermsURL"
                            value={values.siteTermsURL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasError={
                              errors.siteTermsURL && touched.siteTermsURL
                            }
                            errorMessage={errors.siteTermsURL}
                            component={GenTextField}
                            placeholder={CompanyInfoLabels.siteTermsURL}
                          />
                          <RenderErrorMessage name="siteTermsURL" />
                        </div>
                      </div>
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.cookiePolicy}</div>
                        <div>
                          <Field
                            type="text"
                            name="cookiePolicy"
                            value={values.cookiePolicy}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasError={
                              errors.cookiePolicy && touched.cookiePolicy
                            }
                            errorMessage={errors.cookiePolicy}
                            placeholder={CompanyInfoLabels.cookiePolicy}
                            component={GenTextField}
                          />
                          <RenderErrorMessage name="cookiePolicy" />
                        </div>
                      </div>
                    </div>
                    <div className="company-info-form-column2">
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.companyLogo}</div>
                        <div>
                          <Field
                            type="file"
                            name="companyLogo"
                            value={values.companyLogo}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            readOnly
                            hasError={errors.companyLogo && touched.companyLogo}
                            errorMessage={errors.companyLogo}
                            placeholder={CompanyInfoLabels.companyLogo}
                            component={GenTextField}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={(e) => {
                                      if (fileInput && fileInput.current) {
                                        fileInput.current.click();
                                      }
                                    }}
                                  >
                                    <input
                                      accept="image/*"
                                      ref={fileInput}
                                      type="file"
                                      style={{ display: 'none' }}
                                      onChange={onFileSelected}
                                    />

                                    <img src={uploadIcon} alt="" />
                                  </IconButton>
                                </InputAdornment>
                              ),
                              accept: 'image/*',
                              readOnly: true,
                            }}
                          />
                        </div>
                      </div>
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.state}</div>
                        <div>
                          <Field
                            type="text"
                            name="state"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasError={errors.state && touched.state}
                            errorMessage={errors.state}
                            placeholder={CompanyInfoLabels.state}
                            component={GenTextField}
                          />
                          <RenderErrorMessage name="state" />
                        </div>
                      </div>
                      <div className="company-info-field">
                        <div>{CompanyInfoLabels.zipCode}</div>
                        <div>
                          <Field
                            type="text"
                            name="zipCode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasError={errors.zipCode && touched.zipCode}
                            errorMessage={errors.zipCode}
                            placeholder={CompanyInfoLabels.zipCode}
                            component={GenTextField}
                          />
                          <RenderErrorMessage name="zipCode" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="create-partnership-info-button-container">
                    <SecondaryButton
                      onClick={() =>
                        history.push(
                          `/createPartnership?form=PartnerShipInfo&type=update&partner_ship_id=${partnershipId}`
                        )
                      }
                      style={{ marginRight: '30px', minWidth: '160px' }}
                    >
                      {ButtonLabels.previous}
                    </SecondaryButton>
                    <PrimaryButton type="submit" style={{ minWidth: '160px' }}>
                      {ButtonLabels.continue}
                    </PrimaryButton>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
      {loading === true && <Loader />}
      {alert.showAlert && (
        <SnackbarAlert
          severity={alert.severity}
          handler={() => {
            setAlert((prevState: alert) => ({
              ...prevState,
              showAlert: false,
            }));
          }}
          showalert={alert.showAlert}
          message={alert.message}
        />
      )}
    </div>
  );
};
export default CompanyInfo;
