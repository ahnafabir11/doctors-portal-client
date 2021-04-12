import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllPatients = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/appointments`)
    .then(res=>res.json())
    .then(data => {
      setPatients(data);
    })
  }, [patients])

  return (
    <div className="col-md-9 offset-md-1">
      <h3 className="text-info pb-5">All Patients Details</h3>
      <div className="table-responsive">
        <table style={{minWidth: '1000px'}} className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Weight</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              patients.map((patient, idx)=>
                <tr key={idx}>
                  <td>{patient.username}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.weight} KG</td>
                  <td>{patient.phone}</td>
                  <td>{patient.email}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllPatients;