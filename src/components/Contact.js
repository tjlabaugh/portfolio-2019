import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Say hi!"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
