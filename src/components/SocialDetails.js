import React from 'react';
import './SocialDetails.css';
const SocialDetails = ({ title, number }) => {
  return (
    <div className="socialDetails">
      <span className="title">{title}</span>
      <span className="number">{number}</span>
    </div>
  );
};

export default SocialDetails;
