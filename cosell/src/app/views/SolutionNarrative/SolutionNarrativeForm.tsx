/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'src/app/components/Loader';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SecondaryButton from 'src/app/components/Button/SecondaryButton';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment, MenuItem } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getRequest } from 'src/app/service';
import TagsInput from 'src/app/components/TagsInput';
import AssetTable from './Components/AssetTable';
import uploadIcon from '../../assets/upload-logo.svg';
import searchIcon from '../../assets/search.png';
import DownArrow from '../../components/Icons/PreviewPartnership/DownArrow.svg';
import {
  SolutionNarrativeLabels,
  ButtonLabels,
  uploadAssetsLabels,
  errorMessageLabels,
} from '../../../strings';
import styles from './SolutionNarrative.module.css';
import './SolutionNarratice.css';
import { RenderErrorMessage, GenTextField } from '../../components/Form';
import {
  saveSolutionNarrativeAction,
  selectSolutionNarrativeResponse,
  setAssetInfo,
  setThumbnailUploadedTime,
} from './SolutionNarrativeSlice';

interface SolutionNarrativeValues {
  name: string;
  description: string;
  thumbnailImage: string | File;
  thumbnailImageFile?: File;
  tags: string[];
}

interface assetValues {
  name: string;
  tags: string[];
  docType: string;
  id: number;
  file: string;
  accessDocType: string;
}

interface alert {
  showAlert: boolean;
  severity: string;
  message: string;
}

export const SolutionNarativeInitialValue: SolutionNarrativeValues = {
  name: '',
  description: '',
  thumbnailImage: '',
  tags: [],
};

