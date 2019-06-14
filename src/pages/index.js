import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import '../styles/styles.scss';

const IndexPage = props => {
  return (
    <Layout location={props.location.pathname}>
      <Head title="Web Developer" />
      <Hero />
      <Portfolio images={props.data} />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
