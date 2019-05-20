import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Portfolio />
    </Layout>
  );
};

export default IndexPage;
