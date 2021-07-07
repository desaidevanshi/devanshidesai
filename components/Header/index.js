import styles from './Header.module.scss';

const Header = ({ children }) => (
  <div className={styles.portScrollNavbar}>
    <div className={styles.headerCenter}>{children}</div>
  </div>
);

export default Header;
