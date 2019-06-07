import React from 'react';
import contactStyle from './contact.module.scss';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  const handleSubmission = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: 'Thomas J',
        email: 'test@test.com',
        message: 'Hello, this is a test',
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <div className={contactStyle.contact} id="contact">
      <h2>Contact Me</h2>
      <form
        className={contactStyle.form}
        name="contact"
        method="POST"
        netlify-honeypot="do-not-fill-out"
        data-netlify="true"
        onSubmit={handleSubmission}
      >
        <input type="hidden" name="form-name" value="contact" />
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
        <div className={contactStyle.form__honey}>
          <label>
            Don’t fill this out if you're human:{' '}
            <input name="do-not-fill-out" />
          </label>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
