import './UserCard.css';
import React from 'react';
import Socials from './Socials';
import SocialDetails from './SocialDetails';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

const UserCard = ({ user }) => {
  // const user = users.users[0];
  const onClick = () => {
    console.log('card clicked');
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="usercard" onClick={handleOpen}>
        <img
          src="/images/bgimg.png"
          alt=""
          className="usercard__backgroundImage"
        />
        <div className="usercard__profilePicture">
          <img
            className="usercard__profileImage"
            src="/images/userimg.png"
            alt=""
          />
          <img src="/images/layer.png" alt="" />
        </div>
        <div className="usercard__details">
          <span className="usercard__name">{user.name}</span>
          <span className="usercard__designation">{user.designation}</span>
          <div className="usercard__socials">
            <Socials />
          </div>
        </div>
        <hr
          style={{
            width: '100%',
            border: '1px solid rgba(145, 158, 171, 0.24)',
          }}
        />
        <div className="usercard__socialDetails">
          <SocialDetails title={'followers'} number={user.followers} />
          <SocialDetails title={'following'} number={user.following} />
          <SocialDetails title={'posts'} number={user.posts} />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton aria-label="delete" onClick={handleClose}>
            <CloseIcon />
          </IconButton>

          <h3>Edit User Page</h3>
        </Box>
      </Modal>
    </>
  );
};

export default UserCard;
