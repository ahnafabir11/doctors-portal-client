import './HeaderMain.css';
import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
  return (
    <main>
      <div style={{ height: '550px' }} className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-md-5 px-md-5 mb-3">
            <h1 style={{ color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eligendi magnam totam quisquam voluptatem provident.</p>
            <button className="btn btn-info">GET APPOINTMNET</button>
          </div>
          <div className="offset-md-1 col-md-6 px-md-5 mb-3">
            <img src={chair} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeaderMain;