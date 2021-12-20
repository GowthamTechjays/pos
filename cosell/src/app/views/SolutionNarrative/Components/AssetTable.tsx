/* eslint-disable space-in-parens */
/* eslint-disable no-mixed-operators */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  DraggableProvided,
  DroppableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import ReorderIcon from '@material-ui/icons/Reorder';
import { TableBody, Checkbox, styled, TableCell } from '@material-ui/core';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';

import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material';
import { uploadAssetsLabels } from 'src/strings';
import { useDispatch, useSelector } from 'react-redux';
import pdfIcon from '../../../assets/pdf_mini_icon.svg';
import pptIcon from '../../../assets/ppt_mini_icon.svg';
import imageIcon from '../../../assets/img_mini_icon.svg';
import videoIcon from '../../../assets/video_mini_icon.svg';
import reOrderIcon from '../../../assets/drag_icon.svg';
import styles from './AssetTable.module.css';
import {
  selectSolutionNarrativeResponse,
  setAssetInfo,
} from '../SolutionNarrativeSlice';
import { SolutionNarrativeAssetInfo } from '../types';

const AssetTable = (props: any) => {
  const {
    selectedSolNarrId,
    setSelectedSolNarrId,
    selectedSolNarrativeObj,
    setSelectedSolNarrativeObj,
    assetData,
  } = props;
  const dispatch = useDispatch();
  const [partnershipId, setPartnershipId] = useState('');

  const solutionNarrativeStoreData = useSelector(
    selectSolutionNarrativeResponse
  );

  const handleDragEnd = (result: DropResult, provided?: ResponderProvided) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const temp = [...solutionNarrativeStoreData.assetInfo];
    const d = temp[result.destination!.index];
    temp[result.destination!.index] = temp[result.source.index];
    temp[result.source.index] = d;
    dispatch(
      setAssetInfo({
        assetInfo: temp,
      })
    );
  };

  console.log(
    selectedSolNarrId,
    'selectedSolNarrId in table',
    selectedSolNarrativeObj
  );
  const handleCheckboxClick = (
    event: any,
    id: number,
    row: any // type create
  ) => {
    event.stopPropagation();
    const selectedIndex = selectedSolNarrId.indexOf(id);
    let newSelected: any[] = [];
    let newSelectedSolNarr: any[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedSolNarrId, id);
      newSelectedSolNarr = newSelectedSolNarr.concat(
        selectedSolNarrativeObj,
        row
      );
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedSolNarrId.slice(1));
      newSelectedSolNarr = newSelectedSolNarr.concat(
        selectedSolNarrativeObj.slice(1)
      );
    } else if (selectedIndex === selectedSolNarrId.length - 1) {
      newSelected = newSelected.concat(selectedSolNarrId.slice(0, -1));
      newSelectedSolNarr = newSelectedSolNarr.concat(
        selectedSolNarrativeObj.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedSolNarrId.slice(0, selectedIndex),
        selectedSolNarrId.slice(selectedIndex + 1)
      );
      newSelectedSolNarr = newSelectedSolNarr.concat(
        selectedSolNarrativeObj.slice(0, selectedIndex),
        selectedSolNarrativeObj.slice(selectedIndex + 1)
      );
    }
    setSelectedSolNarrId(newSelected);
    setSelectedSolNarrativeObj(newSelectedSolNarr);
    console.log(newSelectedSolNarr, newSelected, 'newww in table');
  };

  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const selectedData = assetData.map((data: any) => data.asset_id);
      setSelectedSolNarrId(selectedData);
      return;
    }
    setSelectedSolNarrId([]);
  };

  useEffect(() => {
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipID: string = queryparams.get('partner_ship_id') || '0';
    setPartnershipId(partnershipID);
  }, []);

  const getDocIcon = (docType: string) => {
    let src = '';
    switch (docType) {
      case 'Pdf':
        src = pdfIcon;
        break;
      case 'Powerpoint':
        src = pptIcon;
        break;
      case 'Video':
        src = videoIcon;
        break;
      case 'Image':
        src = imageIcon;
        break;
      default:
        src = pdfIcon;
    }
    return src;
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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 350 }}
        aria-label="customized table"
        className={styles.assetTable}
      >
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>
              <Checkbox
                // className={
                //   solutionNarrativeStoreData.assetInfo.length ===
                //   solutionNarrativeStoreData.assetInfo.filter(
                //     (s) => s.is_selected === true
                //   ).length
                //     ? styles.assetCheckBox
                //     : ''
                // }
                checked={
                  assetData.length > 0 &&
                  assetData.length ===
                    assetData.filter((d: any) =>
                      selectedSolNarrId.includes(d.asset_id)
                    ).length
                }
                className={
                  assetData.length > 0 &&
                  assetData.length ===
                    assetData.filter((d: any) =>
                      selectedSolNarrId.includes(d.asset_id)
                    ).length
                    ? styles.assetCheckBox
                    : ''
                }
                onChange={(e) => handleSelectAllClick(e)}
              />
            </StyledTableCell>
            {/* {console.log(
              assetData.length,
              assetData.filter((d: any) =>
                selectedSolNarrId.includes(d.asset_id)
              ).length,
              selectedSolNarrId,
              'xfdsf'
            )} */}
            <StyledTableCell>{uploadAssetsLabels.name}</StyledTableCell>
            <StyledTableCell>{uploadAssetsLabels.docType}</StyledTableCell>
            <StyledTableCell>{uploadAssetsLabels.accessType}</StyledTableCell>
            <StyledTableCell>{uploadAssetsLabels.tags}</StyledTableCell>
          </TableRow>
        </TableHead>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable" direction="vertical">
            {(droppableProvided: DroppableProvided) => (
              <TableBody
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {assetData.length > 0 &&
                  assetData.map(
                    (row: SolutionNarrativeAssetInfo, index: number) => (
                      <Draggable
                        key={row.asset_id}
                        draggableId={row.asset_id.toString()}
                        index={index}
                      >
                        {(
                          draggableProvided: DraggableProvided,
                          snapshot: DraggableStateSnapshot
                        ) => (
                          <StyledTableRow
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            style={{
                              ...draggableProvided.draggableProps.style,
                              background: snapshot.isDragging
                                ? 'rgba(245,245,245, 0.75)'
                                : 'none',
                            }}
                            key={row.asset_id}
                          >
                            <StyledTableCell align="left">
                              <div {...draggableProvided.dragHandleProps}>
                                {/* <ReorderIcon /> */}
                                <img
                                  src={reOrderIcon}
                                  alt=""
                                  style={{ marginLeft: '15px' }}
                                />
                              </div>
                            </StyledTableCell>
                            <StyledTableCell
                              component="td"
                              className={styles.checkBoxTd}
                            >
                              <Checkbox
                                className={
                                  selectedSolNarrId.length > 0 &&
                                  selectedSolNarrId.includes(row.asset_id)
                                    ? styles.assetCheckBox
                                    : ''
                                }
                                checked={
                                  selectedSolNarrId.length > 0
                                    ? selectedSolNarrId.includes(row.asset_id)
                                    : false
                                }
                                onClick={(e) =>
                                  handleCheckboxClick(e, row.asset_id, row)
                                }
                              />
                            </StyledTableCell>
                            <StyledTableCell>{row.asset_name}</StyledTableCell>
                            <StyledTableCell>
                              <div className={styles.docTypeCell}>
                                <img src={getDocIcon(row.file_type)} alt="" />
                                <span>{row.file_type}</span>
                              </div>
                            </StyledTableCell>
                            <StyledTableCell>{row.access_type}</StyledTableCell>
                            <StyledTableCell>
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
                        )}
                      </Draggable>
                    )
                  )}
                {droppableProvided.placeholder}
              </TableBody>
            )}
          </Droppable>
        </DragDropContext>
      </Table>
    </TableContainer>
  );
};
export default AssetTable;
