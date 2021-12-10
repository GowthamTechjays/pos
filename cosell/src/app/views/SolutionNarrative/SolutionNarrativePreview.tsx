/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import pdf_icon from '../../assets/pdf_icon.svg';
import styles from './SolutionNarrativePreview.module.css';
import pdfIcon from '../../assets/pdf_mini.svg';
import pptIcon from '../../assets/ppt_mini.svg';
import imageIcon from '../../assets/img_mini.svg';
import videoIcon from '../../assets/video_mini.svg';
import { selectSolutionNarrativeResponse } from './SolutionNarrativeSlice';

interface SolutionNarrativeValues {
  name: string;
  description: string;
  thumbnailImage: string;
  tags: string[];
}
const SolutionNarrativePreview = (props: any) => {
  const { formValues, solutionNarrativeId } = props;

  const [thumbnailImage, setThumbnailImage] = useState<string>();
  const solutionNarrativeStoreData = useSelector(
    selectSolutionNarrativeResponse
  );

  useEffect(() => {
    console.log(solutionNarrativeStoreData);
  }, [solutionNarrativeStoreData]);

  console.log(solutionNarrativeStoreData);

  useEffect(() => {
    if (solutionNarrativeId) {
      if (formValues) {
        if (formValues.thumbnailImageFile) {
          setThumbnailImage(URL.createObjectURL(formValues.thumbnailImageFile));
        } else {
          setThumbnailImage(formValues.thumbnailImage);
        }
      }
    } else if (
      formValues &&
      formValues.thumbnailImageFile &&
      formValues.thumbnailImageFile !== ''
    ) {
      setThumbnailImage(URL.createObjectURL(formValues.thumbnailImageFile));
    }
  }, [formValues]);

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

  return (
    <div className={styles.previewContainer}>
      <div className={styles.imageAndContentContainer}>
        <div className={styles.imageContainer}>
          {thumbnailImage && (
            <img src={thumbnailImage} className={styles.image} alt="" />
          )}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title}>
            {formValues ? formValues.name : ''}
          </div>
          <div className={styles.description}>
            {formValues ? formValues.description : ''}
          </div>
        </div>
      </div>
      {solutionNarrativeStoreData.assetInfo.length > 0
        ? solutionNarrativeStoreData.assetInfo.map((asset: any) => {
            console.log(asset);
            if (asset.is_selected === true) {
              return (
                <div
                  id={asset.asset_id}
                  className={styles.imageAndAssetsMainContainer}
                >
                  <div className={styles.imageAndAssetsContentContainer}>
                    <img
                      className={styles.pfdImage}
                      src={getDocIcon('PDF')}
                      alt="img"
                    />
                    <div className={styles.pdfTitle}>{asset.asset_name}</div>
                  </div>
                </div>
              );
            }
            return '';
          })
        : ''}
    </div>
  );
};

export default SolutionNarrativePreview;
