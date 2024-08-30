import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = { name, email, message };

    try {
      const response = await axios.post('http://localhost:5000/api/contact', contactData);
      alert(response.data.message);
      console.log('message received');
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      {/* <section className="mapbox" data-mapbox="">
        <figure>

        </figure>
      </section> */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form className="form" data-form="" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="form-btn"
            type="submit"
            data-form-btn=""
          >
            <ion-icon name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
