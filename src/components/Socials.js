import React from 'react';
import './Socials.css';
const Socials = () => {
  return (
    <div className="socials">
      <img src="/images/Path.svg" alt="" className="socials__icon" />
      <img
        style={{ width: '16.6px' }}
        src="/images/logo-instagram.svg"
        alt=""
        className="socials__icon"
      />
      <img src="/images/linkedin.svg" alt="" className="socials__icon" />
      <img src="/images/twitter.svg" alt="" className="socials__icon" />
    </div>
  );
};

export default Socials;
