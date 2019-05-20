import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
