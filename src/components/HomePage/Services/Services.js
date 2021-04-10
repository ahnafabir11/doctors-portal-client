import './Services.css';
import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavityFilling from '../../../images/cavity-filling.png';
import teathWhitining from '../../../images/teath-whitining.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceInfo = [
  {
    title: 'Fluoride Treatment',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, unde.',
    img: fluoride
  },
  {
    title: 'Cavity Filling',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, unde.',
    img: cavityFilling
  },
  {
    title: 'Teath Whitening',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, unde.',
    img: teathWhitining
  },
]

const Services = () => {
  return (
    <section className="Services">
      <div className="my-5 text-center">
        <h4 style={{ color: '#1CC7C1', padding: '2rem 0px'}}>Our Services</h4>
        <h2>Services We Provide</h2>
      </div>
      <div className="row w-75 mx-auto">
        {serviceInfo.map((service, idx)=> <ServiceCard key={idx} service={service}/>)}
      </div>
    </section>
  )
}

export default Services;