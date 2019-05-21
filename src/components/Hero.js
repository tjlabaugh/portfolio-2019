import React from 'react';
import heroStyle from './hero.module.scss';
import heroBackground from '../images/hero-bg.jpg';

const Hero = () => {
  return (
    <div
      style={{
        background: `url(${heroBackground}) 50% 50% no-repeat fixed`,
      }}
      className={heroStyle.hero}
    >
      <div className={heroStyle.content}>
        <div>
          <h1>TJ LaBaugh</h1>
          <h3>
            <span>{`< `}</span>
            {`web developer`}
            <span>{` >`}</span>
          </h3>
        </div>
        <div>
          <p>Check me out on LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
