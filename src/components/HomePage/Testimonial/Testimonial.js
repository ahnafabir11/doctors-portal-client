import './Testimonial.css';
import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import review1 from '../../../images/review1.png';
import review2 from '../../../images/review2.png';
import review3 from '../../../images/review3.png';


const reviews = [
  {
    name: 'Winson Herry',
    location: 'California',
    img: review1
  },
  {
    name: 'Winson Herry',
    location: 'California',
    img: review2
  },
  {
    name: 'Winson Herry',
    location: 'California',
    img: review3
  },
]

const Testimonial = () => {
  return (
    <div className="container-fluid">
      <p className="text-info font-weight-bold">TESTIMONIAL</p>
      <h1 className="display-4">What's Our Patients <br/> Say?</h1>
      <div className="row">
        {
          reviews.map((review, idx) => <ReviewCard key={idx} review={review} />)
        }
      </div>
    </div>
  )
}

export default Testimonial;