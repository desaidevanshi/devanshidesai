/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import styles from './resume.module.scss';
import useSkills from '../../hooks/useSkills';

const Skills = ({ data }) => {
  const router = useRouter();
  const { data: skillsData } = useSkills();
  return (
    <div className={styles.light_theme}>
      <Header>
        <h1 className={styles.portSingleBlog}>Resume</h1>
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
          <h2 variant="portHeadingText" className={styles.portHeadingText}>
            Technologies
          </h2>
          <div className={styles.tech}>
            {skillsData?.map(x => (
              <div className={styles.Skillbars} key={x.id}>
                <h3 className={styles.portEduLeft}>{x?.rating}%</h3>
                <div className={styles.Skillblock}>
                  <p variant="portHeadingCaption" className={styles.portEduLeftText}>
                    {x?.title}
                  </p>
                  <div className={styles.Skillbar}>
                    <div className={styles.Skillht1} style={{ width: `${x?.rating}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.blockTable}>
          <h2 variant="portHeadingText" className={styles.portHeadingText}>
            Work Experience
          </h2>
          {data?.experiences?.map(x => (
            <div className={styles.workPara} key={x.id}>
              <p variant="portHeadingCaption" className={styles.portEduLeftText}>
                <b>{x.role} </b>
              </p>
              <p
                variant="portHeadingCaption"
                className={styles.portEduLeftText}
                style={{ lineHeight: '2rem' }}>
                from {x.startDt} to {x.endDt}
              </p>
              <p variant="portAboutCaption" className={styles.portEduLeftText}>
                {'At '}
                <a className={styles.college} href={x.institueLink} target="_blank">
                  {x.companyName}
                </a>
                {x.description}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.blockTable}>
          <h2 variant="portHeadingText" className={styles.portHeadingText}>
            Education
          </h2>
          <div className={styles.education}>
            {data?.educations?.map(x => (
              <div className={styles.leftTextAlign} key={x.id}>
                <p variant="portEduLeftText" className={styles.portEduLeftText}>
                  <b>{x.degree}</b>
                </p>
                <p variant="portEduLeftText" className={styles.portEduLeftText}>
                  {x.startD} to {x.endD}
                </p>
                <p variant="portEduLeftText" className={styles.portEduLeftText}>
                  {'At '}
                  <a className={styles.college} href={x.institueLink} target="_blank">
                    {x.institute}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
