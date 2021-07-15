import useProjects from '../../hooks/useProjects';
import Card from '../../components/Card';
import Header from '../../components/Header';
import PortText from '../../components/PortText';
import styles from './portfolio.module.scss';

const PortfolioPage = () => {
  const { data: projectData } = useProjects();
  return (
    <div className={styles.light_theme}>
      <Header>
        <PortText variant="portSingleBlog" className={styles.portSingleBlog}>
          {projectData?.header?.title}
        </PortText>
        <a className={styles.backAlign} href="/">
          {projectData?.header?.goBack}
        </a>
      </Header>
      <section className={styles.portfolioList}>
        <div className={styles.pFilter}>
          {projectData?.project_categories.map(x => (
            <ul>
              <li>{x.title}</li>
              {/* <li>Web Design</li>
              <li>Application</li>
              <li>Development</li> */}
            </ul>
          ))}
        </div>

        <div className={styles.portfolioItems}>
          {projectData?.projects.map(x => (
            <Card variant="cardPort">
              <div className={styles.relativeP}>
                <a href="/singleBlog">
                  <img src={x.displayImage.url} alt="ProjectImg" />
                  <div className={styles.cardContent}>
                    <Card variant="hoverPort">
                      <div className={styles.hoverContext}>
                        <h3 className={styles.portHoverCardText}>{x.title}</h3>
                      </div>
                    </Card>
                  </div>
                </a>
              </div>
            </Card>
          ))}

          {/* <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card>

          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <a href="/singleBlog">
                <img src="/images/249772.jpg" alt="" />
                <div className={styles.cardContent}>
                  <Card variant="hoverPort">
                    <div className={styles.hoverContext}>
                      <h3 className={styles.portHoverCardText}>Application</h3>
                      <span>
                        <Search className={styles.searchIcon} />
                      </span>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  );
};
export default PortfolioPage;
