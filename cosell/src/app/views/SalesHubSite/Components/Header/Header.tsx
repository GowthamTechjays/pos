import React, { Component } from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.headerWrap}>
    <div className={styles.logoImg}>
      <img
        src="https://d1wjau4dvmc4kc.cloudfront.net/media/public/assets/files/file_181.png"
        alt=""
      />
    </div>
    <div className={styles.logoImg}>
      <img
        src="https://d1wjau4dvmc4kc.cloudfront.net/media/public/assets/files/file_181.png"
        alt=""
      />
    </div>
    {/* <img />
        <img /> */}
  </div>
);
export default Header;
