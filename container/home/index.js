/* eslint-disable arrow-parens */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import ReactRotatingText from 'react-rotating-text';
import Image from 'next/image';
import styles from './home.module.scss';
import useMarkdown from '../../hooks/useMarkdown';

const Home = ({ data }) => {
  const { HTML } = useMarkdown(data.description);
  return (
    <>
      <section
        id="home"
        className={styles.banner}
        // style={{ backgroundImage: `url(${data.backgroundImage.url})` }}
      >
        <div className={styles.containerH}>
          <h1 dangerouslySetInnerHTML={{ __html: HTML }} className={styles.header} />
          <p className={styles.desc}>
            {data.bannerCaption}
            <ReactRotatingText
              style={{ color: '#ef233c', paddingLeft: '10px' }}
              items={data.Skills.map(x => x.bannerSkills)}
            />
          </p>
        </div>
        <div>
          <Image
            src={data.backgroundImage.url}
            height={422}
            width={511}
            alt="Girl sitting with laptop"
            priority
          />
        </div>
      </section>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <Image src="/images/sep.png" width={640} height={204} alt="Seperator" />
      </div>
    </>
  );
};
export default Home;
