import './ContactUs.css';
import React from 'react';

const ContactUs = () => {
  return (
    <section className="ContactUs">
      <div className="container">
        <h4 className="text-info">CONTACT US</h4>
        <h1 className="py-4 text-white">Alwasy Connect With Us</h1>

        <div className="px-5">
          <div class="form-group">
            <input type="email" class="form-control py-4" id="exampleInputEmail1" placeholder="Email Address *" />
          </div>
          <div class="form-group">
            <input type="email" class="form-control py-4" id="exampleInputEmail1" placeholder="Subject *" />
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message *" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button className="btn btn-info px-5">Submit</button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;