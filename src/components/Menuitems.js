import React, { useState, useEffect } from 'react';
import './MenuItems.css';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const Menuitems = ({ title, list }) => {
  const navigate = useNavigate();
  const onCreateClicked = () => {
    setActiveMenu('Create');
    console.log('create clicked');
    navigate('/create');
  };
  const onCardsClicked = () => {
    setActiveMenu('Cards');
    navigate('/');
    console.log('Cards clicked');
  };
  useEffect(() => {
    navigate('/');
  }, []);
  const [activeMenu, setActiveMenu] = useState('Cards');
  return (
    <>
      <MenuList
        dense
        sx={{
          '& .MuiMenu-list': {
            height: '200px',
          },
        }}
      >
        <div className={`menuitem menuitem__active`}>
          <img src="/images/ic_user.png" className="menuitems__icon" alt="" />
          <span className="menuitem__title">{title}</span>
          <img
            src="/images/ic_chevron_down.svg"
            alt="jhg"
            className="menuitems__icon"
          />
        </div>
        <MenuItem onClick={onCreateClicked}>
          <img
            className={`menuitem__dot ${
              activeMenu === 'Create' ? 'menuitem__dot__active' : ''
            }`}
            src="/images/Oval.svg"
            alt=""
          />
          <span
            className={`menuitem_listItem__title ${
              activeMenu === 'Create' ? 'menuitem__listitem__active' : ''
            }`}
          >
            Create
          </span>
        </MenuItem>

        <MenuItem onClick={onCardsClicked}>
          <img
            className={`menuitem__dot ${
              activeMenu === 'Cards' ? 'menuitem__dot__active' : ''
            }`}
            src="/images/Oval.svg"
            alt=""
          />
          <span
            className={`menuitem_listItem__title ${
              activeMenu === 'Cards' ? 'menuitem__listitem__active' : ''
            }`}
          >
            Cards
          </span>
        </MenuItem>

        <MenuItem>
          <img className="menuitem__dot" src="/images/Oval.png" alt="" />
          <span className="menuitem_listItem__title ">List</span>
        </MenuItem>
        <MenuItem>
          <img className="menuitem__dot" src="/images/Oval.png" alt="" />
          <span className="menuitem_listItem__title ">Account</span>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default Menuitems;
