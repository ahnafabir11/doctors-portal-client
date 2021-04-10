import './Footer.css';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="Footer my-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 text-center">
            <h5 className="text-info">.</h5>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extraction</p>
            <p>Check Up</p>
          </div>
          <div className="col-md-3 text-center">
            <h5 className="text-info">Services</h5>
            <p>Tooth Extraction</p>
            <p>Treatment of Personal Diseases</p>
            <p>Check Up</p>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Emergency Dental Care</p>
          </div>
          <div className="col-md-3 text-center">
            <h5 className="text-info">Oral Health</h5>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extraction</p>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Emergency Dental Care</p>
          </div>
          <div className="col-md-3 text-center">
            <h5 className="text-info">Our Address</h5>
            <p>New York - 101010 Hudson</p>
            <p>Yards</p>
            <div className="mb-5">
              <FaFacebook style={{fontSize:'40px', marginRight: '10px'}} className="text-info"/>
              <AiFillGooglePlusCircle style={{ fontSize: '45px', marginRight: '10px' }} className="text-info"/>
              <AiFillTwitterCircle style={{ fontSize: '45px', marginRight: '10px' }} className="text-info"/>
            </div>
            <p>Call Now</p>
            <button className="btn btn-info">+2025550295</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;