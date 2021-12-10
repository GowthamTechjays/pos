/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from 'react';
import { Formik, FormikProps, Form, Field } from 'formik';
import * as Yup from 'yup';
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
  ButtonLabels,
  CompanyPartnerInfoLabels,
  errorMessageLabels,
} from '../../../../strings';
import { RenderErrorMessage, GenTextField } from '../../../components/Form';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import uploadIcon from '../../../assets/upload-logo.svg';
import {
  selectCreatePartnershipResponse,
  CompanyPartnerInfoAction,
} from '../CreatePartnerShipSlice';

interface CompanyPartnerInfoValues {
  partnerCompanyName: string;
  partnerCompanyLogo: string;
  partnerCompanyPrivacyPolicyURL: string;
  partnerCompanySiteTermsURL: string;
  partnerCompanyCookiePolicy: string;
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

const CompanyPartnerInfo = ({ steps, history, isUpdate }: Props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');
  const queryparams = new URLSearchParams(window.location.search);
  const partnershipId: string = queryparams.get('partner_ship_id') || '0';
  const dispatch = useDispatch();
  const partnershipResponseData = useSelector(selectCreatePartnershipResponse);
  const fileInput = useRef<HTMLInputElement>(null);
  const formikForm = useRef<FormikProps<CompanyPartnerInfoValues>>(null);
  const [partnerCompanyInfoId, setPartnerCompanyInfoId] = useState('');
  const [alert, setAlert] = useState({
    showAlert: false,
    severity: '',
    message: '',
  });

  const [initialValues, setInitialValues] =
    useState<CompanyPartnerInfoValues>();
  useEffect(() => {
    setLoading(true);
    if (isUpdate) {
      getRequest(`partnership/?partnership_id=${partnershipId}`, {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      }).then((resp: any) => {
        if (resp.result === true) {
          const partnercompanyInfoID =
            resp.data.partner_company_information
              .partner_company_information_id;
          if (partnercompanyInfoID) {
            setPartnerCompanyInfoId(partnercompanyInfoID);
            setInitialValues({
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
          } else {
            setInitialValues({
              partnerCompanyName: '',
              partnerCompanyLogo: '',
              partnerCompanyPrivacyPolicyURL: '',
              partnerCompanySiteTermsURL: '',
              partnerCompanyCookiePolicy: '',
            });
          }
        } else {
          console.log(resp.data, 'error');
        }
        setLoading(false);
      });
    } else {
      setInitialValues({
        partnerCompanyName: '',
        partnerCompanyLogo: '',
        partnerCompanyPrivacyPolicyURL: '',
        partnerCompanySiteTermsURL: '',
        partnerCompanyCookiePolicy: '',
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
      setSelectedFile(file);
      const fileName = file.name as string;
      setInitialValues({
        ...formikForm.current.values,
        partnerCompanyLogo: fileName,
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

  const CompanyPartnerInfoSchema = Yup.object().shape({
    partnerCompanyName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.partnerCompanyName),
    partnerCompanyPrivacyPolicyURL: Yup.string()
      .trim()
      .required(errorMessageLabels.privacyPolicy)
      .matches(
        /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/g,
        errorMessageLabels.invalidURL
      ),
    partnerCompanySiteTermsURL: Yup.string()
      .trim()
      .required(errorMessageLabels.siteTermsURL)
      .matches(
        /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/g,
        errorMessageLabels.invalidURL
      ),
    partnerCompanyCookiePolicy: Yup.string()
      .trim()
      .required(errorMessageLabels.cookiePolicy),
    // partnerCompanyLogo: Yup.string().required('Company Logo Required'),
  });

  return (
    <div className="create-partnership-main-container">
      <Box sx={{ width: '75%' }}>
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div className="create-partnership-info-title">
        {CompanyPartnerInfoLabels.companyPartnerInfoTitle}{' '}
      </div>{' '}
      {initialValues && (
        <Formik
          innerRef={formikForm}
          enableReinitialize
          initialValues={initialValues}
          validate={() => ({})}
          validationSchema={CompanyPartnerInfoSchema}
          onSubmit={(values) => {
            setLoading(true);
            dispatch(
              CompanyPartnerInfoAction(
                values,
                history,
                isUpdate,
                partnershipId,
                partnerCompanyInfoId,
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
                <div className="create-partnership-info-form">
                  <div className="create-partnership-info-field">
                    <div>{CompanyPartnerInfoLabels.partnerCompanyName}</div>
                    <div>
                      <Field
                        className="materialui-field"
                        name="partnerCompanyName"
                        type="text"
                        value={values.partnerCompanyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={
                          errors.partnerCompanyName &&
                          touched.partnerCompanyName
                        }
                        errorMessage={errors.partnerCompanyName}
                        placeholder={
                          CompanyPartnerInfoLabels.partnerCompanyName
                        }
                        component={GenTextField}
                      />
                      <RenderErrorMessage name="partnerCompanyName" />
                    </div>
                  </div>
                  <div className="create-partnership-info-field">
                    <div>{CompanyPartnerInfoLabels.partnerCompanyLogo}</div>
                    <div>
                      <Field
                        name="partnerCompanyLogo"
                        component={GenTextField}
                        type="file"
                        value={values.partnerCompanyLogo}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        hasError={
                          errors.partnerCompanyLogo &&
                          touched.partnerCompanyLogo
                        }
                        errorMessage={errors.partnerCompanyLogo}
                        placeholder={
                          CompanyPartnerInfoLabels.partnerCompanyLogoLabel
                        }
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
                      <RenderErrorMessage name="partnerCompanyLogo" />
                    </div>
                  </div>
                  <div className="create-partnership-info-field">
                    <div className="create-partnership-info-field-policy-url">
                      {CompanyPartnerInfoLabels.partnerCompanyPrivacyPolicyURL}
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="partnerCompanyPrivacyPolicyURL"
                        placeholder={
                          CompanyPartnerInfoLabels.partnerCompanyPrivacyPolicyURLLabel
                        }
                        value={values.partnerCompanyPrivacyPolicyURL}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={
                          errors.partnerCompanyPrivacyPolicyURL &&
                          touched.partnerCompanyPrivacyPolicyURL
                        }
                        errorMessage={errors.partnerCompanyPrivacyPolicyURL}
                        component={GenTextField}
                      />
                      <RenderErrorMessage name="partnerCompanyPrivacyPolicyURL" />
                    </div>
                  </div>
                  <div className="create-partnership-info-field">
                    <div className="create-partnership-info-field-siteterms-url">
                      {CompanyPartnerInfoLabels.partnerCompanySiteTermsURL}
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="partnerCompanySiteTermsURL"
                        placeholder={
                          CompanyPartnerInfoLabels.partnerCompanySiteTermsURLLabel
                        }
                        value={values.partnerCompanySiteTermsURL}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={
                          errors.partnerCompanySiteTermsURL &&
                          touched.partnerCompanySiteTermsURL
                        }
                        errorMessage={errors.partnerCompanySiteTermsURL}
                        component={GenTextField}
                      />
                      <RenderErrorMessage name="partnerCompanySiteTermsURL" />
                    </div>
                  </div>
                  <div className="create-partnership-info-field">
                    <div className="create-partnership-info-field-cookie-policy">
                      {CompanyPartnerInfoLabels.partnerCompanyCookiePolicy}
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="partnerCompanyCookiePolicy"
                        placeholder={
                          CompanyPartnerInfoLabels.partnerCompanyCookiePolicyLabel
                        }
                        value={values.partnerCompanyCookiePolicy}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={
                          errors.partnerCompanyCookiePolicy &&
                          touched.partnerCompanyCookiePolicy
                        }
                        errorMessage={errors.partnerCompanyCookiePolicy}
                        component={GenTextField}
                      />
                      <RenderErrorMessage name="partnerCompanyCookiePolicy" />
                    </div>
                  </div>
                  <div className="create-partnership-info-button-container">
                    <SecondaryButton
                      onClick={() =>
                        history.push(
                          `/createPartnership?form=CompanyInfo&type=update&partner_ship_id=${partnershipId}`
                        )
                      }
                      style={{ marginRight: '30px', minWidth: '160px' }}
                    >
                      {ButtonLabels.previous}
                    </SecondaryButton>
                    <PrimaryButton type="submit" style={{ minWidth: '160px' }}>
                      {ButtonLabels.previewAndSave}
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
export default CompanyPartnerInfo;
