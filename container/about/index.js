import Button from '../../components/Button';
import Github from '../../public/svg/logo-github.svg';
import Linkedin from '../../public/svg/logo-linkedin.svg';
import Twitter from '../../public/svg/logo-twitter.svg';
import Gmail from '../../public/svg/mail.svg';
import styles from './about.module.scss';
import classNames from 'classnames';

const About = () => {
  return (
    <div id="about">
      <article className={classNames(styles.about, 'bg-primary')}>
        <picture className={styles.aboutImg}>
          <source media="(max-width:1025px)" srcSet="/images/about-img-lg.jpg" type="image.jpg" />
          <img src="/images/about-img-lg.jpg" />
        </picture>
        <aside className={styles.description}>
          <h2 className={styles.name}>Devanshi Desai</h2>
          <h3 className={styles.caption}>Full-stack Developer</h3>
          <p className={styles.des}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus nobis neque,
            deserunt nulla hic autem, eveniet aperiam aliquid eligendi, aut possimus obcaecati!
            Earum, cum hic.
          </p>
          <div className={styles.portSocial}>
            <a href="https://github.com/desaidevanshi">
              <Button className={styles.portSocialBtn} variant="portSocialButton">
                <Github className={styles.btnHover} height={18} width={18} />
              </Button>
            </a>
            <a href="www.linkedin.com/in/devanshi-desai-5716bb182">
              <Button className={styles.portSocialBtn} variant="portSocialButton">
                <Linkedin className={styles.btnHover} height={18} width={18} />
              </Button>
            </a>
            <a href="https://twitter.com/Devansh70765923">
              <Button className={styles.portSocialBtn} variant="portSocialButton">
                <Twitter className={styles.btnHover} height={18} width={18} />
              </Button>
            </a>
            <a href="mailto:contact.ddevanshi@gmail.com">
              <Button className={styles.portSocialBtn} variant="portSocialButton">
                <Gmail className={styles.btnHover} height={18} width={18} />
              </Button>
            </a>
          </div>
          <Button>Download cv</Button>
        </aside>
      </article>
    </div>
  );
};

export default About;
