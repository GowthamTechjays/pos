/* eslint-disable react/no-this-in-sfc */
/* eslint-disable camelcase */
/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable func-names */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */

import * as React from 'react';
import { uploadAssetsLabels } from 'src/strings';
import wordIcon from '../../../assets/word_mini.svg';
import pptIcon from '../../../assets/ppt_mini.svg';
import pdfIcon from '../../../assets/pdf_mini.svg';
import xlsIcon from '../../../assets/excel_mini.svg';
import videoIcon from '../../../assets/video_mini.svg';
import imageIcon from '../../../assets/img_mini.svg';
import othersIcon from '../../../assets/others_preview.svg';

import styles from './AssetPreview.module.css';

const AssetPreview = (props: any) => {
  const { file, file1 } = props;

  console.log(file, file1, 'props in prev');
  const extension =
    file !== ''
      ? file.name.substr(file.name.lastIndexOf('.') + 1)
      : file1.substr(file1.lastIndexOf('.') + 1);
  const size: number = file !== '' ? +file.size : 8260;
  const fileSize = size * 0.001;
  const filePath =
    'https://d1wjau4dvmc4kc.cloudfront.net/media/public/assets/files/file_181.png';

  const fileIcon = () => {
    let icon = '';
    switch (extension) {
      case 'docx':
        icon = wordIcon;
        break;
      case 'doc':
        icon = wordIcon;
        break;
      case 'TXT':
        icon = wordIcon;
        break;
      case 'txt':
        icon = wordIcon;
        break;
      case 'pdf':
        icon = pdfIcon;
        break;
      case 'pptx':
        icon = pptIcon;
        break;
      case 'ppt':
        icon = pptIcon;
        break;
      case 'xlsx':
        icon = xlsIcon;
        break;
      case 'xls':
        icon = xlsIcon;
        break;
      case 'csv':
        icon = xlsIcon;
        break;
      case 'mp4':
        icon = videoIcon;
        break;
      case 'MP4':
        icon = videoIcon;
        break;
      case 'MOV':
        icon = videoIcon;
        break;
      case 'png':
        icon = imageIcon;
        break;
      case 'jpg':
        icon = imageIcon;
        break;
      case 'jfif':
        icon = imageIcon;
        break;
      case 'gif':
        icon = imageIcon;
        break;
      case 'jpeg':
        icon = imageIcon;
        break;
      default:
        icon = othersIcon;
    }
    return icon;
  };
  return (
    <div>
      <div id="paper" className={styles.paperShadow}>
        {/* <span>It is a long established fact that a reader will be distracted by
       the readable content
      of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less
       normal distribution of letters,</span> */}
        <img src={fileIcon()} className={styles.fileIcon} alt="icon" />
      </div>
      <div className={styles.size}>
        {uploadAssetsLabels.size}
        {': '}
        {parseInt(fileSize.toString(), 10)} KB
      </div>
    </div>
  );
};
export default AssetPreview;
