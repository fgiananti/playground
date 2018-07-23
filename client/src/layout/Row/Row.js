import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

//modules
import styles from "./Row.module.css";

export const Theme = {
  DEFAULT: "default",
  TESTIMONIAL: "testimonial",
  MAINBLUE: "mainBlue"
};
// export const ButtonSize = {
//   SMALL: "small",
//   MEDIUM: "medium"
// };

export const Row = ({ theme, children, type }) => {
  const classes = classnames(styles.row, styles[theme]);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Row.propTypes = {
  theme: PropTypes.oneOf(Object.keys(Theme)),
};

Row.defaultProps = {
  theme: Theme.DEFAULT,
};

export default Row;
