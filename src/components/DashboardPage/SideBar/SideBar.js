import './SideBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { BiClipboard } from "react-icons/bi";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="px-3">
      <div className="d-flex flex-column">
        <Link className="dashboard-link-text" to="/">
          <AiTwotoneHome/> Home
        </Link>
        <Link className="dashboard-link-text" to="/dashboard/patients">
          <BsPeopleFill/> Patients
        </Link>
        <Link className="dashboard-link-text" to="/dashboard">
          <MdDashboard/> DashBoard
        </Link>
        <Link className="dashboard-link-text" to="/dashboard/appointments">
          <BiClipboard/> Appointments
        </Link>
        <Link className="dashboard-link-text" to="/dashboard/addDoctor">
          <HiOutlineViewGridAdd /> Add Doctor
        </Link>
      </div>      
    </div>
  )
}

export default SideBar;