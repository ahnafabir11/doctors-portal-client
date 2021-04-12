import './ContactUs.css';
import React from 'react';

const ContactUs = () => {
  return (
    <section className="ContactUs">
      <div className="container">
        <h4 className="text-info">CONTACT US</h4>
        <h1 className="py-4 text-white">Alwasy Connect With Us</h1>

        <div className="px-5">
          <div className="form-group">
            <input type="email" className="form-control py-4" placeholder="Email Address *" />
          </div>
          <div className="form-group">
            <input className="form-control py-4" placeholder="Subject *" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message *" className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button className="btn btn-info px-5">Submit</button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;