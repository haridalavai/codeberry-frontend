import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import './Header.css';
import SidenavCollapsable from './Sidenav-collapsable';
// import { borderRadius } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';

const Header = () => {
  const style = {};
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="sidenav__collapsable">
        <SidenavCollapsable active={open} />
        <IconButton
          sx={{
            width: '30px',
            margin: '1rem',
            padding: '1rem',
            visibility: `${open ? 'visible' : 'hidden'}`,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </div>

      <div className="hamburger">
        <IconButton className="hamburger__button" onClick={handleOpen}>
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
