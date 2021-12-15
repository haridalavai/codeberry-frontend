import React from 'react';
import { IconButton } from '@mui/material';
import './Header.css';
// import { borderRadius } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const style = {};

  return (
    <>
      <div className="hamburger">
        <IconButton className="hamburger__button">
          <MenuIcon />
        </IconButton>
      </div>
      <div className="header">
        <div className="header__search">
          <IconButton>
            <img src="/images/search.svg" alt="" className="search" />
          </IconButton>
        </div>
        <div className="header__right">
          <IconButton>
            <img
              src="/images/ic_flag_en.svg"
              alt=""
              className=" header__rightIcon"
            />
          </IconButton>
          <IconButton sx={{ borderRadius: '100%' }}>
            <img src="/images/dk.svg" alt="" className="header__rightIcon" />
          </IconButton>
          <IconButton>
            <img
              src="/images/iconBase.svg"
              alt=""
              className="header__rightIcon"
            />
          </IconButton>
          <IconButton>
            <img
              src="/images/userimg.png"
              className="avatar"
              alt="header__rightIcon"
            />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
