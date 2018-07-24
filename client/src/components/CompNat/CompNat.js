import React from 'react';
import classnames from 'classnames';
import styles from './CompNat.module.css';
import img1 from './assets/nat-1-large.jpg';
import img2 from './assets/nat-2-large.jpg';
import img3 from './assets/nat-3-large.jpg';

export const CompNat = () => {
  return (
    <div className={styles.container}>
      <img className={classnames(
          styles.photo,
          styles.ph1,
        )} src={img1} alt="photo1"/>
        <img className={classnames(
            styles.photo,
            styles.ph2,
          )} src={img2} alt="photo2"/>
          <img className={classnames(
              styles.photo,
              styles.ph3,
            )} src={img3} alt="photo3"/>
    </div>
  )
}

export default CompNat;
