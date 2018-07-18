import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

//modules
import styles from "./ButtonGwd.module.css";

export const ButtonTheme = {
  BLUE: "blue",
  ORANGE: "orange"
};
export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium"
};

export const ButtonGwd = ({ color, size, label, children }) => {
  const classes = classnames(
    styles.button,
    styles[color],
    styles[size]);

  const text = label || children;
  return (
    <a href="#contacts" className={classes}>
      {text}
    </a>
  );
};

ButtonGwd.propTypes = {
  theme: PropTypes.oneOf(Object.keys(ButtonTheme)),
  size: PropTypes.oneOf(Object.keys(ButtonSize))
};

ButtonGwd.defaultProps = {
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.SMALL
};

export default ButtonGwd;
