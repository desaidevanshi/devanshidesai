/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import PortText from '../../components/PortText';
import styles from './resume.module.scss';

const Skills = ({ data }) => {
  const router = useRouter();

  return (
    <div className={styles.light_theme}>
      <Header>
        <PortText variant="portSingleBlog" className={styles.portSingleBlog}>
          Resume
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
      <div className={styles.resumeMain}>
        <div className={styles.blockTable}>
          <PortText variant="portHeadingText" className={styles.portHeadingText}>
            Technologies
          </PortText>
          <div className={styles.day}>
            {data?.skills?.map(x => (
              <div className={styles.Skillbars}>
                <PortText variant="portEduPercent" component="h1" className={styles.portEduPercent}>
                  {x?.rating}%
                </PortText>
                <div className={styles.Skillblock}>
                  <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                    {x?.title}
                  </PortText>
                  <div className={styles.Skillbar}>
                    <div className={styles.Skillht1} style={{ width: `${x?.rating}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.workEp}>
          <div className={styles.workExp}>
            <PortText variant="portHeadingText" className={styles.portHeadingText}>
              Work Experience
            </PortText>
          </div>
          {data?.experiences?.map(x => (
            <div className={styles.workPara}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                <b>{x.role} </b>
                from {x.startD} to {x.endD}
              </PortText>
              <PortText variant="portAboutCaption" className={styles.portAboutCaption}>
                {'At '}
                <a style={{ color: '#4da8da' }} href={x.companyLink}>
                  {x.companyName}
                </a>
                {x.description}
              </PortText>
            </div>
          ))}
        </div>
        <div className={styles.blockTable}>
          <PortText variant="portHeadingText" className={styles.portHeadingText}>
            Education
          </PortText>
          <div className={styles.education}>
            {data?.educations?.map(x => (
              <div className={styles.leftTextAlign} key={x.id}>
                <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                  <b>{x.degree}</b>
                </PortText>
                <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                  {x.startD} to {x.endD}
                </PortText>
                <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                  {'At '}
                  <a className={styles.college} href={x.institueLink}>
                    {x.institute}
                  </a>
                </PortText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
