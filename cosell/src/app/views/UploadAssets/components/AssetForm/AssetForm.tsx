/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React, { useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, FormikProps } from 'formik';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';
import { MenuItem, Select } from '@material-ui/core';
import TagsInput from 'src/app/components/TagsInput';

import { getRequest } from 'src/app/service';
import { useDispatch } from 'react-redux';
import { ButtonLabels, uploadAssetsLabels } from '../../../../../strings';
import {
  GenTextField,
  RenderErrorMessage,
  RenderTextField,
} from '../../../../components/Form';
import uploadIcon from '../../../../assets/upload-logo.svg';
import SecondaryButton from '../../../../components/Button/SecondaryButton';
import styles from './AssetForm.module.css';
import { saveAssetAction } from '../../UploadAssetSlice';
import AssetPreview from '../../AssetPreview';

interface Values {
  assetName: string;
  assetType: string;
  assetFile: string;
  assetFileType: string;
  tags: string[];
  status: string;
}
const AssetForm = (props: any) => {
  const {
    cancelHandler,
    updateId,
    accessTypeList,
    partnershipId,
    setLoader,
    accessDocTypeList,
    clearLoader,
    showAlert,
  } = props;
  const dispatch = useDispatch();
  const statusList = [
    { key: 'active', value: 1, text: 'Active' },
    { key: 'inActive', value: 2, text: 'Active' },
  ];
  const [selectedFile, setSelectedFile] = React.useState('');
  const [tagErr, setTagErr] = React.useState('');
  const fileInput = useRef<HTMLInputElement>(null);
  const formikForm = useRef<FormikProps<Values>>(null);
  const [initialValues, setInitialValues] = useState<Values>();
  const onFileSelected = (event: any) => {
    const file = event.target.files[0];

    if (file && file.name && formikForm && formikForm.current) {
      setSelectedFile(file);
      const fileName = file.name as string;
      setInitialValues({
        ...formikForm.current.values,
        assetFile: fileName,
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (updateId) {
      getRequest(
        `partnership/asset/?partnership_id=${partnershipId}&asset_id=${updateId}`,
        {
          Accept: 'application/json',
          Authorization: `Token ${token}`,
        }
      ).then((response: any) => {
        if (response.result === true) {
          setInitialValues({
            assetName: response.data.asset_name,
            assetType: response.data.access_type_id,
            assetFile: response.data.file_name,
            assetFileType: response.data.file_type_id,
            tags: response.data.tags,
            status: response.data.status || 1,
          });
        }
      });
    } else {
      setInitialValues({
        assetName: '',
        assetType: '',
        assetFile: '',
        assetFileType: '',
        tags: [],
        status: '',
      });
    }
  }, []);

  const assetSchema = Yup.object().shape({
    assetName: Yup.string().required('Asset name is required'),
    assetType: Yup.string().trim().required('Asset type is required'),
    assetFile: Yup.string().trim().required('Asset file is required'),
    // tags: Yup.string().trim().required('Tags are required'),
  });
  console.log(updateId, 'updateId');

  return (
    <div className={styles.uploadFormWrap}>
      <div className={styles.subTitle}>{uploadAssetsLabels.assetInfo}</div>

      <div className={styles.myAccWrap}>
        {initialValues && (
          <Formik
            innerRef={formikForm}
            enableReinitialize
            initialValues={initialValues}
            validate={() => ({})}
            validationSchema={assetSchema}
            onSubmit={(values, { setFieldError }) => {
              const elementByClass: any =
                document.getElementsByClassName('tagsField');
              const val: any = elementByClass[0].innerText.split('\n');
              val.pop();
              if (val.length > 0) {
                console.log('hey', val);
                setLoader();
                dispatch(
                  saveAssetAction(
                    {
                      assetName: values.assetName,
                      assetType: values.assetType,
                      assetFileType: values.assetFileType,
                      assetFile: selectedFile,
                      tags: val,
                    },
                    updateId,
                    partnershipId,
                    clearLoader,
                    showAlert,
                    cancelHandler
                  )
                );
              } else {
                setFieldError('tags', 'Atleast one tag is required');
              }
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
                setErrors,
              } = formik;
              console.log(errors, 'errors');
              return (
                <Form
                  className={styles.assetForm}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className={styles.accInfoForm}>
                    <div className={styles.accInfoField}>
                      <div
                        className={`${styles.semiField} ${styles.labelField}`}
                      >
                        {uploadAssetsLabels.assetName}
                      </div>
                      <div className={styles.semiField}>
                        <Field
                          type="text"
                          name="assetName"
                          required
                          value={values.assetName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={uploadAssetsLabels.assetName}
                          hasError={errors.assetName && touched.assetName}
                          errorMessage={errors.assetName}
                          component={GenTextField}
                        />
                        <RenderErrorMessage name="assetName" />
                      </div>
                    </div>

                    <div className={styles.accInfoField}>
                      <div
                        className={`${styles.semiField} ${styles.labelField}`}
                      >
                        {uploadAssetsLabels.accessType}
                      </div>
                      <div className={styles.semiField}>
                        <Select
                          name="assetType"
                          value={values.assetType}
                          displayEmpty
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={styles.uploadAssetSelect}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          {accessTypeList.map((list: any) => (
                            <MenuItem value={list.id} key={list.id}>
                              {list.value}
                            </MenuItem>
                          ))}
                        </Select>
                        <RenderErrorMessage name="assetType" />
                      </div>
                    </div>

                    <div className={styles.accInfoField}>
                      <div
                        className={`${styles.semiField} ${styles.labelField}`}
                      >
                        {uploadAssetsLabels.uploadFile}
                      </div>
                      <div className={styles.semiField}>
                        <Field
                          name="assetFile"
                          component={GenTextField}
                          type="file"
                          hasError={errors.assetFile && touched.assetFile}
                          errorMessage={errors.assetFile}
                          onBlur={handleBlur}
                          placeholder={uploadAssetsLabels.uploadFile}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={(e: any) => {
                                    if (fileInput && fileInput.current) {
                                      fileInput.current.click();
                                    }
                                  }}
                                >
                                  <input
                                    accept="*"
                                    ref={fileInput}
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => onFileSelected(e)}
                                  />
                                  <img src={uploadIcon} alt="" />
                                </IconButton>
                              </InputAdornment>
                            ),
                            accept: '*',
                            readOnly: true,
                          }}
                        />
                        <RenderErrorMessage name="assetFile" />
                      </div>
                    </div>
                    <div className={styles.accInfoField}>
                      <div
                        className={`${styles.semiField} ${styles.labelField}`}
                      >
                        {uploadAssetsLabels.tags}
                      </div>
                      <div className={styles.semiField}>
                        <TagsInput
                          selectedTags={(tags: string) => console.log(tags)}
                          fullWidth
                          selectedChip={values.tags}
                          className={`${styles.tagInput} tagsField`}
                          variant="outlined"
                          id="tags"
                          name="tags"
                          errorMessage={errors.tags && touched.tags}
                          placeholder="add Tags"
                          hasError
                        />
                        <RenderErrorMessage name="tags" />
                      </div>
                    </div>
                    {updateId !== '' && (
                      <div className={styles.accInfoField}>
                        <div
                          className={`${styles.semiField} ${styles.labelField}`}
                        >
                          {uploadAssetsLabels.status}
                        </div>
                        <div className={styles.semiField}>
                          <Select
                            name="status"
                            value={values.status}
                            className={styles.uploadAssetSelect}
                            displayEmpty
                            renderValue={
                              values.status !== ''
                                ? undefined
                                : () => (
                                    <span style={{ color: '#00000059' }}>
                                      {' '}
                                      {uploadAssetsLabels.status}
                                    </span>
                                  )
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            {statusList.map((list: any) => (
                              <MenuItem value={list.id} key={list.id}>
                                {list.value}
                              </MenuItem>
                            ))}
                          </Select>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.previewWrap}>
                    {selectedFile !== '' && (
                      <AssetPreview file={selectedFile} />
                    )}
                  </div>

                  <div
                    className={`${styles.accInfoBtnWrap} ${styles.bottomLayer}`}
                  >
                    <SecondaryButton
                      onClick={cancelHandler}
                      style={{ minWidth: '160px', marginRight: '30px' }}
                    >
                      {ButtonLabels.cancel}
                    </SecondaryButton>
                    <PrimaryButton type="submit" style={{ minWidth: '160px' }}>
                      {ButtonLabels.save}
                    </PrimaryButton>
                  </div>
                </Form>
              );
            }}
          </Formik>
        )}
      </div>
    </div>
  );
};
export default AssetForm;
