import Header from '../../components/Header';
import PortText from '../../components/PortText';
import Contact from '../../container/contact';

const Project = () => (
  <>
    <div className="light-theme">
      <Header>
        <PortText variant="portSingleBlog" className="portSingleBlog">
          Portfolio List
        </PortText>
        <a className="backAlign" href="http://localhost:3000/">
          Back
        </a>
      </Header>
      <div className="mainDiv">
        <div className="imgdiv">
          <img src="/images/249801.jpg" alt="ProjectImage" className="img" />
        </div>
        <div className="textDiv">
          <div>
            <PortText variant="portHeadingText" className="portHeadingText">
              Why Blogging is so Amazing & Important?
            </PortText>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  </>
);

export default Project;
