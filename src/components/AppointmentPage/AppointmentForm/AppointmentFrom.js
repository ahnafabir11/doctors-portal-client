import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px'
  }
};

Modal.setAppElement('#root');

const AppointmentFrom = ({ modalIsOpen, closeModal, appointmentOn, date}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.service = appointmentOn;
    data.date = date.toDateString();
    data.created = new Date().toDateString();

    fetch(`http://localhost:5000/addAppointment`, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        closeModal();
        alert("Appointment Created Successfully!")
      }
    })
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      > 
        <h4 className="text-info text-center pt-4">{appointmentOn}</h4>
        <p className="text-center text-secondary"><small>On {date.toDateString()}</small></p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input  className="form-control" placeholder="Your Name" {...register("username", { required: true })} />
          </div>
          {errors.username && <p>This field is required</p>}
          <div className="form-group">
            <input className="form-control" placeholder="Your Phone Number" {...register("phone", { required: true })} />
          </div>
          {errors.phone && <p>This field is required</p>}
          <div className="form-group">
            <input className="form-control" placeholder="Your Email" {...register("email", { required: true })} />
          </div>
          {errors.email && <p>This field is required</p>}
            <div className="form-group">
              <select className="form-control" aria-label="Default select example" {...register("gender", { required: true })}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {errors.gender && <p>This field is required</p>}
            <div className="form-group">
              <input type="number" className="form-control" placeholder="Your Age" {...register("age", { required: true })} />
            </div>
            {errors.age && <p>This field is required</p>}
            <div className="form-group">
              <input type="number" className="form-control" placeholder="Your Weight" {...register("weight", { required: true })} />
            </div>
            {errors.weight && <p>This field is required</p>}

          <input className="btn btn-info" type="submit" />
        </form>
      </Modal>
    </div>
  )
}

export default AppointmentFrom;