import './Home.css';
import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import DentalCare from '../DentalCare/DentalCare';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Header/>
      <Services/>
      <DentalCare/>
      <Appointment/>
      <Testimonial/>
      <Blogs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home;