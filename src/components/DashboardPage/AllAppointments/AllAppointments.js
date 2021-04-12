import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/appointments`)
      .then(res => res.json())
      .then(data => {
        setAppointments(data);
      })
  }, [appointments])

  return (
    <div className="col-md-9 offset-md-1">
      <h3 className="text-info pb-5">All Appointments Details</h3>
      <div className="table-responsive">
        <table style={{ minWidth: '1000px' }} className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Appointment Date</th>
              <th>Appointment Created</th>
            </tr>
          </thead>
          <tbody>
            {
              appointments.map((appointment, idx) =>
                <tr key={idx}>
                  <td>{appointment.username}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.created}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllAppointments;