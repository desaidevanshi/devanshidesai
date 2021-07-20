/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Header from '../../components/Header';
import PortText from '../../components/PortText';
import styles from './singleBlog.module.scss';

const ProjectDetails = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.light_theme}>
        <Header>
          <PortText variant="portSingleBlog" className={styles.portSingleBlog}>
            Project
          </PortText>
          <button
            className={styles.backAlign}
            type="button"
            onClick={() => {
              router.back();
            }}>
            Back
          </button>
        </Header>
        <div className={styles.mainDiv}>
          <div className={styles.imgdiv}>
            <img src={data?.displayImage?.url} alt="ProjectImage" className={styles.img} />
          </div>
          <div className={styles.textDiv}>
            <div>
              <PortText variant="portHeadingText" className={styles.portHeadingText}>
                {data?.title}
              </PortText>
            </div>
            <div className={styles.content}>
              <h3 className={styles.head}>Role</h3>
              <p className={styles.detail}>{data?.role?.caption}</p>
              <h3 className={styles.head}>Project Category</h3>
              <p className={styles.detail}>{data?.projectCategory?.caption}</p>
              <h3 className={styles.head}>Technologies Used</h3>
              <div className={styles.techno}>
                {data?.socialLinks?.map(y => (
                  <Button variant="technoBtn" href={y.url} target="_blank" key={y.id}>
                    {y.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDetails;
