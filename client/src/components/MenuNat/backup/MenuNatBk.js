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
    const showMenu = this.state.showMenu ? 'showMenu' : '';
    const rotateIcon = this.state.showMenu ? 'rotateIcon' : '';
    const showNav = this.state.showMenu ? 'showNav' : '';

    return (
      <div>
        <label className={styles.label} onClick={this.handleClick}>
          <span className={classnames(
            styles.icon,
            styles[rotateIcon]
          )}
          >&nbsp;</span>
        </label>
        <Menu className={showMenu} />
        <nav className={classnames(
          styles.nav,
          styles[showNav]
        )}>
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

      </div>

    )
  }
}

const Menu = ({ className, children }) => {
  const classes = classnames(
    styles.menu,
    styles[className]
  )
  return (
    <div className={classes}>

    </div>
  )
}

export default MenuNat;
