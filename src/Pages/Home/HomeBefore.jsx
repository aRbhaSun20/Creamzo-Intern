import React, { useState } from 'react';

import ImageContainer from '../../Components/ImageContainer_beforeLogin/ImageContainer';
import { Button } from '@material-ui/core';
import './style/style.css';
import img from '../../Components/About/assets/img/art.jpg';
import img1 from '../../Components/About/assets/img/diy.jpg';
import img2 from '../../Components/About/assets/img/dog.jpg';
import img3 from '../../Components/About/assets/img/quotes.jpg';

import './style/slideshow.css';

const HomeBefore = () => {
  return (
    <div className="container1">
      <div id="slide_bg"></div>
      <div className="contentAbove">
        <p className="tagLine">
          LIFE HAS NO COLOR WITHOUT YOUR{' '}
          <span style={{ fontWeight: 'bold' }}>IMAGINATION</span> <br />
          IMAGINE <span style={{ fontWeight: 'bold' }}>LIFE </span> !
        </p>
      </div>
    </div>
  );
};

export default HomeBefore;
