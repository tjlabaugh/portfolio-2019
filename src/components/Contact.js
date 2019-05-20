import React from 'react';
import contactStyle from './contact.module.scss';

const Contact = () => {
  return (
    <div className={contactStyle.contact}>
      <h2>Contact Me</h2>
      <form className={contactStyle.form} action="">
        <div className={contactStyle.form__fields}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div className={contactStyle.form__fields}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
          />
        </div>
        <div className={contactStyle.form__textareaFields}>
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Say hi!"
          />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
