/* eslint-disable react/jsx-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Checkbox, Select, TableBody } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { getRequest } from 'src/app/service';
import { ManageSolutionNarrativeLabels } from '../../../../../strings';
import SecondaryButton from '../../../../components/Button/SecondaryButton';
import styles from './ManageSolutionNarratives.module.css';
import {
  setSalesHubSolutionNarrativeInfo,
  salesHubResponse,
} from '../../SalesHubSlice';
import { solutionNarrativeData } from '../../types';

// interface Values {}
interface solNarrValues {
  name: '';
  tags: '';
  id: '';
  image: '';
  noOfAssets: any;
}
const ManageSolutionNarratives = (props: any) => {
  const {
    closeHandler,
    handleSaveSolNarr,
    salesHubId,
    selectedSolutionNarratives,
  } = props;
  const dispatch = useDispatch();
  const [successMsg, setSuccessMsg] = React.useState(false);
  const [fieldError, setFieldError] = React.useState('');
  const [solNarrData, setSolNarrData] = React.useState([]);
  React.useState(false);
  const [initialValues, setInitialValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(5);
  const [selected, setSelected] = useState([]);
  const [addLabel, setAddLabel] = useState('Add New');
  const [selectedSolNarr, setSelectedSolNarr] = useState([]);
  const [selectedSolutionNarrative, setSelectedSolutionNarrative] = useState<
    solutionNarrativeData[]
  >([]);
  const token = localStorage.getItem('token');
  const queryparams = new URLSearchParams(window.location.search);
  const partnershipID: string = queryparams.get('partner_ship_id') || '0';
  const salesHubResp = useSelector(salesHubResponse);
  // console.log(salesHubResp, 'Resp Saleshub');

  const fetchAllSolNarrData = (currOffset) => {
    setOffset(currOffset);
    getRequest(
      `partnership/sales-hub/solution-narratives/?partnership_id=${partnershipID}&offset=${currOffset}&limit=${limit}`,
      {
        Authorization: `Token ${token}`,
      }
    ).then((response: any) => {
      if (response.result === true) {
        if (response.data.length > 0) {
          setSolNarrData(response.data);
        }

        if (response.count) {
          setCount(response.count);
        }
        setAddLabel('');

        console.log(response, 'resp');
      }
    });
  };

  const fetchSolnNarrativeData = () => {
    if (selected.length > 0 && addLabel === 'add') {
      let selectedData: any[] = [];

      selectedData = solNarrData.filter((g: any) =>
        selected.includes(g.solution_narrative_id.toString())
      );
      setSolNarrData(selectedData);
      setAddLabel('Add New');
      setSelected([]);
      console.log(selectedData, 'selectedData');
    } else if (addLabel === 'Add New') {
      if (solNarrData.length > 0) {
        const selectedIdArr = solNarrData.map((d) =>
          d.solution_narrative_id.toString()
        );
        console.log(selectedIdArr, 'selectedIdArr');
        if (selected.length === 0) {
          setSelected(selectedIdArr);
        }
      }
      fetchAllSolNarrData(0);
    }
  };

  const handleCheckboxClick = (
    event: any,
    id: string,
    row: solutionNarrativeData
  ) => {
    event.stopPropagation();
    const selectedIndex = selected.indexOf(id);
    let newSelected: any[] = [];
    let newSelectedSolNarr: any[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      newSelectedSolNarr = newSelectedSolNarr.concat(selectedSolNarr, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      newSelectedSolNarr = newSelectedSolNarr.concat(selectedSolNarr.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      newSelectedSolNarr = newSelectedSolNarr.concat(
        selectedSolNarr.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
      newSelectedSolNarr = newSelectedSolNarr.concat(
        selectedSolNarr.slice(0, selectedIndex),
        selectedSolNarr.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
    setSelectedSolNarr(newSelectedSolNarr);
    console.log(newSelectedSolNarr, newSelected, 'newww');
  };

  const handleGetAssetData = (e: any, data: any) => {
    fetchAllSolNarrData((data - 1) * limit);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#FAFAFA',
      color: '#707683',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  console.log(selected, 'selected', offset);
  useEffect(() => {
    if (salesHubId !== undefined) {
      setSolNarrData(selectedSolutionNarratives);
    }
  }, []);
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        // validationSchema={}
        onSubmit={(values) => {
          //   setAccountDetail(values);
        }}
      >
        {(formik) => {
          const { handleSubmit } = formik;
          return (
            <Form
              className={styles.manage_solution_narrative_form}
              onSubmit={handleSubmit}
            >
              <div className={styles.manage_solution_narrative_title}>
                <div className={styles.manage_solution_narrative_titleName}>
                  {ManageSolutionNarrativeLabels.manageSolutionNarrative}
                </div>
                {addLabel !== '' && (
                  <PrimaryButton onClick={() => fetchSolnNarrativeData()}>
                    {/* {ManageSolutionNarrativeLabels.addNew} */}
                    {addLabel}
                  </PrimaryButton>
                )}
              </div>

              <div className={styles.manage_solution_narrative_mainContent}>
                <div className={styles.manage_solution_narrative_content}>
                  <TableContainer component={Paper} className={styles.solTable}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell />
                          <StyledTableCell>
                            {ManageSolutionNarrativeLabels.tableName}
                          </StyledTableCell>
                          <StyledTableCell>
                            {ManageSolutionNarrativeLabels.tableNoOfAssets}
                          </StyledTableCell>
                          <StyledTableCell>
                            {ManageSolutionNarrativeLabels.tableTags}
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {solNarrData.length > 0 &&
                          solNarrData.map((row) => (
                            <StyledTableRow key={row.solution_narrative_id}>
                              <StyledTableCell component="th" scope="row">
                                <Checkbox
                                  className={
                                    selected.includes(
                                      row.solution_narrative_id.toString()
                                    )
                                      ? styles.customBox
                                      : ''
                                  }
                                  checked={
                                    selected.length > 0
                                      ? selected.includes(
                                          row.solution_narrative_id.toString()
                                        )
                                      : false
                                  }
                                  onClick={(e) =>
                                    handleCheckboxClick(
                                      e,
                                      row.solution_narrative_id.toString(),
                                      row
                                    )
                                  }
                                />
                              </StyledTableCell>
                              <StyledTableCell>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <img
                                    src={row.image}
                                    alt=""
                                    style={{
                                      width: '60px',
                                      height: '30px',
                                      borderRadius: '10px',
                                      marginRight: '15px',
                                    }}
                                  />
                                  {row.name}
                                </div>
                              </StyledTableCell>
                              <StyledTableCell style={{ textAlign: 'center' }}>
                                {row.asset_count}
                              </StyledTableCell>
                              <StyledTableCell>
                                {' '}
                                <div className={styles.chipsWrap}>
                                  {row.tags.map((li: string, idx: number) => (
                                    <span
                                      className={styles.tagChip}
                                      key={`${idx + 1}+${li}`}
                                    >
                                      {li}
                                    </span>
                                  ))}
                                </div>
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* {console.log(count, limit, 'check')}
                  {count > limit && (
                    <Stack spacing={2} className={styles.paginationWrap}>
                      <Pagination
                        count={parseInt((count / limit).toString(), 10) + 1}
                        shape="rounded"
                        onChange={(e, data) => handleGetAssetData(e, data)}
                      />
                    </Stack>
                  )} */}
                </div>
                {console.log(count, limit, 'check', selectedSolutionNarrative)}
                {count > limit && (
                  <Stack spacing={2} className={styles.paginationWrap}>
                    <Pagination
                      count={Math.ceil(count / limit)}
                      // count={parseInt((count / limit).toString(), 10) + 1}
                      shape="rounded"
                      onChange={(e, data) => handleGetAssetData(e, data)}
                    />
                  </Stack>
                )}
                <div
                  className={styles.manage_solution_narrative_button_container}
                >
                  <SecondaryButton
                    onClick={closeHandler}
                    style={{ minWidth: '160px', marginRight: '30px' }}
                  >
                    {ManageSolutionNarrativeLabels.cancel}
                  </SecondaryButton>
                  <PrimaryButton
                    type="submit"
                    onClick={() => handleSaveSolNarr(selected, selectedSolNarr)}
                    style={{ minWidth: '160px' }}
                  >
                    {ManageSolutionNarrativeLabels.save}
                  </PrimaryButton>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      {showAlert && (
        <SnackbarAlert
          severity="success"
          handler={() => setShowAlert(false)}
          showalert={showAlert}
          //   message={ManageSolutionNarrativesLabels.successMsg}
        />
      )}
    </div>
  );
};
export default ManageSolutionNarratives;
