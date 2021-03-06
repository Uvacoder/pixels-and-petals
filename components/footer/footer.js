import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer} id={'footer'}>
      <h2>PixelsNPetals@Gmail.com</h2>
      <a
        href={'https://www.instagram.com/pixels.petals/'}
        target={'_blank'}>
        <FontAwesomeIcon
          icon={['fab', 'instagram']}
          className={styles.icon}/>
      </a>
      <div className={styles.navContainer}>
        <a
          href={'#home'}
          className={styles.navLink}>
          Home
        </a>
        <a
          href={'#about'}

          className={styles.navLink}>

          About
        </a>
        <a
          href={'#gallery'}

          className={styles.navLink}>

          Gallery
        </a>
        {/*<a*/}
        {/*  href={'#testimonial'}*/}

        {/*  className={styles.navLink}>*/}

        {/*  Testimonial*/}
        {/*</a>*/}
        <a
          href={'#footer'}

          className={styles.navLink}>

          Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
