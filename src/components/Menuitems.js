import React from 'react';
import './MenuItems.css';
const Menuitems = ({ title, list }) => {
  return (
    <>
      <div className="menuitem menuitem__active">
        <img src="/images/ic_user.png" className="menuitems__icon" alt="" />
        <span className="menuitem__title">{title}</span>
        <img
          src="/images/ic_chevron_down.svg"
          alt="jhg"
          className="menuitems__icon"
        />
      </div>
      <div className="menuitem__list">
        <div className="menuitem_listItem menuitem_listItem__active">
          <img className="menuitem__dot" src="/images/Oval.png" alt="" />
          <span className="menuitem_listItem__title ">Create</span>
        </div>
        <div className="menuitem_listItem menuitem__listitem__active">
          <img
            className="menuitem__dot menuitem__dot__active"
            src="/images/Oval.svg"
            alt=""
          />
          <span className="menuitem_listItem__title menuitem__listitem__active">
            Cards
          </span>
        </div>
        <div className="menuitem_listItem">
          <img className="menuitem__dot" src="/images/Oval.png" alt="" />
          <span className="menuitem_listItem__title">List</span>
        </div>
        <div className="menuitem_listItem">
          <img className="menuitem__dot" src="/images/Oval.png" alt="" />
          <span className="menuitem_listItem__title">Account</span>
        </div>
      </div>
    </>
  );
};

export default Menuitems;
