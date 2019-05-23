import React from 'react';
import heroStyle from './hero.module.scss';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Hero = () => (
  <StaticQuery
    query={graphql`
      query BackgroundSection {
        desktop: file(relativePath: { regex: "/hero/" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        className={heroStyle.hero}
        fluid={data.desktop.childImageSharp.fluid}
        Tag="section"
        style={{
          backgroundPosition: '50% 50%',
          backgroundAttachment: 'fixed',
        }}
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
      </BackgroundImage>
    )}
  />
);

export default Hero;
