import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './BoilingVerdict.module.css';

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return (<p>The water would boil.</p>);
  }
  return (<p>The water would NOT boil.</p>);
}

export default BoilingVerdict;
