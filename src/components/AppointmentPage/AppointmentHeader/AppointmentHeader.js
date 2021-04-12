import './AppoinmentHeader.css';
import React from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    return (
      <main className="AppointmentHeader">
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-5 px-md-5 mb-3">
            <h1 style={{ color: '#3A4256' }} className="pb-4">Appointment</h1>
            <Calendar
              onChange={handleDateChange}
              value={new Date()}
            />
          </div>
          <div className="offset-lg-1 col-lg-6 px-md-5 mb-3">
            <img src={chair} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AppointmentHeader;