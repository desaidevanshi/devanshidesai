// import classNames from 'classnames';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './work.module.scss';
// import Icon from '../../components/Icon';

const Work = ({ data }) => (
  <section id="work" className={styles.center}>
    <div className={styles.portfolio}>
      <div className={styles.row}>
        <h2 className={styles.headText}>{data.header.title}</h2>
        <div className={styles.pFilter}>
          <ul>
            <li>All</li>
            <li>Web Design</li>
            <li>Application</li>
            <li>Development</li>
          </ul>
        </div>
      </div>

      <div className={styles.item}>
        {data.projects.map(x => (
          <Card variant="cardPort">
            <div className={styles.relativeP}>
              <img src={x.displayImage.url} alt="" />
              <div className={styles.cardContent}>
                <Card variant="hoverPort">
                  <div className={styles.hoverContext}>
                    <h3 className="portHoverCardText">{x.title}</h3>
                    {/* <Icon key={x.id} socialLink={x} variant="searchIcon" /> */}
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        ))}

        {/* <Card variant="cardPort">
          <div className={styles.relativeP}>
            <img src="/images/249772.jpg" alt="" />
            <div className={styles.cardContent}>
              <Card variant="hoverPort">
                <div className={styles.hoverContext}>
                  <h3 className="portHoverCardText">Application</h3>
                  <span>
                    <Search className={styles.searchIcon} />
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <Card variant="cardPort">
          <div className={styles.relativeP}>
            <img src="/images/249772.jpg" alt="" />
            <div className={styles.cardContent}>
              <Card variant="hoverPort">
                <div className={styles.hoverContext}>
                  <h3 className="portHoverCardText">Application</h3>
                  <span>
                    <Search className={styles.searchIcon} />
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Card> */}
      </div>
      <div className={styles.align}>
        <a href="/PortfolioPage">
          <Button variant="portHomeButton">{data.buttonText}</Button>
        </a>
      </div>
    </div>
  </section>
);

export default Work;
