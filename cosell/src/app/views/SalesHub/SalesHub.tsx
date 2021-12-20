/* eslint-disable linebreak-style */
/* eslint-disable function-paren-newline */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import * as Yup from 'yup';
import './SalesHub.css';
import { InputAdornment, MenuItem } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'src/app/components/Loader';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';
import SideBar from 'src/app/components/SideBar';
import { getRequest } from 'src/app/service';
import { useHistory, useLocation } from 'react-router';
import { SalesHubLabels, errorMessageLabels } from '../../../strings';
import ManageSolutionNarratives from './Components/ManageSolutionNarrative';
import { RenderErrorMessage, GenTextField } from '../../components/Form/index';
import UploadLogo from '../../components/Icons/PreviewPartnership/UploadLogoIcon.svg';
import DownArrow from '../../components/Icons/PreviewPartnership/DownArrow.svg';

// import TestImg from './Components/SolutionNarrativeCard/test_img.svg';
import styles from './SalesHub.module.css';
import {
  saveSalesHubAction,
  // deleteSolutionNarrativeAction,
  salesHubResponse,
  // setSalesHubSolutionNarrativeInfo,
  setSalesHubInfo,
} from './SalesHubSlice';
import { SalesHubInfo, solutionNarrativeData } from './types';
import SolutionNarrativeCard from '../SolutionNarrative/Components/SolutionNarrativeCard/SolutionNarrativeCard';

interface salesHubValues {
  headerText: string;
  subHeaderText: string;
  headerImg: string | File;
  headerImgFile?: string;
  fontColor: string;
  fontFamily: string;
}
interface alert {
  showAlert: boolean;
  severity: string;
  message: string;
}
interface listObjectType {
  key: string;
  id: number;
  value: string;
}

