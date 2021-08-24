/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import PortText from '../../components/PortText';
import styles from './testimonial.module.scss';

const Testimonial = ({ data }) => {
  <section className={styles.testimonial}>
    <div className={styles.testimonialContainer}>
      <figure className={styles.slider}>
        {data.map(x => (
          <div key={x.id} className={styles.containerTest}>
            <div className={styles.authorImg}>
              <Image
                height={96}
                width={98}
                src={x?.profile?.formats?.thumbnail?.url}
                alt="testimonial"
              />
            </div>
            <PortText variant="portTestimonialText">{x.personName}</PortText>
            <PortText variant="portTestimonialRoleText">{x.jobTitle}</PortText>
            <PortText variant="portTestimonialPText" className={styles.description}>
              {x.description}
            </PortText>
          </div>
        ))}
      </figure>
    </div>
  </section>;
};

export default Testimonial;
