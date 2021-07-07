import Card from '../../components/Card';
import Header from '../../components/Header';
import PortText from '../../components/PortText';
// import Footer from '../../container/footer';
import Search from '../../public/svg/search_white_48dp.svg';

const PortfolioPage = () => (
  <div className="light-theme">
    <Header>
      <PortText variant="portSingleBlog">Portfolio List</PortText>
      <a className="backAlign" href="http://localhost:3000/">
        Back
      </a>
    </Header>
    <section className="portfolioList">
      <div className="pFilter">
        <ul>
          <li>All</li>
          <li>Web Design</li>
          <li>Application</li>
          <li>Development</li>
        </ul>
      </div>

      <div className="portfolioItems">
        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>

        <Card variant="cardPort">
          <div className="relativeP">
            <a href="/singleBlog">
              <img src="/images/249772.jpg" alt="" />
              <div className="cardContent">
                <Card variant="hoverPort">
                  <div className="hoverContext">
                    <h3 className="portHoverCardText">Application</h3>
                    <span>
                      <Search className="searchIcon" />
                    </span>
                  </div>
                </Card>
              </div>
            </a>
          </div>
        </Card>
      </div>
    </section>
  </div>
);

export default PortfolioPage;
