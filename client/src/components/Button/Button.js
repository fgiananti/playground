import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

//modules
import styles from './Button.module.css';

export const TYPES = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  DANGER: 'danger',
  SUCCESS: 'success',
}

export const Button = ({buttonType, props}) => {
  const classes = classnames(
    styles.button,
    styles[ buttonType || TYPES.PRIMARY]
  );

  return (
    <button
      className={classes}
    >
      Book now
  </button>
  )
};

export default Button;
