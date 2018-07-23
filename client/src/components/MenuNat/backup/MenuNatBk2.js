import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './MenuNat.module.css';

class MenuNat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    const rotateIcon = this.state.showMenu ? 'rotateIcon' : '';

    return (
      <div>
        <label className={styles.label} onClick={this.handleClick}>
          <span className={classnames(
            styles.icon,
            styles[rotateIcon]
          )}
          >&nbsp;</span>
        </label>
        <Menu showMenu={this.state.showMenu} />
        <Nav showMenu={this.state.showMenu} />
      </div>
    )
  }
}

const Menu = ({ showMenu }) => {
  const classes = classnames(
    styles.menu,
    styles[showMenu ? 'showMenu' : '']
  )
  return (
    <div className={classes}></div>
  )
}

const Nav = ({ showMenu }) => {
  const classes = classnames(
    styles.nav,
    styles[showMenu ? 'showNav' : '']
  )
  return (
    <nav className={classes}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#about" className={styles.link}>
            <span>01</span> About</a>
        </li>
        <li className={styles.item}>
          <a href="#contacs" className={styles.link}>
            <span>02</span> Contacts</a>
        </li>
        <li className={styles.item}>
          <a href="#followme" className={styles.link}>
            <span>03</span> Follow me</a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuNat;
