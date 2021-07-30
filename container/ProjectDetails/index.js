/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef } from 'react';
// import { useCallback, useEffect, useRef } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import PortText from '../../components/PortText';
import styles from './singleBlog.module.scss';

const ProjectDetails = ({ data }) => {
  const router = useRouter();
  const imgRef = useRef(null);
  const intervalRef = useRef();
  const cardRef = useRef([]);

  const startScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      const cardWidth = cardRef.current[0].offsetWidth;
      const total = imgRef.current.scrollLeft + imgRef.current.offsetWidth;
      if (Math.round(total) === imgRef.current.scrollWidth) {
        imgRef.current.scrollLeft = 0;
      } else {
        imgRef.current.scrollLeft += cardWidth;
      }
    }, 2000);
  }, []);

  const stopScroll = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startScroll();
    imgRef.current.addEventListener('mouseover', stopScroll);
    imgRef.current.addEventListener('mouseout', startScroll);
    return () => {
      stopScroll();
      imgRef.current.removeEventListener('mouseover', stopScroll);
      imgRef.current.removeEventListener('mouseout', startScroll);
    };
  }, [startScroll, stopScroll]);

  return (
    <>
      <div className={styles.light_theme}>
        <Header>
          <PortText variant="portSingleBlog" className={styles.portSingleBlog}>
            Project Details
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
          <div className={styles.imgdiv} ref={imgRef}>
            {data.slider.map((x, i) => (
              <img
                key={x.id}
                src={x.url}
                alt="project"
                loading="lazy"
                className={styles.portImgHover}
                ref={el => {
                  cardRef.current[i] = el;
                }}
              />
            ))}
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
