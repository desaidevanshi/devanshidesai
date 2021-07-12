import React from 'react';
import Header from '../../components/Header';
import PortText from '../../components/PortText';
import styles from './resume.module.scss';

const Skills = () => (
  <div className={styles.light_theme}>
    <Header>
      <PortText variant="portSingleBlog" className={styles.portSingleBlog}>
        Resume
      </PortText>
      <a className={styles.backAlign} href="/">
        Back
      </a>
    </Header>
    <div className={styles.resumeMain}>
      <div className={styles.blockTable}>
        <PortText variant="portHeadingText" className={styles.portHeadingText}>
          Technologies
        </PortText>
        <div className={styles.day}>
          <div className={styles.Skillbars}>
            <PortText variant="portEduPercent" component="h1" className={styles.portEduPercent}>
              92%
            </PortText>
            <div className={styles.Skillblock}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                HTML5
              </PortText>
              <div className={styles.Skillbar}>
                <div className={styles.Skillht1} />
              </div>
            </div>
          </div>
          <div className={styles.Skillbars}>
            <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
              80%
            </PortText>
            <div className={styles.Skillblock}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                JAVASCRIPT
              </PortText>
              <div className={styles.Skillbar}>
                <div className={styles.Skillht2} />
              </div>
            </div>
          </div>
          <div className={styles.Skillbar}>
            <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
              72%
            </PortText>
            <div className={styles.Skillblock}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                SASS
              </PortText>
              <div className={styles.Skillbar}>
                <div className={styles.Skillht3} />
              </div>
            </div>
          </div>
          <div className={styles.Skillbar}>
            <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
              92%
            </PortText>
            <div className={styles.Skillblock}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                REACT
              </PortText>
              <div className={styles.Skillbar}>
                <div className={styles.Skillht1} />
              </div>
            </div>
          </div>
          <div className={styles.Skillbar}>
            <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
              80%
            </PortText>
            <div className={styles.Skillblock}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                NEXTJS
              </PortText>
              <div className={styles.Skillbar}>
                <div className={styles.Skillht2} />
              </div>
            </div>
          </div>
          <div className={styles.Skillbar}>
            <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
              72%
            </PortText>
            <div className={styles.Skillblock}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                REACT-NATIVE
              </PortText>
              <div className={styles.Skillbar}>
                <div className={styles.Skillht3} />
              </div>
            </div>
          </div>
          <div className={styles.Skillbar}>
            <PortText variant="portEduPercent" className={styles.portEduPercent} component="h1">
              85%
            </PortText>
            <div className={styles.Skillblock}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                TAILWINDCSS
              </PortText>
              <div className={styles.Skillbar}>
                <div className={styles.Skillht4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.workEp}>
        <div className={styles.workExp}>
          <PortText variant="portHeadingText" className={styles.portHeadingText}>
            Work experience
          </PortText>
        </div>
        <div className="workPara">
          <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
            <b>FRONT-END DEVELOPER </b>
            (from Nov 2020 to present)
          </PortText>
          <PortText variant="portAboutCaption" className={styles.portAboutCaption}>
            {'At '}
            <a style={{ color: '#4da8da' }} href="https://www.upgmp.com/">
              UpGMP.inc
            </a>
            , as Front-End developer from Novemver 2020 to present. Contributed in developing 2
            mobile application IOS & ANDROID, 1. It was a recipe app, a famous youtuber in gujarat
            needed a mobile application which can provide their recipe videos to all over the world.
            2. There was a survay application needed by VKC footwere company to get a proper
            feedback application from thir retailers. As working there I used to enjoy working as a
            front-end dev. I am taking the training of back-end as well.
          </PortText>
        </div>
      </div>
      <div className={styles.blockTable}>
        <PortText variant="portHeadingText" className={styles.portHeadingText}>
          Education
        </PortText>
        <div className={styles.education}>
          <div className={styles.leftTextAlign}>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              <b>Bachelor of Computer Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              2018-2022
            </PortText>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              {'At '}
              <a className="college" href="https://silveroakuni.ac.in/">
                SilverOak University
              </a>
            </PortText>
          </div>
          <div className={styles.leftTextAlign}>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              <b>Bachelor of Computer Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              2018-2022
            </PortText>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              {'At '}
              <a className="college" href="https://silveroakuni.ac.in/">
                SilverOak University
              </a>
            </PortText>
          </div>
          <div className={styles.leftTextAlign}>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              <b>Bachelor of Computer Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              2018-2022
            </PortText>
            <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
              {'At '}
              <a className="college" href="https://silveroakuni.ac.in/">
                SilverOak University
              </a>
            </PortText>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
