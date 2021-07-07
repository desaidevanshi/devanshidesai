import styles from './header.module.scss';

// eslint-disable-next-line react/prop-types
const Header = ({ children }) => (
  <div className={styles.portScrollNavbar}>
    <div className={styles.headerCenter}>{children}</div>
  </div>
);

export default Header;
