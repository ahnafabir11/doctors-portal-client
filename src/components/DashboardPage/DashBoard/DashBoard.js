import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import SideBar from './../SideBar/SideBar';
import AppointmentByDate from './../AppointmentByDate/AppointmentByDate';
import PrivateRoute from '../../LoginPage/PrivateRoute/PrivateRoute';
import AllPatients from '../AllPatients/AllPatients';
import { Switch } from 'react-router-dom';
import AllAppointments from '../AllAppointments/AllAppointments';
import AddDoctor from '../AddDoctor/AddDoctor';


const containerStyle = {
  backgroundColor: '#F4FDFB',
  height: '100%',
}

const DashBoard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    console.log(email)
    fetch(`http://localhost:5000/appointmentsByDate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: selectedDate.toDateString(), email })
    })
      .then(res => res.json())
      .then(data => {
        setAppointments(data);
      })

  }, [selectedDate])
  

  return (
    <section style={containerStyle} className="py-5">
      <div className="container-fluid row ">
        <div className="col-md-2 mb-5">
        <SideBar/>
        </div>

        <Switch>
          <PrivateRoute exact path="/dashboard">
            <div className="col-md-5 mb-5">
              <Calendar
                onChange={handleDateChange}
                value={new Date()}
                className="mx-auto"
              />
            </div>
            <div className="col-md-5 mb-5">
              <AppointmentByDate appointments={appointments} />
            </div>
          </PrivateRoute>
          
          <PrivateRoute exact path="/dashboard/patients">
            <AllPatients/>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/appointments">
            <AllAppointments/>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/addDoctor">
            <AddDoctor />
          </PrivateRoute>
        </Switch>
      </div>
    </section>
  )
}

export default DashBoard;