import React from 'react';
import classnames from 'classnames';

import ButtonGwd from '../../components/ButtonGwd';
import Wrapper from '../../layout/Wrapper';

//modules
import styles from './HeaderGwd.module.css';
import logo from './assets/clear-view-escapes.svg';

// ({buttonType, props})
export const HeaderGwd = ({ links }) => {
  const classes = classnames(styles.header);

  const linksMarkup = links.map((link, index) => {
    return (
      <li key={index}><a href={link.link}>{link.label}</a></li>
    )
  })

  return (
    <header className={classes}>
      <Wrapper>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.btncontainer}>
          <ButtonGwd color="blue">Get in Touch!</ButtonGwd>
        </div>
        <nav className={styles.nav}>
          <ul>
            {linksMarkup}
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default HeaderGwd;
