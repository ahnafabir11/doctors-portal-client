import './ServiceCard.css';
import React from 'react';

const ServiceCard = ({service}) => {
  return (
    <section className="col-md-4 text-center py-5">
      <img style={{width:'50px'}} src={service.img} alt=""/>
      <h5 className="py-3">{service.title}</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore.</p>
    </section>
  )
}

export default ServiceCard;