const SolutionNarrativeForm = (props: any) => {
  const {
    solutionNarrativeId,
    cancelHandler,
    // fetchSolutionNarrativeData,
    selectedSolNarrId,
    setSelectedSolNarrId,
    selectedSolNarrativeObj,
    setSelectedSolNarrativeObj,
  } = props;

  const accessTypeList = [
    { key: 'Internal', id: 1, value: 'Internal' },
    { key: 'External', id: 2, value: 'External' },
  ];

  const dispatch = useDispatch();
  const fileInput = useRef<HTMLInputElement>(null);
  const formikForm = useRef<FormikProps<SolutionNarrativeValues>>(null);
  const [initialValues, setInitialValues] = useState<SolutionNarrativeValues>();
  const [showAssetsTable, setShowAssetsTable] = useState(false);
  const [formValues, setFormValues] = useState<SolutionNarrativeValues>();
  const [assetData, setAssetData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(0);
  const [accessTypeMenu, setaccessTypeMenu] = useState(false);
  const [accessDocTypeMenu, setaccessDocTypeMenu] = useState(false);
  const [assetName, setAssetName] = useState('');
  const [accessType, setAccessType] = useState('');
  const [accessDocType, setAccessDocType] = useState('');
  const [showGeneral, setShowGeneral] = useState(true);
  const [showAssets, setShowAssets] = useState(true);
  const [partnershipId, setPartnershipId] = useState('');
  const [loading, setLoading] = useState(false);
  // const [assetSelected, setAssetSelected] = useState(false);
  // const [selectedFile, setSelectedFile] = React.useState('');
  // const [selectedAssetIds, setSelectedAssetIds] = useState(['']);
  const [mappedSolutionNarrativeAssets, setMappedSolutionNarrativeAssets] =
    useState([]);
  const [alert, setAlert] = useState({
    showAlert: false,
    severity: '',
    message: '',
  });
  const [accessDocTypeList, setDocTypeList] = useState([]);
  const solutionNarrativeStoreData = useSelector(
    selectSolutionNarrativeResponse
  );
  const fetchFileTypeList = () => {
    const token = localStorage.getItem('token');

    getRequest(`partnership/asset/get-file-type-list/`, {
      Authorization: `Token ${token}`,
    }).then((response: any) => {
      if (response.result === true) {
        const typeList = response.data.map((li: any) => ({
          key: li.name,
          id: li.file_type_id,
          value: li.name,
        }));
        setDocTypeList(typeList);
      }
    });
  };

  useEffect(() => {
    // if (isCreateMode()) {
    //   const allValues = {
    //     ...formValues,
    //     thumbnailImage: selectedFile,
    //   };
    //   props.sendFormValues(allValues);
    // } else {
    props.sendFormValues(formValues);
    // }
  }, [formValues]);

  const handleGetAssetData = (e: any, data: any) => {
    setOffset((data - 1) * limit);
  };

  const isCreateMode = () =>
    solutionNarrativeId === undefined ||
    solutionNarrativeId === null ||
    solutionNarrativeId === '';

  const fetchAssetData = () => {
    const token = localStorage.getItem('token');
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipID: string = queryparams.get('partner_ship_id') || '0';
    setLoading(true);
    getRequest(
      `partnership/asset/?partnership_id=${partnershipID}&offset=${offset}&limit=${limit}`,
      {
        Authorization: `Token ${token}`,
      }
    ).then((response: any) => {
      if (response.result === true) {
        // dispatch(
        //   setAssetInfo({
        //     assetInfo: response.data,
        //   })
        // );
        setAssetData(response.data);
        if (response.count) {
          setCount(response.count);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  };

  const getSolutionNarrativeInfo = (solutionNarraId: any) => {
    const token = localStorage.getItem('token');
    getRequest(
      `partnership/solution-narrative/?solution_narrative_id=${solutionNarraId}`,
      {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      }
    ).then((response: any) => {
      if (response.result === true) {
        console.log(response.data.tags);
        setInitialValues({
          name: response.data.name,
          description: response.data.description,
          thumbnailImage: response.data.image,
          tags: response.data.tags,
        });
      }
    });
  };

  const getSolutionNarrativeAssetInfo = (partnershipID, solutionNarrId) => {
    setLoading(true);
    const token = localStorage.getItem('token');
    getRequest(
      `partnership/solution-narrative/get-assets/?partnership_id=${partnershipID}&solution_narrative_id=${solutionNarrId}&offset=${offset}&limit=${limit}`,
      {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      }
    ).then((response: any) => {
      if (response.result === true) {
        // setMappedSolutionNarrativeAssets(response.data);
        // dispatch(
        //   setAssetInfo({
        //     assetInfo: response.data,
        //   })
        // );
        const selectedSolNarrObj = response.data.filter(
          (d: any) => d.is_selected === true
        );
        const selectedObj = [
          ...new Map(
            [...selectedSolNarrativeObj, ...selectedSolNarrObj].map((item) => [
              item.asset_id,
              item,
            ])
          ).values(),
        ];

        const newSelectedObj = [...new Set(selectedObj)];
        console.log(newSelectedObj, 'selected in form', selectedObj);
        setSelectedSolNarrativeObj(newSelectedObj);

        const idArr = selectedSolNarrObj.map((d: any) => d.asset_id);

        setSelectedSolNarrId((prevState: any) => [
          ...new Set([...prevState, ...idArr]),
        ]);
        setAssetData(response.data);
        if (response.count) {
          setCount(response.count);
        }
        setShowAssetsTable(true);
      }
    });
    setLoading(false);
  };
  useEffect(() => {
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipID: string = queryparams.get('partner_ship_id') || '0';
    setPartnershipId(partnershipID);
    if (isCreateMode()) {
      setInitialValues({
        ...initialValues,
        ...SolutionNarativeInitialValue,
      });
    } else {
      getSolutionNarrativeInfo(solutionNarrativeId);
      getSolutionNarrativeAssetInfo(partnershipID, solutionNarrativeId);
    }
    fetchFileTypeList();
    fetchAssetData();
  }, []);

  useEffect(() => {
    if (isCreateMode()) {
      fetchAssetData();
    }
  }, [initialValues]);

  // useEffect(() => {
  //   const queryparams = new URLSearchParams(window.location.search);
  //   const partnershipID: string = queryparams.get('partner_ship_id') || '0';
  //   setPartnershipId(partnershipID);
  //   if (isCreateMode()) {
  //     setInitialValues({
  //       ...initialValues,
  //       ...SolutionNarativeInitialValue,
  //     });
  //   } else {
  //     getSolutionNarrativeInfo(solutionNarrativeId);
  //     getSolutionNarrativeAssetInfo(partnershipID, solutionNarrativeId);
  //   }
  //   fetchFileTypeList();
  // }, []);

  useEffect(() => {
    if (isCreateMode()) {
      fetchAssetData();
    }
  }, [initialValues]);

  const onFileSelected = (event: any) => {
    const file = event.target.files[0];
    if (
      file &&
      file.name &&
      formikForm &&
      formikForm.current &&
      file.type.includes('image/')
    ) {
      const fileName = file.name as string;
      setInitialValues({
        ...formikForm.current.values,
        thumbnailImage: fileName,
        thumbnailImageFile: file,
      });
      dispatch(
        setThumbnailUploadedTime({
          thumbnailUploadedTime: Date.now(),
        })
      );
    } else {
      setAlert((prevState: alert) => ({
        ...prevState,
        showAlert: true,
        message: errorMessageLabels.fileErrorMessage,
        severity: 'error',
      }));
    }
  };

  const handleFilter = (name: string, value: string) => {
    if (name === 'accDocType') {
      setAccessDocType(value);
    } else if (name === 'accType') {
      setAccessType(value);
    }
  };

  const handleSearch = () => {
    const accessTypeId =
      accessType !== '' && accessType !== 'All'
        ? accessTypeList.filter((li) => li.value === accessType)[0].id
        : '';
    const accessDocTypeId =
      accessDocType !== '' && accessDocType !== 'All'
        ? accessDocTypeList.length > 0 &&
          accessDocTypeList.filter((li) => li.value === accessDocType)[0].id
        : '';
    const nameSearch = assetName !== '' ? `&name=${assetName}` : '';
    const accessTypeSearch =
      accessType !== '' && accessTypeId !== ''
        ? `&access_type_id=${accessTypeId}`
        : '';
    const accessDocTypeSearch =
      accessDocType !== '' && accessDocTypeId !== ''
        ? `&file_type_id=${accessDocTypeId}`
        : '';
    const solNarrId =
      solutionNarrativeId === undefined ||
      solutionNarrativeId === null ||
      solutionNarrativeId === ''
        ? ''
        : `&solution_narrative_id=${solutionNarrativeId}`;
    const token = localStorage.getItem('token');
    if (isCreateMode()) {
      getRequest(
        `partnership/asset/?partnership_id=${partnershipId}${nameSearch}${accessTypeSearch}${accessDocTypeSearch}&offset=${offset}&limit=${limit}`,
        {
          Authorization: `Token ${token}`,
        }
      ).then((response: any) => {
        if (response.result === true) {
          setAssetData(response.data);
          if (response.count) {
            setCount(response.count);
          }
          console.log(response.count, 'counnt', response.data);
        }
      });
    } else {
      getRequest(
        `partnership/solution-narrative/get-assets/?partnership_id=${partnershipId}${solNarrId}${nameSearch}${accessTypeSearch}${accessDocTypeSearch}&offset=${offset}&limit=${limit}`,
        {
          Authorization: `Token ${token}`,
        }
      ).then((response: any) => {
        if (response.result === true) {
          setAssetData(response.data);
          if (response.count) {
            setCount(response.count);
          }
          console.log(response.count, 'counnt');
        }
      });
    }
  };
  useEffect(() => {
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipID: string = queryparams.get('partner_ship_id') || '0';
    if (
      (accessType === '' || accessType === 'All') &&
      (accessDocType === '' || accessDocType === 'All') &&
      assetName === ''
    ) {
      if (solutionNarrativeId) {
        getSolutionNarrativeAssetInfo(partnershipID, solutionNarrativeId);
      } else {
        fetchAssetData();
      }
    } else {
      handleSearch();
    }
  }, [offset]);

  const handleAddAssetButtonClick = () => {
    setShowAssetsTable(true);
  };
  const solNarrativeSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    thumbnailImage: Yup.string().required('Thumbnail image is required'),
  });
  return (
    <div>
      {initialValues && (
        <Formik
          innerRef={formikForm}
          enableReinitialize
          initialValues={initialValues}
          validate={() => ({})}
          validationSchema={solNarrativeSchema}
          onSubmit={(values, { setFieldError }) => {
            const elementByClass: any =
              document.getElementsByClassName('tagsField');
            const val: any = elementByClass[0].innerText.split('\n');
            val.pop();
            if (val.length > 0) {
              setLoading(true);
              dispatch(
                saveSolutionNarrativeAction(
                  {
                    name: values.name,
                    description: values.description,
                    thumbnailImage: values.thumbnailImageFile
                      ? values.thumbnailImageFile
                      : values.thumbnailImage,
                    tags: val,
                    assetIds: selectedSolNarrId,
                  },
                  solutionNarrativeId,
                  partnershipId,
                  () => setLoading(false),
                  (value: string) =>
                    setAlert((prevState: alert) => ({
                      ...prevState,
                      showAlert: true,
                      message: 'Message Test',
                      severity: value,
                    })),
                  cancelHandler,
                  () => props.refreshSolutionNarrativeInformation()
                )
              );
            } else {
              setFieldError('tags', 'One tag is required');
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
            } = formik;
            setFormValues(values);
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
              >
                <div className={styles.solutionNarrativeInfoForm}>
                  <div
                    role="button"
                    className={styles.generalInfoDiv}
                    onClickCapture={() => setShowGeneral(!showGeneral)}
                  >
                    <div className={styles.generalInfoContentDiv}>
                      {SolutionNarrativeLabels.general}
                      <IconButton>
                        <img src={DownArrow} alt="" />
                      </IconButton>
                    </div>
                  </div>
                  {showGeneral ? (
                    <div className={styles.solutionNarrativeInfoFormContainer}>
                      <div
                        className={
                          styles.solutionNarrativeInfoFormContentContainer
                        }
                      >
                        <div className={styles.solutionNarrativeFormField}>
                          <div className={styles.semiDiv}>
                            {SolutionNarrativeLabels.name}
                          </div>
                          <div
                            className={`${styles.semiDiv} ${styles.txtField}`}
                          >
                            <Field
                              type="text"
                              name="name"
                              style={{ width: '100%' }}
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder={SolutionNarrativeLabels.name}
                              hasError={errors.name && touched.name}
                              errorMessage={errors.name}
                              component={GenTextField}
                            />
                            <RenderErrorMessage name="name" />
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          styles.solutionNarrativeInfoFormContentContainer
                        }
                      >
                        <div className={styles.solutionNarrativeFormField}>
                          <div className={styles.semiDiv}>
                            {SolutionNarrativeLabels.description}
                          </div>
                          <div
                            className={`${styles.semiDiv} ${styles.txtField}  ${styles.textArea}`}
                          >
                            <Field
                              type="text"
                              name="description"
                              style={{ width: '100%' }}
                              value={values.description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder={SolutionNarrativeLabels.description}
                              hasError={
                                errors.description && touched.description
                              }
                              errorMessage={errors.description}
                              component={GenTextField}
                              multiline
                            />
                            <RenderErrorMessage name="description" />
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          styles.solutionNarrativeInfoFormContentContainer
                        }
                      >
                        <div className={styles.solutionNarrativeFormField}>
                          <div className={styles.semiDiv}>
                            {SolutionNarrativeLabels.thumbnailImage}
                          </div>
                          <div className={`${styles.semiDiv} disabledFile`}>
                            <Field
                              type="file"
                              name="thumbnailImage"
                              value={values.thumbnailImage}
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                              disabled
                              placeholder={
                                SolutionNarrativeLabels.thumbnailImage
                              }
                              // hasError={
                              //   errors.thumbnailImage && touched.thumbnailImage
                              // }
                              // errorMessage={errors.thumbnailImage}
                              component={GenTextField}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    style={{ width: 'auto' }}
                                  >
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
                            <RenderErrorMessage name="thumbnailImage" />
                          </div>
                        </div>
                      </div>

                      <div
                        className={
                          styles.solutionNarrativeInfoFormContentContainer
                        }
                      >
                        <div className={styles.solutionNarrativeFormField}>
                          <div className={styles.semiDiv}>
                            {SolutionNarrativeLabels.tags}
                          </div>
                          <div className={styles.semiDiv}>
                            <TagsInput
                              selectedTags={(tags: string) => console.log(tags)}
                              fullWidth
                              selectedChip={values.tags}
                              className={`${styles.tagInput} tagsField`}
                              variant="outlined"
                              id="tags"
                              name="tags"
                              placeholder="add Tags"
                              hasError
                              errorMessage={errors.tags && touched.tags}
                            />
                            <RenderErrorMessage name="tags" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div
                    className={styles.generalInfoDiv}
                    onClickCapture={() => setShowAssets(!showAssets)}
                  >
                    <div className={styles.generalInfoContentDiv}>
                      {SolutionNarrativeLabels.assets}
                      <IconButton>
                        <img src={DownArrow} alt="" />
                      </IconButton>
                    </div>
                  </div>
                  {showAssets ? (
                    <div className={styles.manageAssetsContainer}>
                      <div className={styles.manageAssetsContentContainer}>
                        <div className={styles.manageAssetsTitle}>
                          {SolutionNarrativeLabels.addAssets}
                        </div>
                        {!showAssetsTable && (
                          <div className={styles.manageAssetsTitleBtn}>
                            <PrimaryButton
                              onClick={() => handleAddAssetButtonClick()}
                              style={{ minWidth: '160px' }}
                            >
                              {/* {assetSelected
                                ? ButtonLabels.add
                                :  */}
                              {ButtonLabels.addAsset}
                              {/* } */}
                            </PrimaryButton>
                          </div>
                        )}
                      </div>
                      {showAssetsTable && (
                        <div style={{ width: '100%' }}>
                          <div className={styles.filterWrap}>
                            <div
                              className={styles.inputWrap}
                              style={{ width: '100%' }}
                            >
                              <form>
                                <input
                                  type="text"
                                  name="name"
                                  onChange={(e: any) =>
                                    setAssetName(e.target.value)
                                  }
                                  placeholder="Search assets"
                                  className={styles.searchbar}
                                />
                              </form>
                              <SearchIcon className={styles.searchIcon} />
                            </div>
                            <div className={styles.filtersCover}>
                              <div className={styles.centerDropDown}>
                                <div className={styles.dropdown}>
                                  <button
                                    type="button"
                                    className={styles.dropdownBtn}
                                    onClick={() =>
                                      setaccessTypeMenu(!accessTypeMenu)
                                    }
                                  >
                                    {' '}
                                    {accessType === '' ? (
                                      <span style={{ fontSize: '12px' }}>
                                        {uploadAssetsLabels.filterByAccessType}
                                      </span>
                                    ) : (
                                      accessType
                                    )}
                                    <KeyboardArrowDownIcon
                                      className={`${styles.arrowIcon}  ${
                                        accessTypeMenu
                                          ? styles.arrowIconActive
                                          : ''
                                      }`}
                                    />
                                  </button>
                                  <div
                                    className={`${styles.menuWrap} ${
                                      accessTypeMenu
                                        ? styles.dropdownMenuActive
                                        : styles.dropdownMenu
                                    }`}
                                  >
                                    {accessTypeMenu && (
                                      <>
                                        <MenuItem
                                          value=""
                                          onClick={() => {
                                            handleFilter('accType', 'All');
                                            setaccessTypeMenu(false);
                                          }}
                                        >
                                          <em>All</em>
                                        </MenuItem>
                                        {accessTypeList.map((list: any) => (
                                          <MenuItem
                                            value={list.value}
                                            key={list.id}
                                            onClick={() => {
                                              handleFilter(
                                                'accType',
                                                list.value
                                              );
                                              setaccessTypeMenu(false);
                                            }}
                                          >
                                            {list.value}
                                          </MenuItem>
                                        ))}
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className={styles.dropdown}>
                                  <button
                                    type="button"
                                    className={styles.dropdownBtn}
                                    style={{ margin: '0 15px' }}
                                    onClick={() =>
                                      setaccessDocTypeMenu(!accessDocTypeMenu)
                                    }
                                  >
                                    {accessDocType === '' ? (
                                      <span style={{ fontSize: '12px' }}>
                                        {uploadAssetsLabels.filterByDocType}
                                      </span>
                                    ) : (
                                      accessDocType
                                    )}
                                    <KeyboardArrowDownIcon
                                      className={`${styles.arrowIcon}  ${
                                        accessTypeMenu
                                          ? styles.arrowIconActive
                                          : ''
                                      }`}
                                    />
                                  </button>
                                  <div
                                    className={`${styles.menuWrap} ${
                                      accessDocTypeMenu
                                        ? styles.dropdownMenuActive
                                        : styles.dropdownMenu
                                    }`}
                                  >
                                    {accessDocTypeMenu && (
                                      <>
                                        <MenuItem
                                          value=""
                                          onClick={() => {
                                            handleFilter('accDocType', 'All');
                                            setaccessDocTypeMenu(false);
                                          }}
                                        >
                                          <em>All</em>
                                        </MenuItem>

                                        {accessDocTypeList &&
                                          accessDocTypeList.map((list: any) => (
                                            <MenuItem
                                              value={list.value}
                                              key={list.id}
                                              onClick={() => {
                                                handleFilter(
                                                  'accDocType',
                                                  list.value
                                                );
                                                setaccessDocTypeMenu(false);
                                              }}
                                            >
                                              {list.value}
                                            </MenuItem>
                                          ))}
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <Button
                                  className={styles.searchSide}
                                  onClick={() => {
                                    setOffset(0);
                                    handleSearch();
                                  }}
                                >
                                  <img src={searchIcon} alt="" />
                                </Button>
                              </div>
                            </div>

                            <div style={{ width: '100%' }}>
                              <AssetTable
                                selectedSolNarrId={selectedSolNarrId}
                                setSelectedSolNarrId={setSelectedSolNarrId}
                                selectedSolNarrativeObj={
                                  selectedSolNarrativeObj
                                }
                                setSelectedSolNarrativeObj={
                                  setSelectedSolNarrativeObj
                                }
                                assetData={assetData}
                              />
                            </div>
                            {count > limit && (
                              <Stack
                                spacing={2}
                                className={styles.paginationWrap}
                              >
                                <Pagination
                                  count={Math.ceil(count / limit)}
                                  shape="rounded"
                                  onChange={(e, data) =>
                                    handleGetAssetData(e, data)
                                  }
                                />
                              </Stack>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                  {!showAssetsTable && (
                    <div className={styles.noAssetsMessage}>
                      {' '}
                      {SolutionNarrativeLabels.noAssetsMessage}
                    </div>
                  )}
                  <div className={styles.saveButtonContainer}>
                    <SecondaryButton
                      style={{ marginRight: '30px', minWidth: '160px' }}
                      onClick={() => cancelHandler()}
                    >
                      {ButtonLabels.cancel}
                    </SecondaryButton>
                    <PrimaryButton type="submit" style={{ minWidth: '160px' }}>
                      {ButtonLabels.save}
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

export default SolutionNarrativeForm;
