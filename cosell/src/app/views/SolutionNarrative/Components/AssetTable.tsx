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
import styles from './AssetTable.module.css';
import {
  selectSolutionNarrativeResponse,
  setAssetInfo,
} from '../SolutionNarrativeSlice';
import { SolutionNarrativeAssetInfo } from '../types';

const AssetTable = (props: any) => {
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
            <StyledTableCell>{''}</StyledTableCell>
            <StyledTableCell>
              <Checkbox
                className={
                  solutionNarrativeStoreData.assetInfo.length ===
                  solutionNarrativeStoreData.assetInfo.filter(
                    (s) => s.is_selected === true
                  ).length
                    ? styles.assetCheckBox
                    : ''
                }
                checked={
                  solutionNarrativeStoreData.assetInfo.length ===
                  solutionNarrativeStoreData.assetInfo.filter(
                    (s) => s.is_selected === true
                  ).length
                }
                onChange={(e) => {
                  const allSelected = solutionNarrativeStoreData.assetInfo.map(
                    (a) => ({
                      ...a,
                      is_selected: e.target.checked,
                    })
                  );

                  dispatch(
                    setAssetInfo({
                      assetInfo: allSelected,
                    })
                  );
                }}
              />
            </StyledTableCell>

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
                {solutionNarrativeStoreData.assetInfo.length > 0 &&
                  solutionNarrativeStoreData.assetInfo.map(
                    (row: SolutionNarrativeAssetInfo, index: number) => (
                      <Draggable
                        key={row.asset_id}
                        draggableId={row.asset_id.toString()}
                        index={index}
                      >
                        {(
                          draggableProvided: DraggableProvided,
                          snapshot: DraggableStateSnapshot
                        ) => {
                          return (
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
                              // onClick={() => handleUpdateAsset(row.asset_id)
                              // }
                            >
                              <StyledTableCell align="left">
                                <div {...draggableProvided.dragHandleProps}>
                                  <ReorderIcon />
                                </div>
                              </StyledTableCell>
                              <StyledTableCell component="td">
                                <Checkbox
                                  className={
                                    solutionNarrativeStoreData.assetInfo.filter(
                                      (asset) =>
                                        asset.asset_id === row.asset_id &&
                                        asset.is_selected === true
                                    ).length > 0
                                      ? styles.assetCheckBox
                                      : ''
                                  }
                                  checked={
                                    solutionNarrativeStoreData.assetInfo.filter(
                                      (asset) =>
                                        asset.asset_id === row.asset_id &&
                                        asset.is_selected === true
                                    ).length > 0
                                  }
                                  onClick={(e) => {
                                    console.log('insise table vclick');
                                    console.log(
                                      solutionNarrativeStoreData.assetInfo
                                    );

                                    const updatedAssetInfo =
                                      solutionNarrativeStoreData.assetInfo.map(
                                        (assetInfo) => {
                                          if (
                                            assetInfo.asset_id === row.asset_id
                                          ) {
                                            console.log(!assetInfo.is_selected);
                                            return {
                                              ...assetInfo,
                                              is_selected:
                                                !assetInfo.is_selected,
                                            };
                                          }
                                          return assetInfo;
                                        }
                                      );
                                    console.log(updatedAssetInfo);

                                    dispatch(
                                      setAssetInfo({
                                        assetInfo: updatedAssetInfo,
                                      })
                                    );
                                  }}
                                />
                              </StyledTableCell>
                              <StyledTableCell>
                                {row.asset_name}
                              </StyledTableCell>
                              <StyledTableCell>
                                <div className={styles.docTypeCell}>
                                  <img src={getDocIcon(row.file_type)} alt="" />
                                  <span>{row.file_type}</span>
                                </div>
                              </StyledTableCell>
                              <StyledTableCell>
                                {row.access_type}
                              </StyledTableCell>
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
                          );
                        }}
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
