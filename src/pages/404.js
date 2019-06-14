import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Component404 from '../components/Component404';

const page404 = () => {
  return (
    <Layout>
      <Head title="404" />
      <Component404 />
    </Layout>
  );
};

export default page404;
