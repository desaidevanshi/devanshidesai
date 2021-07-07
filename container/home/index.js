import ReactRotatingText from 'react-rotating-text';
import styles from './home.module.scss';
import classNames from 'classnames';

const Home = () => {
  return (
    <>
      <section id="home" className={classNames(styles.banner, 'bg-primary')}>
        <div className={styles.containerH}>
          <h1 className={styles.header}>
            Hi! I'm
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
};
export default Home;
