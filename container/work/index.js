// import classNames from 'classnames';
import Card from '../../components/Card';
import Search from '../../public/svg/search_white_48dp.svg';
import Button from '../../components/Button';
import styles from './work.module.scss';

const Work = () => (
  <section id="work" className={styles.center}>
    <div className={styles.portfolio}>
      <div className={styles.row}>
        <h2 className={styles.headText}>Projects</h2>
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
        </Card>
      </div>
      <div className={styles.align}>
        <a href="/PortfolioPage">
          <Button variant="portHomeButton">View More</Button>
        </a>
      </div>
    </div>
  </section>
);

export default Work;
