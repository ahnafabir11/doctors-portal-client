import React, { useState } from 'react';
import AppointmentFrom from '../AppointmentForm/AppointmentFrom';

const BookingCard = ({booking, date}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-3">
      <div className="card card-body text-center">
        <h5 className="text-info">{booking.subject}</h5>
        <h6>{booking.visitingHour}</h6>
        <small className="pb-3">{booking.totalSpace} SPACES AVAILABLE</small>
        <button onClick={openModal} className="btn btn-info">BOOK APPOINTMNET</button>
        <AppointmentFrom modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date} />
      </div>
    </div>
  )
}

export default BookingCard;