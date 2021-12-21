/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import closeIcon from '../../assets/closeIcon.svg';
import styles from './SideBar.module.css';

const SideBar = (props: any) => {
  const { renderElement, closeHandler, title } = props;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
  useEffect(
    () => () => {
      document.body.style.overflow = 'auto';
    },
    []
  );
  return (
    <div className={styles.sideGrayBackground}>
      <div className={styles.sideBarLayoutRight}>
        <div className={styles.sideBarHeaderRight}>
          <p className={styles.sideHeadTextRight}>{title}</p>
          <div className={styles.closeWrap}>
            <img
              className={styles.closeIcon}
              onClickCapture={closeHandler}
              src={closeIcon}
              alt="close"
            />
          </div>
        </div>
        <div className={styles.sideBarContent}>{renderElement}</div>
      </div>
    </div>
  );
};

export default SideBar;