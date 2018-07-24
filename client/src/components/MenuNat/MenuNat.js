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
    const menuLinks = this.props.links;
    return (
      <div>
        <label className={styles.label} onClick={this.handleClick}>
          <Icon toggleMenu={this.state.toggleMenu} />
        </label>
        <Background toggleMenu={this.state.toggleMenu} />
        <Menu
          toggleMenu={this.state.toggleMenu}
          links={menuLinks}
          />
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

const Background = ({ toggleMenu }) => {
  const classes = classnames(
    styles.background,
    styles[toggleMenu ? 'showBackground' : '']
  )
  return (
    <div className={classes}></div>
  )
}

const Menu = ({ toggleMenu, links }) => {
  const classes = classnames(
    styles.menu,
    styles[toggleMenu ? 'showMenu' : '']
  )

  const linksMarkup = links.map((link, index) => {
    return (
      <li key={index} className={styles.item}>
        <a href={link.link} className={styles.link}>
          <span>0{index + 1}</span> {link.label}</a>
      </li>
    )
  })
  return (
    <nav className={classes}>
      <ul className={styles.list}>
        {linksMarkup}
      </ul>
    </nav>
  )
}

export default MenuNat;
