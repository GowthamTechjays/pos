/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footWrap}>
    <div className={styles.addressTxt}>
      <div>Fortinet Inc.</div>
      <div> 1600 Amphitheatre Parkway</div>
      <div> Mountain View, CA 94043</div>
    </div>
    <div>
      <div className={styles.linksWrap}>
        <div className={styles.link}>Cookie Policy</div>
        <div className={styles.link}>Site Terms</div>
        <div className={styles.link}>Privacy Policy</div>
      </div>
    </div>
  </div>
);
export default Footer;
