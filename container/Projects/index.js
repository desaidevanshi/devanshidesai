/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import { useRouter } from 'next/router';
import Card from '../../components/Card';
import Header from '../../components/Header';
import PortText from '../../components/PortText';
import styles from './portfolio.module.scss';

const Projects = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles.light_theme}>
      <Header>
        <PortText variant="portSingleBlog" className={styles.portSingleBlog}>
          Projects
        </PortText>
        <button
          className={styles.backAlign}
          type="button"
          onClick={() => {
            router.back();
          }}>
          Back
        </button>
      </Header>
      <section className={styles.portfolioList}>
        <div className={styles.portfolioItems}>
          {data?.map(x => (
            <Card variant="cardPort" key={x.id}>
              <div className={styles.relativeP}>
                <a href={`work/${x.id}`}>
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
        </div>
      </section>
    </div>
  );
};
export default Projects;
