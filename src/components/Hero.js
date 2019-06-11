import React from 'react';
import heroStyle from './hero.module.scss';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Hero = () => (
  <StaticQuery
    query={graphql`
      query images {
        herobg: file(relativePath: { regex: "/hero/" }) {
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
        fluid={data.herobg.childImageSharp.fluid}
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
              <span>{`{ `}</span>
              {`web developer`}
              <span>{` }`}</span>
            </h3>
          </div>
          <div>
            <a
              className={heroStyle.social}
              href="https://www.linkedin.com/in/thomas-labaugh-5b70752b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              className={heroStyle.social}
              href="https://github.com/tjlabaugh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" />
            </a>
          </div>
        </div>
      </BackgroundImage>
    )}
  />
);

export default Hero;
