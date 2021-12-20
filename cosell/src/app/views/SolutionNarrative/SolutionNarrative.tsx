/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';

import SideBarWithPreview from 'src/app/components/SideBar/SideBarWithPreview';
import { getRequest } from 'src/app/service';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Loader from 'src/app/components/Loader';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import DialogBox from 'src/app/components/DialogBox';
import styles from './SolutionNarrative.module.css';
import { SalesHubLabels, SolutionNarrativeLabels } from '../../../strings';
import CreateIcon from '../../assets/create_icon.svg';
import SolutionNarrativeForm from './SolutionNarrativeForm';
import SolutionNarrativePreview from './SolutionNarrativePreview';
import SolutionNarrativeCard from './Components/SolutionNarrativeCard';

import {
  // solutionNarrativeSlice,
  // setSlectedSolutionNarrativeIds,
  // selectSolutionNarrativeResponse,
  // setSlectedSolutionNarrativeInfo,
  deleteAssetAction,
} from './SolutionNarrativeSlice';
import {
  Alert,
  // SolutionNarrativeAssetInfo,
  SolutionNarrativeInfo,
} from './types';

interface assetValues {
  name: string;
  tags: string[];
  docType: string;
  id: number;
  file: string;
  accessDocType: string;
}
interface SolutionNarrativeValues {
  name: string;
  description: string;
  thumbnailImage: string;
  tags: string[];
  thumbnailImageSrc?: File;
}
interface SolutionNarrativeObject {
  solutionNarrativeID: number;
  name: string;
  description: string;
  thumbnailImage: string;
  tags: string[];
}
interface alert {
  showAlert: boolean;
  severity: string;
  message: string;
}