const SalesHub = (props: any) => {
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();
  const salesHub = useSelector(salesHubResponse);
  // console.log(salesHub, 'salesHubsalesHub');
  const [salesLayout, setSalesLayout] = useState(true);
  const [solutionNarrative, setSolutionNarrative] = useState(true);
  const [fontColorChosen, setFontColorChosen] = useState('');
  const [fontColorMenu, setFontColorMenu] = useState(false);
  const [fontFamilyChosen, setFontFamilyChosen] = useState('');
  const [fontFamilyMenu, setFontFamilyMenu] = useState(false);
  const salesHubFileInput = useRef<HTMLInputElement>(null);
  const formikForm = useRef<FormikProps<salesHubValues>>(null);
  const [formValue, setFormValue] = useState<salesHubValues>();
  // const [selected, setSelected] = useState([]);
  // const [selectedSolutionNarrativeInfo, setSelectedSolutionNarrativeInfo] =
  //   useState({});
  const [partnershipId, setPartnershipID] = useState('');
  const [solNarroffset, setSolNarrOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [solNarrcount, setSolNarrCount] = useState(0);
  const [salesHubOffset, setSalesHubOffset] = useState(0);
  const [salesHublimit, setSalesHublimit] = useState(5);
  const [salesHubCount, setSalesHubCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState([]);
  const [salesHubId, setSalesHubId] = useState('');
  const [showActiveMenu, setShowActiveMenu] = useState(false);
  const [thumbnailImage, setThumbnailImage] = useState<string>();
  const [alert, setAlert] = useState({
    showAlert: false,
    severity: '',
    message: '',
  });
  const [initialValues, setInitialValues] = useState<salesHubValues>({
    headerText: '',
    subHeaderText: '',
    headerImg: '',
    headerImgFile: '',
    fontColor: '',
    fontFamily: '',
  });

  const [fontFamily, setFontFamily] = useState();
  const [fontColor, setFontColor] = useState();
  const [fontFamilyList, setFontFamilyList] = useState([]);
  const [fontColorList, setFontColorList] = useState([]);
  const [selectedSolutionNarratives, setSelectedSolutionNarratives] = useState<
    solutionNarrativeData[]
  >([]);
  const [selectedSolutionNarrativeIds, setSelectedSolutionNarrativeIds] =
    useState([]);

  const fetchSolNarrDetailById = (
    shId: string,
    partnershipID: any,
    currOffset: any
  ) => {
    console.log(shId, 'shId');
    setSolNarrOffset(currOffset);
    const token = localStorage.getItem('token');
    getRequest(
      `partnership/sales-hub/solution-narratives/?partnership_id=${partnershipID}&sales_hub_id=${shId}&offset=${currOffset}&limit=${limit}&is_selected=true`,
      {
        Authorization: `Token ${token}`,
      }
    ).then((resp1: any) => {
      if (resp1.result === true) {
        const selectedSol = resp1.data;
        if (resp1.count) {
          setSolNarrCount(resp1.count);
        }
        setSelectedSolutionNarratives(selectedSol);
        let selectedSolutionNarrIds: any[] = [];
        if (resp1.data.length > 0) {
          selectedSolutionNarrIds = resp1.data.map((s: any) =>
            s.solution_narrative_id.toString()
          );
          setSelectedSolutionNarrativeIds(selectedSolutionNarrIds);
        }
      }
      setIsLoading(false);
    });
  };
  const fetchSalesHubData = () => {
    setIsLoading(true);
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipID: string = queryparams.get('partner_ship_id') || '0';
    setPartnershipID(partnershipID);
    const token = localStorage.getItem('token');
    // get all salesHubData
    getRequest(
      `partnership/sales-hub/?partnership_id=${partnershipID}&offset=${salesHubOffset}&limit=${salesHublimit}`,
      {
        Authorization: `Token ${token}`,
      }
    ).then((response: any) => {
      if (response.result === true) {
        if (response.data.length > 0) {
          const salesHubIdNew = response.data[0].sales_hub_id;
          console.log(
            salesHubIdNew,
            'salesHubIdNew',
            response.data.sales_hub_id
          );
          if (salesHubIdNew) {
            history.push(
              `/salesHub?partner_ship_id=${partnershipID}&sales_hub_id=${salesHubIdNew}`
            );
            setSalesHubId(salesHubIdNew);
          }
          // salesHub by Id data
          getRequest(
            `partnership/sales-hub/?partnership_id=${partnershipID}&sales_hub_id=${salesHubIdNew}`,
            {
              Authorization: `Token ${token}`,
            }
          ).then((resp: any) => {
            if (resp.result === true) {
              setFontColor(resp.data.font_color.font_color_id.toString());
              setFontFamily(resp.data.font_family.font_family_id.toString());
              setFontColorChosen(resp.data.font_color.name);
              setFontFamilyChosen(resp.data.font_family.name);
              setInitialValues({
                ...initialValues,
                headerText: resp.data.header_text,
                subHeaderText: resp.data.sub_header_text,
                headerImg: resp.data.header_image_name,
                headerImgFile: resp.data.header_image,
                fontColor: resp.data.font_color.font_color_id,
                fontFamily: resp.data.font_family.font_family_id,
              });
              if (salesHubIdNew) {
                fetchSolNarrDetailById(salesHubIdNew, partnershipID, 0);
              }
            }
          });
        } else {
          setIsLoading(false);
        }
        dispatch(
          setSalesHubInfo({
            salesHubInfo: response.data,
          })
        );
        console.log(response.data, 'response.data');

        if (response.count) {
          setSalesHubCount(response.count);
        }
      }
      // setIsLoading(false);
    });
  };

  useEffect(() => {
    if (formValue) {
      if (formValue.headerImgFile) {
        console.log(formValue, 'formVal');
        const url: any = formValue.headerImgFile;
        setThumbnailImage(URL.createObjectURL(url));
      }
    }
  }, [formValue]);

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
        headerImg: fileName,
        headerImgFile: file,
      });

      const reader = new FileReader();
      reader.onload = function (e) {
        document
          .getElementById('headerImg')
          .setAttribute('src', e.target.result.toString());
      };
      reader.readAsDataURL(file);
    } else {
      setAlert((prevState: alert) => ({
        ...prevState,
        showAlert: true,
        message: errorMessageLabels.fileErrorMessage,
        severity: 'error',
      }));
    }
  };

  const handleChangeFont = (key: string, value: string) => {
    if (key === 'FontFamily') {
      setFontFamilyChosen(value);
    } else if (key === 'FontColor') {
      setFontColorChosen(value);
    }
  };
  const handleSaveSolNarr = (
    selectedArr: string[],
    // solNarrData: any,
    solutionNarrativeInfo: solutionNarrativeData[]
  ) => {
    console.log(
      selectedArr,
      'selectedArr',
      solutionNarrativeInfo,
      'solutionNarrativeInfo'
    );
    setShowActiveMenu(false);
    const updatedArr = selectedArr.map((id: string) => parseInt(id, 10));
    setSelectedSolutionNarrativeIds(updatedArr);
    setSelectedSolutionNarratives(solutionNarrativeInfo);
  };

  const handleSolutionNarrativeButtonClick = () => {
    setShowActiveMenu(true);
  };
  const validationSchema = Yup.object().shape({
    headerText: Yup.string().trim().required('Header text is required'),
    subHeaderText: Yup.string().trim().required('Sub header text is required'),
    headerImg: Yup.string().required('Header image required'),
  });
  // console.log(salesHubId, 'salesHubId');

  const fetchFontColorList = () => {
    const token = localStorage.getItem('token');

    getRequest(`partnership/sales-hub/font-colors/`, {
      Authorization: `Token ${token}`,
    }).then((response: any) => {
      if (response.result === true) {
        const colorList = response.data.map((li: any) => ({
          key: li.name,
          id: li.font_color_id,
          value: li.name,
        }));
        setFontColorChosen(colorList[0].value);
        setFontColorList(colorList);
      }
    });
  };

  const fetchFontFamilyList = () => {
    const token = localStorage.getItem('token');

    getRequest(`partnership/sales-hub/font-family/`, {
      Authorization: `Token ${token}`,
    }).then((response: any) => {
      if (response.result === true) {
        const familyList = response.data.map((li: any) => ({
          key: li.name,
          id: li.font_family_id,
          value: li.name,
        }));
        setFontFamilyChosen(familyList[0].value);
        setFontFamilyList(familyList);
      }
    });
  };
  useEffect(() => {
    fetchSalesHubData();
    fetchFontColorList();
    fetchFontFamilyList();
  }, []);

  return (
    <div className="salesHub_main_div">
      <div className="salesHub_main_card">
        <Formik
          innerRef={formikForm}
          enableReinitialize
          initialValues={initialValues}
          validate={() => ({})}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setIsLoading(true);
            const queryparams = new URLSearchParams(window.location.search);
            const sales_hub_id: string = queryparams.get('sales_hub_id') || '0';
            dispatch(
              saveSalesHubAction(
                {
                  headerText: values.headerText,
                  subHeaderText: values.subHeaderText,
                  headerImg: values.headerImgFile
                    ? values.headerImgFile
                    : values.headerImg,
                  fontColor:
                    fontColor ||
                    (fontColorChosen !== '' &&
                      fontColorList
                        .filter((d) => d.value === fontColorChosen)[0]
                        .id.toString()),
                  fontFamily:
                    fontFamily ||
                    (fontFamilyChosen !== '' &&
                      fontFamilyList
                        .filter((d) => d.value === fontFamilyChosen)[0]
                        .id.toString()),
                  solutionNarrativeId: selectedSolutionNarrativeIds,
                },
                partnershipId,
                sales_hub_id === '0' ? salesHubId : sales_hub_id,
                () => setIsLoading(false),
                history,
                (mesage) =>
                  setAlert((prevState: alert) => ({
                    ...prevState,
                    showAlert: true,
                    message: mesage,
                    severity: 'success',
                  })),
                fetchSalesHubData
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
            // console.log(values, 'Sales hub Values');

            return (
              <Form onSubmit={handleSubmit}>
                <div className="salesHub_title_div">
                  {SalesHubLabels.titleLabel}
                  <div>
                    <PrimaryButton type="submit" style={{ minWidth: '160px' }}>
                      {SalesHubLabels.saveButton}
                    </PrimaryButton>
                  </div>
                </div>
                <div
                  className="salesHub_info_title_div"
                  onClickCapture={() => setSalesLayout(!salesLayout)}
                >
                  {SalesHubLabels.salesHubLayout}
                  <IconButton>
                    <img src={DownArrow} alt="" />
                  </IconButton>
                </div>
                {salesLayout ? (
                  <div style={{ color: '#C4C4C4' }}>
                    <div className="salesHub_info_div">
                      <div className="salesHub_each_info_div">
                        {SalesHubLabels.headerText}
                        <div className="salesHub_textfield_div">
                          <Field
                            type="text"
                            name="headerText"
                            value={values.headerText}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            hasError={errors.headerText && touched.headerText}
                            errorMessage={errors.headerText}
                            component={GenTextField}
                            style={{
                              margin: '0px 20% 0px 5%',
                              minHeight: '85px',
                              padding: '0px 20% 0px 5%',
                            }}
                            multiline
                            placeholder="Enter header text"
                          />
                          <RenderErrorMessage name="headerText" />
                        </div>
                      </div>
                      <div className="salesHub_each_info_div">
                        {SalesHubLabels.subHeaderText}
                        <div className="salesHub_textfield_div">
                          <Field
                            type="text"
                            name="subHeaderText"
                            value={values.subHeaderText}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            hasError={
                              errors.subHeaderText && touched.subHeaderText
                            }
                            errorMessage={errors.subHeaderText}
                            component={GenTextField}
                            style={{
                              margin: '0px 20% 0px 5%',
                              minHeight: '85px',
                              padding: '0px 20% 0px 5%',
                            }}
                            multiline
                            placeholder="Enter sub header text"
                          />
                          <RenderErrorMessage name="subHeaderText" />
                        </div>
                      </div>
                    </div>
                    <div className="salesHub_info_div">
                      <div className="salesHub_each_info_div">
                        {SalesHubLabels.headerImg}
                        <div className="salesHub_textfield_div disabledFile">
                          <Field
                            type="file"
                            name="headerImg"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            value={values.headerImg}
                            disabled
                            // hasError={errors.headerImg && touched.headerImg}
                            placeholder={SalesHubLabels.headerImgField}
                            // errorMessage={errors.headerImg}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() => {
                                      if (
                                        salesHubFileInput &&
                                        salesHubFileInput.current
                                      ) {
                                        salesHubFileInput.current.click();
                                      }
                                    }}
                                  >
                                    <input
                                      accept="image/*"
                                      ref={salesHubFileInput}
                                      type="file"
                                      style={{ display: 'none' }}
                                      onChange={(e) => onFileSelected(e)}
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
                          <RenderErrorMessage name="headerImg" />
                        </div>
                      </div>
                      <div className="salesHub_each_info_div">
                        <img
                          id="headerImg"
                          className={styles.image}
                          style={{ width: '100px', borderRadius: '5px' }}
                          src={values.headerImgFile.toString()}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="salesHub_info_div">
                      <div className="salesHub_each_info_div">
                        {SalesHubLabels.fontColor}
                        <div className="salesHub_centerDropDown">
                          <div className={styles.dropdown}>
                            <button
                              type="button"
                              className={styles.dropdownBtn}
                              onClick={() => setFontColorMenu(!fontColorMenu)}
                            >
                              {' '}
                              {fontColorChosen === '' ? (
                                <span style={{ fontSize: '12px' }}>
                                  {SalesHubLabels.fontColor}
                                </span>
                              ) : (
                                fontColorChosen
                              )}
                              <KeyboardArrowDownIcon
                                className={`${styles.arrowIcon}  ${
                                  fontColorMenu ? styles.arrowIconActive : ''
                                }`}
                              />
                            </button>
                            <div
                              className={`${styles.menuWrap} ${
                                fontColorMenu
                                  ? styles.dropdownMenuActive
                                  : styles.dropdownMenu
                              }`}
                            >
                              {fontColorMenu && (
                                <>
                                  {fontColorList.map((list: listObjectType) => (
                                    <MenuItem
                                      value={list.value}
                                      key={list.id}
                                      onClick={() => {
                                        handleChangeFont(
                                          'FontColor',
                                          list.value
                                        );
                                        setFontColorMenu(false);
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
                      </div>
                      <div className="salesHub_each_info_div">
                        {SalesHubLabels.fontFamily}
                        <div className="salesHub_centerDropDown">
                          <div className={styles.dropdown}>
                            <button
                              type="button"
                              className={styles.dropdownBtn}
                              onClick={() => setFontFamilyMenu(!fontFamilyMenu)}
                            >
                              {' '}
                              {fontFamilyChosen === '' ? (
                                <span style={{ fontSize: '12px' }}>
                                  {SalesHubLabels.fontFamily}
                                </span>
                              ) : (
                                fontFamilyChosen
                              )}
                              <KeyboardArrowDownIcon
                                className={`${styles.arrowIcon}  ${
                                  fontFamilyMenu ? styles.arrowIconActive : ''
                                }`}
                              />
                            </button>
                            <div
                              className={`${styles.menuWrap} ${
                                fontFamilyMenu
                                  ? styles.dropdownMenuActive
                                  : styles.dropdownMenu
                              }`}
                            >
                              {fontFamilyMenu && (
                                <>
                                  {fontFamilyList.map(
                                    (list: listObjectType) => (
                                      <MenuItem
                                        value={list.value}
                                        key={list.id}
                                        onClick={() => {
                                          handleChangeFont(
                                            'FontFamily',
                                            list.value
                                          );
                                          setFontFamilyMenu(false);
                                        }}
                                      >
                                        {list.value}
                                      </MenuItem>
                                    )
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div
                  className="salesHub_info_title_div"
                  onClickCapture={() =>
                    setSolutionNarrative(!solutionNarrative)
                  }
                >
                  {SalesHubLabels.solutionNarrative}
                  <IconButton>
                    <img src={DownArrow} alt="" />
                  </IconButton>
                </div>
                {solutionNarrative ? (
                  <div>
                    <div className="salesHub_solutionNarrative_div">
                      {SalesHubLabels.addSolutionNarrative}
                      <div className="salesHub_solutionNarrative_button_div">
                        <PrimaryButton
                          style={{ minWidth: '222px' }}
                          onClick={() => handleSolutionNarrativeButtonClick()}
                        >
                          {SalesHubLabels.addSolutionNarrativeButton}
                        </PrimaryButton>
                      </div>
                    </div>
                    {selectedSolutionNarratives.length > 0 ? (
                      <>
                        <div className="salesHub_solutionNarrative_card_div">
                          {selectedSolutionNarratives &&
                            selectedSolutionNarratives.map(
                              (selectedSolutionNarrative) => (
                                <SolutionNarrativeCard
                                  img={selectedSolutionNarrative.image}
                                  title={selectedSolutionNarrative.name}
                                  content={
                                    selectedSolutionNarrative.description
                                  }
                                  link="https://www.google.co.in/"
                                />
                              )
                            )}
                        </div>
                        <div className={styles.pagination}>
                          {console.log(solNarrcount, limit, 'check')}
                          {solNarrcount > limit && (
                            <Stack
                              spacing={2}
                              className={styles.paginationWrap}
                            >
                              <Pagination
                                count={Math.ceil(solNarrcount / limit)}
                                // count={
                                //   parseInt(
                                //     (solNarrcount / limit).toString(),
                                //     10
                                //   ) + 1
                                // }
                                shape="rounded"
                                onChange={(e, data) =>
                                  fetchSolNarrDetailById(
                                    salesHubId,
                                    partnershipId,
                                    (data - 1) * limit
                                  )
                                }
                              />
                            </Stack>
                          )}
                        </div>
                      </>
                    ) : (
                      <div style={{ textAlign: 'center' }}>
                        {' '}
                        {SalesHubLabels.noAssetMsg}
                      </div>
                    )}
                  </div>
                ) : null}
              </Form>
            );
          }}
        </Formik>
      </div>
      {showActiveMenu && (
        <SideBar
          title="Sales hub solution narratives"
          closeHandler={() => setShowActiveMenu(false)}
          renderElement={
            <ManageSolutionNarratives
              salesHubId={salesHubId}
              selectedSolutionNarratives={selectedSolutionNarratives}
              handleSaveSolNarr={handleSaveSolNarr}
              closeHandler={() => setShowActiveMenu(false)}
            />
          }
        />
      )}
      {isLoading && <Loader />}
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

export default SalesHub;
