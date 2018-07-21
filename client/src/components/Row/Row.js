import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

//modules
import styles from "./Row.module.css";

// export const ButtonTheme = {
//   BLUE: "blue",
//   ORANGE: "orange"
// };
// export const ButtonSize = {
//   SMALL: "small",
//   MEDIUM: "medium"
// };

export const Row = ({ children, type }) => {
  const classes = classnames(styles.row, styles[type]);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

// Row.propTypes = {
//   theme: PropTypes.oneOf(Object.keys(ButtonTheme)),
//   size: PropTypes.oneOf(Object.keys(ButtonSize))
// };
//
// Row.defaultProps = {
//   theme: ButtonTheme.DEFAULT,
//   size: ButtonSize.SMALL
// };

export default Row;
