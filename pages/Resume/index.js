import React from 'react';
import useMarkdown from '../../hooks/useMarkdown';
import useResume from '../../hooks/useResume';
import Header from '../../components/Header';
import PortText from '../../components/PortText';
import styles from './resume.module.scss';

const Skills = () => {
  const { data: resumeData } = useResume();
  return (
    <div className={styles.light_theme} data={resumeData}>
      <Header>
        <PortText variant="portSingleBlog" className={styles.portSingleBlog}>
          {resumeData?.header?.title}
        </PortText>
        <a className={styles.backAlign} href="/">
          {resumeData?.header?.goBack}
        </a>
      </Header>
      <div className={styles.resumeMain}>
        <div className={styles.blockTable}>
          <PortText variant="portHeadingText" className={styles.portHeadingText}>
            {resumeData?.skillsHead}
          </PortText>
          <div className={styles.day}>
            {resumeData?.skills?.map(x => (
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

            {/* <div className={styles.Skillbars}>
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
            <div className={styles.Skillbars}>
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
            <div className={styles.Skillbars}>
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
            <div className={styles.Skillbars}>
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
            <div className={styles.Skillbars}>
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
            <div className={styles.Skillbars}>
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
            </div> */}
          </div>
        </div>
        <div className={styles.workEp}>
          <div className={styles.workExp}>
            <PortText variant="portHeadingText" className={styles.portHeadingText}>
              {resumeData?.workexp}
            </PortText>
          </div>
          {resumeData?.experiences.map(x => (
            <div className={styles.workPara}>
              <PortText variant="portHeadingCaption" className={styles.portHeadingCaption}>
                <b>{x.role} </b>
                from {x.startDate} to {x.endDate}
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
            {resumeData?.education}
          </PortText>
          <div className={styles.education}>
            {resumeData?.education_details.map(x => (
              <div className={styles.leftTextAlign}>
                <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                  <b>{x.degree}</b>
                </PortText>
                <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                  {x.startDate} to {x.endDate}
                </PortText>
                <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                  {'At '}
                  <a className={styles.college} href={x.institueLink}>
                    {x.institute}
                  </a>
                </PortText>
              </div>
            ))}

            {/* <div className={styles.leftTextAlign}>
              <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                <b>Bachelor of Computer Engineering</b>
              </PortText>
              <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                2018-2022
              </PortText>
              <PortText variant="portEduLeftText" className={styles.portEduLeftText}>
                {'At '}
                <a className={styles.college} href="https://silveroakuni.ac.in/">
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
                <a className={styles.college} href="https://silveroakuni.ac.in/">
                  SilverOak University
                </a>
              </PortText>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
