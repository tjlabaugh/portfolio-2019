import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = props => {
  return (
    <div>
      <Nav location={props.location} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
