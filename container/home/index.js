/* eslint-disable arrow-parens */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import ReactRotatingText from 'react-rotating-text';
import styles from './home.module.scss';
import useMarkdown from '../../hooks/useMarkdown';

const Home = ({ data }) => {
  const { HTML } = useMarkdown(data.description);
  return (
    <>
      <section
        id="home"
        className={styles.banner}
        style={{ backgroundImage: `url(${data.backgroundImage.url})` }}>
        <div className={styles.containerH}>
          <h1 dangerouslySetInnerHTML={{ __html: HTML }} className={styles.header} />
          <p className={styles.desc}>
            {data.bannerCaption}
            <ReactRotatingText
              style={{ color: '#4da8da', paddingLeft: '10px' }}
              items={data.Skills.map(x => x.bannerSkills)}
            />
          </p>
        </div>
      </section>
    </>
  );
};
export default Home;
