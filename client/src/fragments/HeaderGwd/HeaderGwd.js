import React from 'react';
import classnames from 'classnames';

import ButtonGwd from '../../components/ButtonGwd';
import Wrapper from '../../layout/Wrapper';

//modules
import styles from './HeaderGwd.module.css';
import logo from './assets/clear-view-escapes.svg';

// ({buttonType, props})
export const HeaderGwd = props => {
  const classes = classnames(styles.header);

  return (
    <header className={classes}>
      <Wrapper>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.btncontainer}>
          <ButtonGwd color="blue">Get in Touch!</ButtonGwd>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#our-beginning">Our Beginning</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default HeaderGwd;
