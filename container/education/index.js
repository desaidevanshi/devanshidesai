/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../components/Button';
import PortText from '../../components/PortText';
import styles from './education.module.scss';

const Education = ({ data }) => {
  const eduData = [...data.skills.slice(0, 3)];
  return (
    <section id="education" className={styles.container}>
      <div className={styles.alignment}>
        <div className={styles.textAlign}>
          <h2 className={styles.heading}>{data.Header.title}</h2>
          <p className={styles.caption}>{data.Header.caption}</p>
        </div>
        <div className={styles.leftbox}>
          <div className={styles.leftsubbox}>
            {data.educations.map(x => (
              <div key={x.id} className={styles.leftTextAlign}>
                <p className={styles.portEduLeftText}>
                  {x.startD} to {x.endD}
                </p>
                <p className={styles.portEduLeftText}>{x.degree}</p>
                <p className={styles.portEduLeftText}>{x.institute}</p>
              </div>
            ))}
          </div>
          <div className={styles.baralign}>
            {eduData.map(x => (
              <div className={styles.bars} key={x.id}>
                <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
                  {x.rating}%
                </PortText>
                <div className={styles.block}>
                  <p className={styles.portEduLeftText}>{x.title}</p>
                  <div className={styles.bar}>
                    <div className={styles.ht2} style={{ width: `${x.rating}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.align}>
          <Button href="/resume">{data.button}</Button>
        </div>
      </div>
    </section>
  );
};
export default Education;
