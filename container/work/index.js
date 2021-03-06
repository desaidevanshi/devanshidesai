/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './work.module.scss';

const Work = ({ data }) => (
  <section id="work" className={styles.center}>
    <div className={styles.portfolio}>
      <div className={styles.row}>
        <h2 className={styles.headText}>{data.header.title}</h2>
        <p className={styles.desCon}>{data.header.caption}</p>
      </div>

      <div className={styles.item}>
        {data.projects.map(x => (
          <Card variant="cardPort" key={x.id}>
            <div className={styles.relativeP}>
              <a href={`work/${x.id}`}>
                <Image height={300} width={300} src={x.displayImage.url} alt="projectIm" />
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
      <div className={styles.align}>
        <Button href="/projects">{data.buttonText}</Button>
      </div>
    </div>
  </section>
);
export default Work;
