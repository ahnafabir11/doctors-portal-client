import './DentalCare.css';
import React from 'react';
import dentalCare from '../../../images/dentalCare.png';

const DentalCare = () => {
  return (
    <section className="w-75 mx-auto my-5">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <img src={dentalCare} alt="" className="w-100"/>
        </div>
        <div className="col-lg-7">
          <h1>Exceptional Dental</h1>
          <h1>Care, On Your Terms</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet distinctio libero harum corporis, unde ea. Mollitia, illum expedita quis tenetur earum obcaecati eaque provident perspiciatis fugit recusandae corporis ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum fugiat possimus atque alias tempora exercitationem provident aperiam consectetur laudantium suscipit velit doloremque vel inventore ipsum minima dolore, quas voluptate quidem libero iste cumque quod corrupti ducimus? Totam ipsa corrupti sit nulla, dolor aut nam? Numquam molestias consequatur aut distinctio.</p>
          <button className="btn btn-info">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default DentalCare;