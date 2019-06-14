import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import IE from '../components/IE';

const ie = () => {
  return (
    <Layout>
      <Head title="Browser Not Supported" />
      <IE />
    </Layout>
  );
};

export default ie;
