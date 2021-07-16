/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
// import Button from '../../components/Button';
import Icon from '../../components/Icon';
import styles from './footer.module.scss';

const Footer = ({ data }) => (
  <footer id="footer" className={styles.footer}>
    <div className={styles.footerSoc}>
      {data.socialLinks.map(x => (
        <Icon key={x.id} socialLink={x} variant="iconBtn" />
      ))}
    </div>
    <div className={styles.footerText}>{data.footerText}</div>
  </footer>
);

export default Footer;
