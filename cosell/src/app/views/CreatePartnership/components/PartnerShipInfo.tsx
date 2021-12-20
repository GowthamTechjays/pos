/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useDispatch, useSelector } from 'react-redux';
import { getRequest } from 'src/app/service';
import Loader from 'src/app/components/Loader';
import TagsInput from 'src/app/components/TagsInput';
import { RenderErrorMessage, GenTextField } from '../../../components/Form';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import '../createPartnership.css';
import {
  ButtonLabels,
  CreatePartnershipLabels,
  errorMessageLabels,
} from '../../../../strings';
import {
  selectCreatePartnershipResponse,
  PartnershipInfoAction,
} from '../CreatePartnerShipSlice';

interface PartnershipInfoValues {
  partnershipName: string;
  websiteSubDomain: string;
  whitelistedDomain: string[];
}

interface Props {
  steps: string[];
  history: any;
  isUpdate: boolean;
}

interface Ids {
  partnershipId: string;
  companyInfoId: string;
  partnerCompanyId: string;
  coordinatorInfoId: string;
}

const PartnerShipInfo = ({ steps, history, isUpdate }: Props, props: any) => {
  const token = localStorage.getItem('token');
  const compId = '';
  const queryparams = new URLSearchParams(window.location.search);
  const partnershipId: string = queryparams.get('partner_ship_id') || '0';
  const companyInfoId: string = queryparams.get('company_info_id') || '0';
  const partnershipResponseData = useSelector(selectCreatePartnershipResponse);
  const [initialValues, setInitialValues] = useState<PartnershipInfoValues>();
  const [companyId, setCompanyId] = useState('');
  const [partnerInfoId, setPartnerInfoId] = useState('');
  const [partnershipIds, setPartnershipIds] = useState<Ids>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (isUpdate) {
      getRequest(`partnership/?partnership_id=${partnershipId}`, {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      }).then((resp: any) => {
        if (resp.result === true) {
          if (resp.data.company_information) {
            setCompanyId(resp.data.company_information.company_information_id);
          }

          if (resp.data.partner_company_information) {
            setPartnerInfoId(
              resp.data.partner_company_information
                .partner_company_information_id
            );
          }
          setInitialValues({
            partnershipName: resp.data.partnership_name,
            websiteSubDomain: resp.data.content_hub_subdomain_name,
            whitelistedDomain: [''],
          });
        } else {
          console.log(resp.data, 'error');
        }
        setLoading(false);
      });
    } else {
      setInitialValues({
        partnershipName: '',
        websiteSubDomain: '',
        whitelistedDomain: [],
      });
      setLoading(false);
    }
  }, []);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoginError(''), 3000);
    setLoginError(partnershipResponseData.errorMsg);
    return () => clearTimeout(timer);
  }, [partnershipResponseData]);
  const dispatch = useDispatch();

  const PartnerShipInfoSchema = Yup.object().shape({
    partnershipName: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.partnershipName),
    websiteSubDomain: Yup.string()
      .trim()
      .min(3, 'Minimum 3 characters is required')
      .required(errorMessageLabels.subDomain),
    // .matches(
    //   /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/,
    //   'Invalid Subdomain Name'
    // ),
  });
  return (
    <div className="create-partnership-main-container">
      <Box sx={{ width: '75%' }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label: string) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div className="create-partnership-info-title">
        {CreatePartnershipLabels.partnershipInfoTitle}{' '}
      </div>{' '}
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validationSchema={PartnerShipInfoSchema}
          validate={() => ({})}
          onSubmit={(values) => {
            setLoading(true);
            dispatch(
              PartnershipInfoAction(
                values,
                history,
                isUpdate,
                partnershipId,
                companyId,
                partnerInfoId,
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
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
                // onSubmit={handleSubmit}
              >
                <div className="create-partnership-info-form">
                  <div className="create-partnership-info-field">
                    <div>{CreatePartnershipLabels.partnershipName}</div>
                    <div style={{ marginLeft: '25px' }}>
                      <Field
                        type="text"
                        name="partnershipName"
                        value={values.partnershipName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={CreatePartnershipLabels.partnershipName}
                        hasError={
                          errors.partnershipName && touched.partnershipName
                        }
                        errorMessage={errors.partnershipName}
                        component={GenTextField}
                        required
                      />
                      <RenderErrorMessage name="partnershipName" />
                    </div>
                  </div>
                  <div className="create-partnership-info-field">
                    <div className="create-partnership-info-field-subdomain">
                      {CreatePartnershipLabels.websiteSubDomainName}
                    </div>
                    <div
                      style={{
                        marginLeft: '25px',
                        maxWidth: '270px',
                      }}
                    >
                      <Field
                        type="text"
                        name="websiteSubDomain"
                        value={values.websiteSubDomain}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={
                          CreatePartnershipLabels.websiteSubDomainNameLabel
                        }
                        hasError={
                          errors.websiteSubDomain && touched.websiteSubDomain
                        }
                        errorMessage={
                          partnershipResponseData.validationErrField ===
                          'content_hub_subdomain_name'
                            ? partnershipResponseData.errorMsg
                            : errors.websiteSubDomain
                        }
                        component={GenTextField}
                      />
                      {loginError !== '' &&
                      partnershipResponseData.validationErrField ===
                        'content_hub_subdomain_name' ? (
                        <div
                          style={{
                            color: 'red',
                            fontSize: '12px',
                            paddingBottom: '10px',
                          }}
                        >
                          {loginError}
                        </div>
                      ) : (
                        <RenderErrorMessage name="websiteSubDomain" />
                      )}
                    </div>
                  </div>
                  {/* <div className="create-partnership-info-field">
                    <div>{CreatePartnershipLabels.whitelistedDomainLabel}</div>
                    <div
                      style={{
                        marginLeft: '25px',
                        minWidth: '270px',
                        width: '270px',
                      }}
                    >
                      <TagsInput
                        selectedTags={(tags: string) => console.log(tags)}
                        fullWidth
                        selectedChip={values.whitelistedDomain}
                        className="tagInput tagsField"
                        variant="outlined"
                        id="tags"
                        type="text"
                        name="whitelistedDomain"
                        errorMessage={errors.whitelistedDomain}
                        placeholder={CreatePartnershipLabels.whitelistedDomain}
                        hasError
                      />
                      <RenderErrorMessage name="whitelistedDomain" />
                    </div>
                  </div> */}
                  <div className="create-partnership-info-button-container">
                    <SecondaryButton
                      style={{ minWidth: '160px', marginRight: '30px' }}
                      onClick={() => {
                        history.push('/accountSetup');
                      }}
                    >
                      {ButtonLabels.cancel}
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
    </div>
  );
};

export default PartnerShipInfo;
