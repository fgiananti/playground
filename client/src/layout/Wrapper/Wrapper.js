import React from 'react';
import classnames from 'classnames';
import styles from './Wrapper.module.css';

export const Wrapper = ({ children }) => {
  const classes = classnames(styles.wrapper);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Wrapper;
