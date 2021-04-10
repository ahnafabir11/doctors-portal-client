import './BusinessInfo.css';
import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import InfoCard from './InfoCard';

const infosData = [
  {
    title: 'Opening Hours',
    description: 'We are open 7 days',
    icon: faClock,
    background: 'primary'
  },
  {
    title: 'Visit Our Location',
    description: 'Broiklyn, NY 10003 USA',
    icon: faMapMarker,
    background: 'dark'
  },
  {
    title: 'Call Us Now',
    description: '+15697854124',
    icon: faPhone,
    background: 'primary'
  },
]

const BusinessInfo = () => {
  return (
    <section className="container-fluid row w-75 mx-auto">
      {
        infosData.map((info, idx)=> <InfoCard info={info} />)
      }
    </section>
  )
}

export default BusinessInfo;