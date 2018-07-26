import React from 'react';
import classnames from 'classnames';
import styles from './CardNat2.module.css';
import ButtonNat1 from '../ButtonNat1';

const CardNat2 = ({ title, picture, children }) => {
  return (
    <div className={styles.card}>
    <Front title={title} picture={picture} children={children} />
    <Back />
    </div>
  )
}

const Front = ({ title, picture, children }) => {
  return (
    <div className={classnames(styles.side, styles.front)}>
      <div className={classnames(styles.picture, styles[picture])}></div>
      <h4 className={styles.heading}>
        <span className={styles.headingspan}>{ title }</span>
      </h4>
      <div className={styles.details}>
        <ul>
          { children }
        </ul>
      </div>
    </div>
  )
}

const Back = () => {
  return (
    <div className={classnames(styles.side, styles.back)}>
      <div className={styles.cta}>
        <h5>Only</h5>
        <h3>$297</h3>
        <ButtonNat1 href="#book">Book now!</ButtonNat1>
      </div>
    </div>
  )
}

export default CardNat2;
