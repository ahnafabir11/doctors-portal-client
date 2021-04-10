import React from 'react';

const ReviewCard = ({review}) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card card-body">
        <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo exercitationem blanditiis similique aspernatur. Veritatis suscipit debitis dolorem? Hic, nesciunt soluta!</p>
        <div className="d-flex align-items-center justify-content-center">
          <img src={review.img} alt="" style={{width: '60px'}} />
          <div className="px-4 pt-3">
            <h6 className="text-info">{review.name}</h6>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard;