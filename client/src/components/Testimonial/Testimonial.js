import React from "react";
import classnames from "classnames";
// import PropTypes from "prop-types";

//modules
import styles from "./Testimonial.module.css";
import jane from './assets/testimonial-jane.jpg';
//
// export const TestimonialTheme = {
//   BLUE: "blue",
//   ORANGE: "orange"
// };
// export const TestimonialSize = {
//   SMALL: "small",
//   MEDIUM: "medium"
// };

export const Testimonial = ({title, subtitle, label, children}) => {
  const classes = classnames(styles.testimonial);

  const img = {
    imgUrl: jane,
    imgAlt: "img"
  };
  const text = label || children;
  return (
    <div className={classes}>
      <img src={img.imgUrl} alt={img.imgAlt} className={styles.img}/>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <p className={styles.text}>{text}</p>
    </div>

    // <a href="#contacts" className={classes}>
    //   {text}
    // </a>
  );
};

// Testimonial.propTypes = {
//   theme: PropTypes.oneOf(Object.keys(TestimonialTheme)),
//   size: PropTypes.oneOf(Object.keys(TestimonialSize))
// };
//
// Testimonial.defaultProps = {
//   theme: TestimonialTheme.DEFAULT,
//   size: TestimonialSize.SMALL
// };

export default Testimonial;
