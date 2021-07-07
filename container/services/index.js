import Computer from '../../public/svg/laptop_white_48dp.svg';
import Code from '../../public/svg/code_white_48dp.svg';
import Settings from '../../public/svg/support_white_48dp.svg';
import Button from '../../components/Button';
import styles from './service.module.scss';

const Services = () => {
  return (
    <>
      <section id="services" className={styles.serviceSec}>
        <div className={styles.heading}>
          <h2>Services</h2>
          <p>WHAT CAN I DO</p>
        </div>
        <div className={styles.mainbox}>
          <div className={styles.box}>
            <Button variant="portServiceButton">
              <Computer />
            </Button>
            <div className={styles.divRow}>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita et
                veniam aut nulla ipsa enim ex in, quaerat, hic aspernatur voluptatem debitis,
                accusantium itaque!
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <Button variant="portServiceButton">
              <Code />
            </Button>
            <div className={styles.divRow}>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vel reiciendis
                laborum dolor recusandae deleniti repudiandae aut libero animi. Eaque qui debitis
                aperiam est ullam?
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius est molestias
                excepturi atque deserunt quod dolore, aut beatae distinctio unde quae aliquam iste
                asperiores vero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
