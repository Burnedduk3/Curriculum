import React from 'react';
import ProfileImage from './../../Images/profile-image.png';
import './styles.scss';
import textConstants from './textConstants';

const Header = () => (
  <div className="header-container">
    <img src={ProfileImage} alt="Juan David Cabrera Duran" className="image"/>
    <div className="main-title">
      <h1>{textConstants.name}</h1>
    </div>
  </div>
);

export default Header;