const SolutionNarrative = () => {
  const dispatch = useDispatch();
  // const solutionNarrativeStoreData = useSelector(
  //   selectSolutionNarrativeResponse
  // );
  // const solutionNarratives = useSelector(
  //   selectSolutionNarrativeResponse
  // ).solutionNarrativeInfo;
  const [solutionNarratives, setSolutionNarratives] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState<SolutionNarrativeValues>();
  const [selected, setSelected] = useState([]);
  const [selectedAssetInfo, setSelectedAssetInfo] = useState({});
  const [partnershipID, setPartnershipID] = useState('');
  const [solutionNarrativeID, setSolutionNarrativeID] = useState<
    number | string
  >();
  const [solutionNarrativeOffset, setSolutionNarrativeOffset] = useState(0);
  const [solutionNarrativelimit, setSolutionNarrativelimit] = useState(5);
  const [solutionNarrativeCount, setSolutionNarrativeCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [alert, setAlert] = useState({
    showAlert: false,
    severity: '',
    message: '',
  });

  const [selectedSolNarrId, setSelectedSolNarrId] = useState([]);
  const [selectedSolNarrativeObj, setSelectedSolNarrativeObj] = useState([]);

  // useEffect(() => {
  //   if (showForm === false) {
  //     setOffset(0);
  //   }
  // }, [showForm]);

  const fetchSolutionNarrativeData = (currOffset) => {
    setSolutionNarratives([]);
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipId: string = queryparams.get('partner_ship_id') || '0';
    setPartnershipID(partnershipId);
    const token = localStorage.getItem('token');
    setSolutionNarrativeOffset(currOffset);
    console.log(solutionNarrativeOffset, 'solutionNarrativeOffset');
    getRequest(
      `partnership/solution-narrative/?partnership_id=${partnershipId}&offset=${currOffset}&limit=${solutionNarrativelimit}`,
      {
        Authorization: `Token ${token}`,
      }
    ).then((response: any) => {
      if (response.result === true) {
        // dispatch(
        //   setSlectedSolutionNarrativeInfo({
        //     solutionNarrativeInfo: response.data,
        //   })
        // );
        setSolutionNarratives(response.data);
        console.log(response.data);

        if (response.count) {
          setSolutionNarrativeCount(response.count);
        }
        console.log(
          'called in fetchSolutionNarrativeData',
          response.count,
          response.data
        );
      }
    });
  };
  useEffect(() => {
    fetchSolutionNarrativeData(0);
  }, []);
  // useEffect(() => {
  //   fetchSolutionNarrativeData();
  // }, [solutionNarrativeOffset]);

  // const handleGetSolutionNarrativeData = (e: any, data: any) => {
  //   setSolutionNarrativeOffset((data - 1) * solutionNarrativelimit);
  // };
  const setAssetData = (tableData: any) => {
    setSelectedAssetInfo(tableData);
    console.log(tableData);
  };

  const setFromValues = (values: SolutionNarrativeValues) => {
    console.log(values, 'inside solution narrative');
    setFormValues(values);
  };

  const handleSolutionNarrativeCardClick = (
    solutionNarrative: SolutionNarrativeInfo
  ) => {
    setSolutionNarrativeID(solutionNarrative.solution_narrative_id.toString());
    setShowForm(true);
  };

  // const handleSolutionNarrativeCheckboxClick = (
  //   isChecked: boolean,
  //   solutionNarrID: number
  // ) => {
  //   console.log(isChecked, ' tarisCheckedget');
  //   console.log(solutionNarrID);
  //   const updatedSolutionNarratives = solutionNarratives.map(
  //     (solutionNarrative) => {
  //       if (solutionNarrative.solution_narrative_id === solutionNarrID) {
  //         return { ...solutionNarrative, is_selected: isChecked };
  //       }
  //       return solutionNarrative;
  //     }
  //   );
  //   dispatch(
  //     setSlectedSolutionNarrativeInfo({
  //       solutionNarrativeInfo: updatedSolutionNarratives,
  //     })
  //   );
  // };

  const deleteSolutionNarrative = () => {
    setLoading(true);
    dispatch(
      deleteAssetAction(
        partnershipID,
        selected,
        () => setLoading(false),
        (value: string) =>
          setAlert((prevState: Alert) => ({
            ...prevState,
            showAlert: true,
            message: SolutionNarrativeLabels.deletesolNarrMsg,
            severity: value,
          })),
        () => fetchSolutionNarrativeData(0),
        () => setShowDialog(false)
      )
    );
    setSolutionNarrativeOffset(0);
    setSelected([]);
  };
  const handleCreateAndDeleteButtonClick = () => {
    if (selected.length > 0) {
      setShowDialog(true);
    } else {
      setShowForm(true);
      setSolutionNarrativeID(null);
      setSelected([]);
      setAssetData({});
      setFormValues({
        description: '',
        name: '',
        tags: [''],
        thumbnailImage: '',
      });
      setSelectedSolNarrativeObj([]);
      setSelectedSolNarrId([]);
    }
  };

  const handleSolutionNarrativeCheckboxClick = (event: any, id: number) => {
    // event.stopPropagation();
    const selectedIndex = selected.indexOf(id);
    let newSelected: any[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  console.log(selected, 'selected', solutionNarratives, showForm);
  return (
    <div className={styles.solutionNarrativeMainContainer}>
      <div className={styles.solutionNarrativeContainer}>
        <div className={styles.solutionNarrativeTitleContainer}>
          <div className={styles.solutionNarrativeTitle}>
            {SolutionNarrativeLabels.title}
          </div>
          <div>
            <PrimaryButton
              style={{ minWidth: '200px' }}
              onClick={() => {
                handleCreateAndDeleteButtonClick();
              }}
            >
              {selected.length > 0 ? (
                ''
              ) : (
                <img
                  className={styles.createIconButtonImage}
                  src={CreateIcon}
                  alt=""
                />
              )}
              {selected.length > 0
                ? SolutionNarrativeLabels.deleteTitle
                : SolutionNarrativeLabels.createButton}
            </PrimaryButton>
          </div>
        </div>
        <div className={styles.solutionNarrativeCard}>
          {solutionNarratives.length > 0 &&
            solutionNarratives.map(
              (solutionNarrative: SolutionNarrativeInfo) => (
                <div className={styles.solutionNarrativeEachCard}>
                  <Checkbox
                    onChange={(e) => {
                      handleSolutionNarrativeCheckboxClick(
                        e.target.checked,
                        solutionNarrative.solution_narrative_id
                      );
                    }}
                    checked={selected.includes(
                      solutionNarrative.solution_narrative_id
                    )}
                    className={styles.solutionNarrativeEachCardCheckbox}
                  />
                  <div
                    onClickCapture={() => {
                      handleSolutionNarrativeCardClick(solutionNarrative);
                    }}
                  >
                    <SolutionNarrativeCard
                      img={solutionNarrative.image}
                      title={solutionNarrative.name}
                      content={solutionNarrative.description}
                      link="https://www.google.co.in/"
                    />
                  </div>
                </div>
              )
            )}
        </div>
        {showForm && (
          <SideBarWithPreview
            title={
              solutionNarrativeID
                ? SolutionNarrativeLabels.updateTitle
                : SolutionNarrativeLabels.formTitle
            }
            previewTitle={SolutionNarrativeLabels.previewTitle}
            closeHandler={() => setShowForm(false)}
            renderLeftElement={
              <SolutionNarrativePreview
                solutionNarrativeId={solutionNarrativeID}
                assetInfo={selectedAssetInfo}
                // selected={selected}
                formValues={formValues}
                selectedSolNarrativeObj={selectedSolNarrativeObj}
              />
            }
            renderRightElement={
              <SolutionNarrativeForm
                solutionNarrativeId={solutionNarrativeID}
                sendAssetData={setAssetData}
                // assetData={assetData}
                // handleGetAssetData={handleGetAssetData}
                showAlert={() => setShowAlert(true)}
                sendFormValues={setFromValues}
                fetchSolutionNarrativeData={fetchSolutionNarrativeData}
                cancelHandler={() => setShowForm(false)}
                selectedSolNarrId={selectedSolNarrId}
                setSelectedSolNarrId={setSelectedSolNarrId}
                selectedSolNarrativeObj={selectedSolNarrativeObj}
                setSelectedSolNarrativeObj={setSelectedSolNarrativeObj}
                refreshSolutionNarrativeInformation={() => {
                  fetchSolutionNarrativeData(0);
                }}
              />
            }
          />
        )}

        <DialogBox
          title=""
          primaryContent={SolutionNarrativeLabels.deleteDialogPrimaryContent}
          secondaryContent={
            SolutionNarrativeLabels.deleteDialogSecondaryContent
          }
          secondaryButton={SolutionNarrativeLabels.deleteDialogSecondaryButton}
          primaryButton={SolutionNarrativeLabels.deleteDialogPrimaryButton}
          show={showDialog}
          handleDialogBoxClose={() => setShowDialog(false)}
          handleAgree={() => deleteSolutionNarrative()}
        />
        {/* {solutionNarrativeCount >= solutionNarrativelimit && ( */}
      </div>

      <div className={styles.solutionNarrativePaginationContainer}>
        {solutionNarrativeCount > solutionNarrativelimit && (
          <div className={styles.solutionNarrativePaginationContainer}>
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(
                  solutionNarrativeCount / solutionNarrativelimit
                )}
                shape="rounded"
                onChange={(e, data) =>
                  fetchSolutionNarrativeData(
                    (data - 1) * solutionNarrativelimit
                  )
                }
              />
            </Stack>
          </div>
        )}
      </div>
      {/* )} */}
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

export default SolutionNarrative;
