import React, { useEffect, useState } from 'react';

const OurDoctors = () => {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    fetch(`https://gentle-sierra-66530.herokuapp.com/doctors`)
      .then(res => res.json())
      .then(data => {
        setDoctors(data)
      })
  }, [])

  return (
    <div className="container">
      <h3 className="text-info text-center py-5">Our Doctors</h3>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {
          doctors.map((doctor, idx) =>
            <div key={idx} className="card card-body m-3" style={{ width: '300px', textAlign: 'center' }}>
              <img src={`data:image/png;base64,${doctor.image.img}`} alt="" style={{ height: '300px' }} />
              <h4 className="pt-4 mb-0">{doctor.name}</h4>
              <p>{doctor.email}</p>
            </div>
          )

        }
      </div>
    </div>
  )
}

export default OurDoctors;