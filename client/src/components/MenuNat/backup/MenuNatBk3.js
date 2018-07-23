import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './MenuNat.module.css';

class MenuNat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      toggleMenu: !prevState.toggleMenu
    }));
  }

  render() {
    return (
      <div>
        <label className={styles.label} onClick={this.handleClick}>
          <Icon toggleMenu={this.state.toggleMenu} />
        </label>
        <Menu toggleMenu={this.state.toggleMenu} />
        <Nav toggleMenu={this.state.toggleMenu} />
      </div>
    )
  }
}

const Icon = ({ toggleMenu }) => {
  const classes = classnames(
    styles.icon,
    styles[toggleMenu ? 'rotateIcon' : '']
  )
  return (
    <span className={classes}
    >&nbsp;</span>
  )
}

const Menu = ({ toggleMenu }) => {
  const classes = classnames(
    styles.menu,
    styles[toggleMenu ? 'showMenu' : '']
  )
  return (
    <div className={classes}></div>
  )
}

const Nav = ({ toggleMenu }) => {
  const classes = classnames(
    styles.nav,
    styles[toggleMenu ? 'showNav' : '']
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
