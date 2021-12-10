/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';

import SideBarWithPreview from 'src/app/components/SideBar/SideBarWithPreview';
import { getRequest } from 'src/app/service';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import styles from './SolutionNarrative.module.css';
import { SolutionNarrativeLabels } from '../../../strings';
import CreateIcon from '../../assets/create_icon.svg';
import SolutionNarrativeForm from './SolutionNarrativeForm';
import SolutionNarrativePreview from './SolutionNarrativePreview';
import SolutionNarrativeCard from './Components/SolutionNarrativeCard';

import {
  solutionNarrativeSlice,
  setSlectedSolutionNarrativeIds,
  selectSolutionNarrativeResponse,
  deleteAssetAction,
  setSlectedSolutionNarrativeInfo,
} from './SolutionNarrativeSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  SolutionNarrativeAssetInfo,
  SolutionNarrativeInfo,
} from './types';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Loader from 'src/app/components/Loader';

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

const SolutionNarrative = () => {
  const accessTypeList = [
    { key: 'Internal', id: 1, value: 'Internal' },
    { key: 'External', id: 2, value: 'External' },
  ];
  const accessDocTypeList = [
    { key: 'Video', id: 3, value: 'Video' },
    { key: 'Image', id: 2, value: 'Image' },
    { key: 'Pdf', id: 1, value: 'Pdf' },
    { key: 'PowerPoint', id: 4, value: 'PowerPoint' },
  ];
  const dispatch = useDispatch();
  const solutionNarrativeStoreData = useSelector(
    selectSolutionNarrativeResponse
  );
  const solutionNarratives = useSelector(
    selectSolutionNarrativeResponse
  ).solutionNarrativeInfo;
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState<SolutionNarrativeValues>();
  const [selected, setSelected] = useState([]);
  const [selectedAssetInfo, setSelectedAssetInfo] = useState({});
  const [partnershipID, setPartnershipID] = useState('');
  const [solutionNarrativeID, setSolutionNarrativeID] = useState<
    number | string
  >();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(0);
  const [solutionNarrativeOffset, setSolutionNarrativeOffset] = useState(0);
  const [solutionNarrativelimit, setSolutionNarrativelimit] = useState(5);
  const [solutionNarrativeCount, setSolutionNarrativeCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    showAlert: false,
    severity: '',
    message: '',
  });

  useEffect(() => {
    fetchSolutionNarrativeData();
  }, []);

  useEffect(() => {
    fetchSolutionNarrativeData();
  }, [solutionNarrativeOffset]);

  const fetchSolutionNarrativeData = () => {
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipID: string = queryparams.get('partner_ship_id') || '0';
    setPartnershipID(partnershipID);
    const token = localStorage.getItem('token');

    getRequest(
      `partnership/solution-narrative/?partnership_id=${partnershipID}&offset=${solutionNarrativeOffset}&limit=${solutionNarrativelimit}`,
      {
        Authorization: `Token ${token}`,
      }
    ).then((response: any) => {
      if (response.result === true) {
        dispatch(
          setSlectedSolutionNarrativeInfo({
            solutionNarrativeInfo: response.data,
          })
        );
        if (response.count) {
          setSolutionNarrativeCount(response.count);
        }
      }
    });
  };

  const handleGetAssetData = (e: any, data: any) => {
    setOffset((data - 1) * limit);
  };

  const handleGetSolutionNarrativeData = (e: any, data: any) => {
    setSolutionNarrativeOffset((data - 1) * solutionNarrativelimit);
  };
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

  const handleSolutionNarrativeCheckboxClick = (
    isChecked: boolean,
    solutionNarrativeID: number
  ) => {
    console.log(isChecked, ' tarisCheckedget');

    console.log(solutionNarrativeID);
    const updatedSolutionNarratives = solutionNarratives.map(
      (solutionNarrative) => {
        if (solutionNarrative.solution_narrative_id === solutionNarrativeID) {
          return { ...solutionNarrative, is_selected: isChecked };
        }
        return solutionNarrative;
      }
    );
    dispatch(
      setSlectedSolutionNarrativeInfo({
        solutionNarrativeInfo: updatedSolutionNarratives,
      })
    );
  };

  const handleCreateAndDeleteButtonClick = () => {
    if (
      solutionNarratives.filter(
        (solutionNarrative) => solutionNarrative.is_selected === true
      ).length > 0
    ) {
      setLoading(true);
      dispatch(
        deleteAssetAction(
          partnershipID,
          solutionNarratives
            .filter(
              (solutionNarrative) => solutionNarrative.is_selected === true
            )
            .map(
              (solutionNarrative) => solutionNarrative.solution_narrative_id
            ),
          () => setLoading(false),
          (value: string) =>
            setAlert((prevState: Alert) => ({
              ...prevState,
              showAlert: true,
              message: '',
              severity: value,
            })),
          fetchSolutionNarrativeData
        )
      );
    } else {
      setSolutionNarrativeID(null);
      setSelected([]);
      setAssetData({});
      setFormValues({
        description: '',
        name: '',
        tags: [''],
        thumbnailImage: '',
      });
      setShowForm(true);
    }
  };
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
              {solutionNarratives.filter(
                (solutionNarrative) => solutionNarrative.is_selected === true
              ).length > 0 ? (
                ''
              ) : (
                <img
                  className={styles.createIconButtonImage}
                  src={CreateIcon}
                  alt=""
                />
              )}
              {solutionNarratives.filter(
                (solutionNarrative) => solutionNarrative.is_selected === true
              ).length > 0
                ? SolutionNarrativeLabels.deleteTitle
                : SolutionNarrativeLabels.createButton}
            </PrimaryButton>
          </div>
        </div>
        <div className={styles.solutionNarrativeCard}>
          {solutionNarratives &&
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
                selected={selected}
                formValues={formValues}
              />
            }
            renderRightElement={
              <SolutionNarrativeForm
                solutionNarrativeId={solutionNarrativeID}
                sendAssetData={setAssetData}
                count={count}
                limit={limit}
                offset={offset}
                handleGetAssetData={handleGetAssetData}
                setCount={setCount}
                showAlert={() => setShowAlert(true)}
                sendFormValues={setFromValues}
                fetchSolutionNarrativeData={fetchSolutionNarrativeData}
                cancelHandler={() => setShowForm(false)}
              />
            }
          />
        )}
        {/* {solutionNarrativeCount >= solutionNarrativelimit && ( */}

        {/* )} */}
      </div>
      <div className={styles.solutionNarrativePaginationContainer}>
        <Stack spacing={2}>
          <Pagination
            count={
              parseInt(
                (solutionNarrativeCount / solutionNarrativelimit).toString(),
                10
              ) + 1
            }
            shape="rounded"
            onChange={(e, data) => handleGetSolutionNarrativeData(e, data)}
          />
        </Stack>
      </div>
      {loading === true && <Loader />}
    </div>
  );
};

export default SolutionNarrative;
