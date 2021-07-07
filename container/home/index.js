import ReactRotatingText from 'react-rotating-text';
import classNames from 'classnames';
import styles from './home.module.scss';

const Home = () => (
  <>
    <section id="home" className={classNames(styles.banner, 'bg-primary')}>
      <div className={styles.containerH}>
        <h1 className={styles.header}>
          Hi! I am
          <br />
          Devanshi Desai
        </h1>
        <p className={styles.desc}>
          Creative
          <ReactRotatingText
            style={{ color: '#4da8da', paddingLeft: '10px' }}
            items={['Designer', 'Developer']}
          />
        </p>
      </div>
    </section>
  </>
);

export default Home;
