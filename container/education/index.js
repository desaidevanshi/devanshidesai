import React from "react";
import Button from "../../components/Button";
import PortText from "../../components/PortText";

const Education = () => (
  <section id="Education" className="alignment bg-primary">
    <div className="textAlign">
      <PortText variant="portHeadingText">Education and Skills</PortText>
    </div>
    <div className="leftbox">
      <div className="leftsubbox">
        <div className="leftTextAlign">
          <PortText variant="portEduLeftText">2010-2012</PortText>
          <PortText variant="portEduLeftText">Graphic Designer</PortText>
          <PortText variant="portEduLeftText">
            International Design Institute
          </PortText>
        </div>
        <div className="leftTextAlign">
          <PortText variant="portEduLeftText">2010-2012</PortText>
          <PortText variant="portEduLeftText">Graphic Designer</PortText>
          <PortText variant="portEduLeftText">
            International Design Institute
          </PortText>
        </div>
      </div>
      <div className="baralign">
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            80%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">JAVASCRIPT</PortText>
            <div className="bar">
              <div className="ht2" />
            </div>
          </div>
        </div>
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            72%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">REACT</PortText>
            <div className="bar">
              <div className="ht3" />
            </div>
          </div>
        </div>
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            85%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">NEXTJS</PortText>
            <div className="bar">
              <div className="ht4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="align">
      <a href="/Resume">
        <Button>View More</Button>
      </a>
    </div>
  </section>
);

export default Education;
