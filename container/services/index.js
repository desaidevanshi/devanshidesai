// import Computer from '../../public/svg/laptop_white_48dp.svg';
import useMarkdown from '../../hooks/useMarkdown';
import Button from '../../components/Button';
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
            <div className={styles.box}>
              <Button variant="portServiceButton">
                <Icon key={x.id} socialLink={x} variant="serviceBtn" />
              </Button>
              <div className={styles.divRow}>
                <h3>{x.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: HTML }} />
              </div>
            </div>
          );
        })}

        {/* <div className={styles.box}>
          <Button variant="portServiceButton">
            <Code />
          </Button>
          <div className={styles.divRow}>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vel reiciendis laborum
              dolor recusandae deleniti repudiandae aut libero animi. Eaque qui debitis aperiam est
              ullam?
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <Button variant="portServiceButton">
            <Settings />
          </Button>
          <div className={styles.divRow}>
            <h3>Support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius est molestias excepturi
              atque deserunt quod dolore, aut beatae distinctio unde quae aliquam iste asperiores
              vero.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  </>
);

export default Services;
