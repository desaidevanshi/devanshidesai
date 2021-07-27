/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import useMarkdown from '../../hooks/useMarkdown';
import styles from './service.module.scss';
import Icon from '../../components/Icon';

const Services = ({ data }) => (
  <>
    <section id="services" className={styles.serviceSec}>
      <div className={styles.heading}>
        <h2>{data.header.title}</h2>
        <p>{data.header.caption}</p>
      </div>
      <div className={styles.mainbox}>
        {data.services.map(x => {
          const { HTML } = useMarkdown(x.description);
          return (
            <div className={styles.box} key={x.id}>
              <Icon socialLink={x} variant="serviceBtn" />
              <div className={styles.divRow}>
                <h3>{x.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: HTML }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Services;
