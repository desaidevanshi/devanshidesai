import React from 'react';
import Button from '../../components/Button';
import PortText from '../../components/PortText';
import styles from './education.module.scss';

const Education = () => (
  <section id="Education" className={styles.alignment}>
    <div className="textAlign">
      <PortText variant="portHeadingText" className={styles.portHeadingText}>
        Education and Skills
      </PortText>
    </div>
    <div className={styles.leftbox}>
      <div className={styles.leftsubbox}>
        <div className={styles.leftTextAlign}>
          <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
            2010-2012
          </PortText>
          <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
            Graphic Designer
          </PortText>
          <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
            International Design Institute
          </PortText>
        </div>
        <div className="leftTextAlign">
          <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
            2010-2012
          </PortText>
          <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
            Graphic Designer
          </PortText>
          <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
            International Design Institute
          </PortText>
        </div>
      </div>
      <div className={styles.baralign}>
        <div className={styles.bars}>
          <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
            80%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
              JAVASCRIPT
            </PortText>
            <div className={styles.bar}>
              <div className={styles.ht2} />
            </div>
          </div>
        </div>
        <div className={styles.bars}>
          <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
            72%
          </PortText>
          <div className={styles.block}>
            <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
              REACT
            </PortText>
            <div className={styles.bar}>
              <div className={styles.ht3} />
            </div>
          </div>
        </div>
        <div className={styles.bars}>
          <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
            85%
          </PortText>
          <div className={styles.block}>
            <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
              NEXTJS
            </PortText>
            <div className={styles.bar}>
              <div className={styles.ht4} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.align}>
      <a href="/Resume">
        <Button>View More</Button>
      </a>
    </div>
  </section>
);

export default Education;
