import React from 'react';
import classnames from 'classnames';

import styles from './ButtonNat1.module.css';

export const ButtonNat1 = ({ href, children, label, globalC}) => {
  const text = children || label;
  const classes = classnames(
    styles.button,
    globalC
  );

  return (
    <a href={href} className={classes}>
      {text}
    </a>
  );
};

export default ButtonNat1;
