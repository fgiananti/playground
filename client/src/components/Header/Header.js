import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

//modules
import styles from './Header.module.css';

// ({buttonType, props})
export const Header = props => {
  const classes = classnames(styles.header);

  return (
    <header className={classes}>

  </header>
  )
};

export default Header;
