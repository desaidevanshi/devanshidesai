import React from 'react';
import Header from '../../components/Header';
// import Footer from '../../container/footer';
import PortText from '../../components/PortText';

const Skills = () => (
  <div className="light-theme">
    <Header>
      <PortText variant="portSingleBlog">Resume</PortText>
      <a className="backAlign" href="/">
        Back
      </a>
    </Header>
    <div className="resumeMain">
      <div className="blockTable">
        <PortText PortText variant="portHeadingText">
          Technologies
        </PortText>
        <div className="day">
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              92%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">HTML5</PortText>
              <div className="Skillbar">
                <div className="Skillht1" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              80%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">JAVASCRIPT</PortText>
              <div className="Skillbar">
                <div className="Skillht2" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              72%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">SASS</PortText>
              <div className="Skillbar">
                <div className="Skillht3" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              92%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">REACT</PortText>
              <div className="Skillbar">
                <div className="Skillht1" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              80%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">NEXTJS</PortText>
              <div className="Skillbar">
                <div className="Skillht2" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              72%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">REACT-NATIVE</PortText>
              <div className="Skillbar">
                <div className="Skillht3" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              85%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">TAILWINDCSS</PortText>
              <div className="Skillbar">
                <div className="Skillht4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="workEp">
        <div className="workExp">
          <PortText variant="portHeadingText">Work experience</PortText>
        </div>
        <div className="workPara">
          <PortText variant="portHeadingCaption">
            <b>FRONT-END DEVELOPER </b>
            (from Nov 2020 to present)
          </PortText>
          <PortText variant="portAboutCaption">
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
      <div className="blockTable">
        <PortText PortText variant="portHeadingText">
          Education
        </PortText>
        <div className="education">
          <div className="leftTextAlign">
            <PortText variant="portEduLeftText">
              <b>Bachelor of Electronics and Communication Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText">2018-2022</PortText>
            <PortText variant="portEduLeftText">
              {'At '}
              <a className="college" href="https://silveroakuni.ac.in/">
                SilverOak University
              </a>
            </PortText>
          </div>
          <div className="leftTextAlign">
            <PortText variant="portEduLeftText">
              <b>Bachelor of Electronics and Communication Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText">2018-2022</PortText>
            <PortText variant="portEduLeftText">
              {'At '}
              <a className="college" href="https://silveroakuni.ac.in/">
                SilverOak University
              </a>
            </PortText>
          </div>
          <div className="leftTextAlign">
            <PortText variant="portEduLeftText">
              <b>Bachelor of Electronics and Communication Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText">2018-2022</PortText>
            <PortText variant="portEduLeftText">
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
