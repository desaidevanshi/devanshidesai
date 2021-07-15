/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './work.module.scss';

const Work = ({ data }) => (
  <section id="work" className={styles.center}>
    <div className={styles.portfolio}>
      <div className={styles.row}>
        <h2 className={styles.headText}>{data.header.title}</h2>
        <div className={styles.pFilter}>
          {data.project_categories.map(x => (
            <ul>
              <li>{x.title}</li>
              {/* <li>Web Design</li>
              <li>Application</li>
              <li>Development</li> */}
            </ul>
          ))}
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
                    <h3 className={styles.portHoverCardText}>{x.title}</h3>
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
        <Button href="/PortfolioPage">{data.buttonText}</Button>
      </div>
    </div>
  </section>
);

export default Work;
