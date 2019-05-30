import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Projects from './Projects';
import portfolioStyle from './portfolio.module.scss';
import backgroundImage from '../images/body-bg.png';
import Img from 'gatsby-image';

const Portfolio = () => {
  const resolveClick = e => {
    e.preventDefault();
    document.querySelector(e.target.hash).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          tj: file(relativePath: { eq: "tj.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div
          style={{
            background: `url(${backgroundImage}) repeat`,
          }}
          className={portfolioStyle.portfolio}
        >
          <div className={portfolioStyle.about} id="about">
            <h2>About Me</h2>
            <p>
              Hello! My name is TJ. I am a web developer passionate about
              front-end development, working with{' '}
              <span className="js">JavaScript</span> and the{' '}
              <span className="react">React</span> library.
            </p>
            <Img
              fluid={data.tj.childImageSharp.fluid}
              className={portfolioStyle.myImage}
              alt="TJ"
            />
            <p>
              Check out some of my work below and feel free to reach out to me
              in the{' '}
              <Link to="#contact" onClick={resolveClick}>
                contact
              </Link>{' '}
              section below.
            </p>
          </div>
          <div className={portfolioStyle.container} id="portfolio">
            <h2>Portfolio</h2>
            <Projects />
          </div>
        </div>
      )}
    />
  );
};

export default Portfolio;
