import React from 'react';

const BlogCard = ({bloginfo}) => {
  return (
    <div className="col-lg-4 mb-3">
      <div className="card card-body">
        <div className="d-flex pb-4">
          <img src={bloginfo.img} alt="" style={{width: '60px'}} />
          <div className="mx-4">
            <h4>{bloginfo.name}</h4>
            <small>{bloginfo.date}</small>
          </div>
        </div>
        <p>{bloginfo.title}</p>
        <p className="pt-4">{bloginfo.description}</p>
      </div>
    </div>
  )
}

export default BlogCard;