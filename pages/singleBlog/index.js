import Header from '../../components/Header';
import PortText from '../../components/PortText';
// import useContact from '../../hooks/useContact';
// import Contact from '../../container/contact';
import styles from './singleBlog.module.scss';

const Project = () => (
  // const { data: contactData } = useContact();
  <>
    <div className={styles.light_theme}>
      <Header>
        <PortText variant="portSingleBlog" className={styles.portSingleBlog}>
          Project Details
        </PortText>
        <a className={styles.backAlign} href="/">
          Back
        </a>
      </Header>
      <div className={styles.mainDiv}>
        <div className={styles.imgdiv}>
          <img src="/images/249801.jpg" alt="ProjectImage" className={styles.img} />
          <img src="/images/249801.jpg" alt="ProjectImage" className={styles.img} />
          <img src="/images/249801.jpg" alt="ProjectImage" className={styles.img} />
          <img src="/images/249801.jpg" alt="ProjectImage" className={styles.img} />
        </div>
        <div className={styles.textDiv}>
          <div>
            <PortText variant="portHeadingText" className={styles.portHeadingText}>
              Personal Portfolio
            </PortText>
          </div>
          <div className={styles.content}>
            <h3 className={styles.head}>Role</h3>
            <p className={styles.detail}>Lorem ipsum dolor</p>
            <h3 className={styles.head}>Project Categories</h3>
            <p className={styles.detail}>Lorem ipsum dolor</p>
            <h3 className={styles.head}>Technology Used</h3>
            <p className={styles.detail}>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      {/* <Contact data={contactData} /> */}
    </div>
  </>
);

export default Project;
