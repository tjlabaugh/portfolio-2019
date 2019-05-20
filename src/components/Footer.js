import React from 'react';
import moment from 'moment';
import footerStyle from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <p>&copy; {moment().format('YYYY')} TJ LaBaugh</p>
    </footer>
  );
};

export default Footer;
