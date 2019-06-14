import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = props => {
  // Detects IE <= 11 and sends to error page
  if (
    navigator.userAgent.indexOf('MSIE') !== -1 ||
    navigator.appVersion.indexOf('Trident/') > -1
  ) {
    window.location.href = '/ie';
    return;
  }

  return (
    <div>
      <Nav location={props.location} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
