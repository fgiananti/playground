import React from 'react';
import classnames from 'classnames';
import styles from './CardNat1.module.css';

const CardNat1 = ({ icon, title, text}) => {
  return (
    <div className={styles.card}>
      <i className={
          classnames(
            styles.icon,
            styles[icon]
          ) }></i>
        <h3 className={styles.title}>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default CardNat1;
