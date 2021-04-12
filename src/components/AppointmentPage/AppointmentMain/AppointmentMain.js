import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavbarAll from '../../Shared/NavbarAll/NavbarAll';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from './../BookAppointment/BookAppointment';

const AppointmentMain = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <div>
      <NavbarAll/>
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment date={selectedDate} />
      <Footer/>
    </div>
  )
}

export default AppointmentMain;