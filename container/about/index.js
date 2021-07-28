/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
// import { Image } from 'cloudinary-react';
import useMarkdown from '../../hooks/useMarkdown';
// import Button from '../../components/Button';
import Icon from '../../components/Icon';
import styles from './about.module.scss';

const About = ({ data }) => {
  const { HTML } = useMarkdown(data.biography);
  return (
    <section id="about" className={styles.container}>
      <article className={styles.about}>
        <Image className={styles.aboutImg} src={data.portfolioImage.url} height={999} width={999} />
        {/* <div>
          <Image
            cloudName="devanshidesai"
            useRootPath="true"
            publicId={data.portfolioImage.provider_metadata.public_id}
            dpr="auto"
            responsive
            crop="scale"
            width="auto"
            responsiveUseBreakpoints="true"
            quality="auto"
            fetchFormat="auto"
          />
          <Transformation width="50" height="50" crop="fit" />
        </div> */}
        <aside className={styles.description}>
          <h2 className={styles.name}>
            {data.firstName} {data.lastName}
          </h2>
          <h3 className={styles.caption}>{data.role}</h3>

          <div className={styles.des} dangerouslySetInnerHTML={{ __html: HTML }} />

          <div className={styles.portSocial}>
            {data.socialLinks.map(x => (
              <Icon key={x.id} socialLink={x} variant="iconBtn" />
            ))}
          </div>
          {/* <Button href={data.resume.url} download={data.resume.url}>
            {data.downloadCVText}
          </Button> */}
        </aside>
      </article>
    </section>
  );
};
export default About;
