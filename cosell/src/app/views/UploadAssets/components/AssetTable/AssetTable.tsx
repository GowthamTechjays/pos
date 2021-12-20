/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { TableBody, Checkbox, styled, TableCell } from '@material-ui/core';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';

import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material';
import { uploadAssetsLabels } from 'src/strings';
import pdfIcon from '../../../../assets/pdf_mini_icon.svg';
import pptIcon from '../../../../assets/ppt_mini_icon.svg';
import imageIcon from '../../../../assets/img_mini_icon.svg';
import videoIcon from '../../../../assets/video_mini_icon.svg';
import othersIcon from '../../../../assets/others_mini.svg';
import wordIcon from '../../../../assets/word_mini_svg.svg';
import styles from '../../UploadAssets.module.css';

const AssetTable = (props: any) => {
  const {
    tableData = [],
    selected,
    handleSelectAllClick,
    handleCheckboxClick,
    handleUpdateAsset,
  } = props;
  const getDocIcon = (docType: string) => {
    let src = '';
    switch (docType) {
      case 'Pdf':
        src = pdfIcon;
        break;
      case 'Word':
        src = wordIcon;
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
      case 'Others':
        src = othersIcon;
        break;
      default:
        src = othersIcon;
    }
    return src;
  };

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#FAFAFA',
      color: '#707683',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        className={styles.assetTable}
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Checkbox
                className={
                  tableData.length ===
                  selected.filter((s: string) => s !== '').length
                    ? styles.assetCheckBox
                    : ''
                }
                checked={
                  tableData.length > 0 &&
                  tableData.length ===
                    selected.filter((s: string) => s !== '').length
                }
                onChange={(e) => handleSelectAllClick(e)}
              />
            </StyledTableCell>
            <StyledTableCell>{uploadAssetsLabels.name}</StyledTableCell>
            <StyledTableCell>{uploadAssetsLabels.docType}</StyledTableCell>
            <StyledTableCell>{uploadAssetsLabels.accessType}</StyledTableCell>
            <StyledTableCell>{uploadAssetsLabels.tags}</StyledTableCell>
          </TableRow>
        </TableHead>
        {console.log(tableData, 'tableData')}
        {tableData.length > 0 && (
          <TableBody>
            {tableData.map((row: any) => (
              <StyledTableRow
                key={row.id}
                onClick={() => handleUpdateAsset(row.id)}
              >
                <StyledTableCell component="td">
                  <Checkbox
                    className={
                      selected.includes(row.id.toString())
                        ? styles.assetCheckBox
                        : ''
                    }
                    checked={
                      selected.length > 0
                        ? selected.includes(row.id.toString())
                        : false
                    }
                    onClick={(e) => handleCheckboxClick(e, row.id.toString())}
                  />
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>
                  <div className={styles.docTypeCell}>
                    <img src={getDocIcon(row.docType)} alt="" />
                    <span>{row.docType}</span>
                  </div>
                </StyledTableCell>
                <StyledTableCell>{row.accessDocType}</StyledTableCell>
                <StyledTableCell>
                  <div className={styles.chipsWrap}>
                    {row.tags.map((li: string, idx: number) => (
                      <span className={styles.tagChip} key={`${idx + 1}+${li}`}>
                        {li}
                      </span>
                    ))}
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        )}
      </Table>
      {(tableData.length === 0 ||
        tableData === undefined ||
        tableData === false) && (
        <div className={styles.noRecord}>{uploadAssetsLabels.noRecords}</div>
      )}
    </TableContainer>
  );
};
export default AssetTable;
