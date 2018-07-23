import React from 'react';
import classnames from 'classnames';

//modules
import styles from './HeroGwd.module.css';

import heroSM from './assets/hero--smaller.jpg';
import heroSMH from './assets/hero--smaller-hi-dpi.jpg';
import heroS from './assets/hero--small.jpg';
import heroSH from './assets/hero--small-hi-dpi.jpg';
import heroM from './assets/hero--medium.jpg';
import heroMH from './assets/hero--medium-hi-dpi.jpg';
import heroL from './assets/hero--large.jpg';
import heroLH from './assets/hero--large-hi-dpi.jpg';


// ({buttonType, props})
export const HeroGwd = () => {
  const classes = classnames(styles.hero);

  const srcsetL = `${heroL} 1920w, ${heroLH} 3840w`;
  const srcsetM = `${heroM} 1380w, ${heroMH} 2760w`;
  const srcsetS = `${heroS} 990w, ${heroSH} 1980w`;
  const srcsetSM = `${heroSM} 640w, ${heroSMH} 1280w`;

  return (
    <picture>
      <source srcset={srcsetL} media="(min-width: 1380px)"/>
      <source srcset={srcsetM} media="(min-width: 990px)"/>
      <source srcset={srcsetS} media="(min-width: 640px)"/>
      <img srcset={srcsetSM} alt="" class="large-hero__image" />
    </picture>
  );
};

export default HeroGwd;
