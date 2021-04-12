import './Header.css';
import React from 'react';
import Navbar from '../../Shared/NavbarAll/NavbarAll';
import HeaderMain from '../HeaderMain/HeaderMain';
import BusinessInfo from './../BusinessInfo/BusinessInfo';

const Header = () => {
  return (
    <div className="Header">
      <Navbar/>
      <HeaderMain/>
      <BusinessInfo/>
    </div>
  )
}

export default Header;