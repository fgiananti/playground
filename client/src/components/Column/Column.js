import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

//modules
import styles from "./Column.module.css";

// export const ButtonTheme = {
//   BLUE: "blue",
//   ORANGE: "orange"
// };
// export const ButtonSize = {
//   SMALL: "small",
//   MEDIUM: "medium"
// };

export const Column = ({ children, type }) => {
  const classes = classnames(styles.col, styles[type]);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

// Column.propTypes = {
//   theme: PropTypes.oneOf(Object.keys(ButtonTheme)),
//   size: PropTypes.oneOf(Object.keys(ButtonSize))
// };
//
// Column.defaultProps = {
//   theme: ButtonTheme.DEFAULT,
//   size: ButtonSize.SMALL
// };

export default Column;
