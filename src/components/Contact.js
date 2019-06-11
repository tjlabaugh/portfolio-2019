import React from 'react';
import contactStyle from './contact.module.scss';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  const handleSubmission = e => {
    const form = e.target;
    const field = e.target.elements;
    const formValues = {
      name: field.name.value,
      email: field.email.value,
      message: field.message.value,
    };
    let valid = true;

    console.log({ 'form-name': 'contact', ...formValues });

    if (
      formValues.name === '' ||
      formValues.email === '' ||
      formValues.message === ''
    ) {
      valid = false;
    }

    console.log(form);

    if (valid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formValues,
        }),
      })
        .then(() => console.log('success'))
        .catch(error => console.log(error));

      form.dangerouslySetInnerHTML = `<h1>Form submitted</h1>`;
    }

    e.preventDefault();
  };

  return (
    <div className={contactStyle.contact} id="contact">
      <h2>Contact Me</h2>
      <form
        className={`${contactStyle.form} contact-form`}
        name="contact"
        method="POST"
        netlify-honeypot="do-not-fill-out"
        data-netlify="true"
        onSubmit={handleSubmission}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={contactStyle.form__fields}>
          <label htmlFor="">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className={contactStyle.form__fields}>
          <label htmlFor="">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            required
          />
        </div>
        <div className={contactStyle.form__textareaFields}>
          <label htmlFor="">Message*</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Say hi!"
            required
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
