import './Sidenav.css';
import Profile from './Profile';

import React from 'react';
import Menuitems from './Menuitems';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
const Sidenav = () => {
  return (
    <>
      <div className="sidenav">
        <div className="sidenav__profile">
          <Profile />
        </div>
        <div className="sidenav__navSection">
          <span className="sidenav__sectionTitle">GENERAL</span>
          <div className="menuitem">
            <img
              src="/images/ic_dashboard.svg"
              className="menuitems__icon"
              alt=""
            />
            <span className="menuitem__title">Dashboard</span>
            <img
              src="/images/ic_chevron_right.png"
              alt="jhg"
              className="menuitems__icon"
            />
          </div>
          <span className="sidenav__sectionTitle">MANAGEMENT</span>

          <Menuitems title={'Users'} list={'list'} />
        </div>
        <div className="sidenav__hamburger"></div>
      </div>
    </>
  );
};

export default Sidenav;
