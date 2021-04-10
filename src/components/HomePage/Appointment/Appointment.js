import './Appointment.css';
import React from 'react';
import doctorImg from '../../../images/doctor-image.png';

const Appointment = () => {
  return (
    <div className="Appointment">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 res-none">
            <img src={doctorImg} alt="" className="appoinment-img"/>
          </div>
          <div className="col-lg-7">
            <p className="pt-4 font-weight-bold text-info">APPOINTMENT</p>
            <h1 className="text-white">Make An Appointment <br/> Today</h1>
            <p className="py-4 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laborum amet quae eius adipisci, perspiciatis accusamus a ipsa facere consequatur.</p>
            <button className="btn btn-info">Learn More</button>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Appointment;