import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = (e)=> {
    const newImgUrl = e.target.files[0];
    setFile(newImgUrl);
  }

  const onSubmit = (data)=> {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', data.name);
    formData.append('email', data.email);
    
    fetch(`http://localhost:5000/addADoctor`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="col-md-9 offset-md-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Doctor's Name</label>
          <input className="form-control" {...register("name", { required: true })} />
          {errors.name && <span className="text-danger">Doctor's Name Required</span>}
        </div>
        <div className="form-group">
          <label>Doctor's Email</label>
          <input type="email" className="form-control" {...register("email", { required: true })} />
          {errors.email && <span className="text-danger">Doctor's Email Required</span>}
        </div>
        <div className="form-group">
          <label>Doctor's Image</label>
          <input type="file" className="form-control-file" {...register("image", { required: true })} onChange={handleFileChange} />
          {errors.image && <span className="text-danger">Doctor's Image Required</span>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddDoctor;