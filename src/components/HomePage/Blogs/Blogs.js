import './Blogs.css';
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import BlogCard from '../BlogCard/BlogCard';
import review1 from '../../../images/review1.png';
import review2 from '../../../images/review2.png';

const bloginfos = [
  {
    name: 'Dr. Caudi',
    date: '23 April 2019',
    title: '2 times of brush in a day can keep you healthy',
    description: 'It is a long established fact that by the readable content of a lot layout. The poing',
    img: review1
  },
  {
    name: 'Dr. Caudi',
    date: '23 April 2019',
    title: '2 times of brush in a day can keep you healthy',
    description: 'It is a long established fact that by the readable content of a lot layout. The poing',
    img: review2
  },
]

const Blogs = () => {
  return (
    <section className="container-fluid my-5">
      <div className="text-center">
        <h5 className="text-info py-3">Our Blogs</h5>
        <h1>From Our Blog News</h1>
      </div>
      <div className="row my-5">
        <div className="col-lg-4 mb-3">
          <div className="card card-body bg-info" style={{height: '100%'}}>
            <div className="d-flex flex-column" style={{ height: '100%', justifyContent: 'space-between'}}>
              <div>
                <p className="text-white mb-0">Rashed Kabir</p>
                <small className="text-white mb-5 d-block">22 Aug 2018</small>
                <p className="text-white">Check at least a doctor in a year for your teeth</p>
              </div>
              <BsArrowRight style={{fontSize: '50px', color: 'white'}}/>
            </div>
          </div>
        </div>
        {
          bloginfos.map((bloginfo, idx) => <BlogCard key={idx} bloginfo={bloginfo} />)
        }
      </div>
    </section>
  )
}

export default Blogs;