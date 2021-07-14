import React from 'react';
// import Button from '../../components/Button';
import Icon from '../../components/Icon';
// import Github from '../../public/svg/logo-github.svg';
// import Linkedin from '../../public/svg/logo-linkedin.svg';
// import Twitter from '../../public/svg/logo-twitter.svg';
// import Gmail from '../../public/svg/mail.svg';
import styles from './footer.module.scss';

const Footer = ({ data }) => (
  <footer id="footer" className={styles.footer}>
    <div className={styles.footerSoc}>
      {data.socialLinks.map(x => (
        <Icon key={x.id} socialLink={x} variant="iconBtn" />
      ))}
      {/* <a href="https://github.com/desaidevanshi">
        <Button className={styles.portSocialBtn} variant="portSocialButton">
          <Github className={styles.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="www.linkedin.com/in/devanshi-desai-5716bb182">
        <Button className={styles.portSocialBtn} variant="portSocialButton">
          <Linkedin className={styles.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="https://twitter.com/Devansh70765923">
        <Button className={styles.portSocialBtn} variant="portSocialButton">
          <Twitter className={styles.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="mailto:contact.ddevanshi@gmail.com">
        <Button className={styles.portSocialBtn} variant="portSocialButton">
          <Gmail className={styles.btnHover} height={18} width={18} />
        </Button>
      </a> */}
    </div>
    {/* <div className={styles.footerMain}>
        <div className={styles.contactF}>
          <div className={styles.footerText}>
            <caption>Devanshi</caption>
            <span>Full-Stack Developer</span>
          </div>
        </div>
        <div className={styles.contactF}>
          <div className={styles.footerText}>
            <caption>Email</caption>
            <span>
              <a href="mailto:contact.ddevanshi@gmail.com">
                contact.ddevanshi@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className={styles.contactF}>
          <div className={styles.footerText}>
            <caption>Phone</caption>
            <span>
              <a href="tel:9726714494">+91-9726714494</a>
            </span>
          </div>
        </div>
      </div> */}
    {/* <div className={styles.footerLine} /> */}
    <div className={styles.footerText}>
      <div>{data.footerText}</div>
    </div>
  </footer>
);

export default Footer;
