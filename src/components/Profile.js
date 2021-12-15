import React from 'react';
import './Profile.css';
// import img from '../../public/images/img.svg';
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__image">
        <img src="/images/img.svg" alt="" />
      </div>
      <div className="profile__details">
        <span className="profile__detailsName">Carlota Monterio</span>
        <span className="profile__detailsRole">Admin</span>
      </div>
    </div>
  );
};

export default Profile;
