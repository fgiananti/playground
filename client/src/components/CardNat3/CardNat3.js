import React from 'react';
import classnames from 'classnames';
import styles from './CardNat3.module.css';
import img1 from './assets/nat-8.jpg';
import img2 from './assets/nat-9.jpg';
import img3 from './assets/nat-10.jpg';

const CardNat3 = ({ children, picture, caption }) => {
  let pic = {
    src : img1,
    alt : 'img1'
  };
  if (picture === 'img2') {
    pic = {
      src : img2,
      alt : 'img2'
    }
  }
  if (picture === 'img3') {
    pic = {
      src : img3,
      alt : 'img3'
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.shape}>
        <img className={styles.img} src={pic.src} alt={pic.alt}/>
        <figcaption className={styles.caption}>{ caption }</figcaption>
      </div>
      <div className={styles.text}>
        {children}
      </div>
    </div>
  )
}

export default CardNat3;
