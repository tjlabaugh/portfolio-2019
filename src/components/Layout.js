import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

if (
  navigator.userAgent.indexOf('MSIE') !== -1 ||
  navigator.appVersion.indexOf('Trident/') > -1
) {
  window.location.href = '/ie';
}

const Layout = props => {
  // Detects IE <= 11 and sends to error page

  return (
    <div>
      <Nav location={props.location} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
