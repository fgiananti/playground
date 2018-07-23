import React from "react";
import classnames from "classnames";
// import PropTypes from "prop-types";

//modules
import styles from "./Feature.module.css";
import rain from './rain.svg';
//
// export const FeatureTheme = {
//   BLUE: "blue",
//   ORANGE: "orange"
// };
// export const FeatureSize = {
//   SMALL: "small",
//   MEDIUM: "medium"
// };

export const Feature = ({title, label, children}) => {
  const classes = classnames(styles.feature);

  const img = {
    imgUrl: rain,
    imgAlt: "logo!!!"
  };
  const text = label || children;
  return (
    <div className={classes}>
      <img src={img.imgUrl} alt={img.imgAlt} className={styles.logo}/>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>

    // <a href="#contacts" className={classes}>
    //   {text}
    // </a>
  );
};

// Feature.propTypes = {
//   theme: PropTypes.oneOf(Object.keys(FeatureTheme)),
//   size: PropTypes.oneOf(Object.keys(FeatureSize))
// };
//
// Feature.defaultProps = {
//   theme: FeatureTheme.DEFAULT,
//   size: FeatureSize.SMALL
// };

export default Feature;
