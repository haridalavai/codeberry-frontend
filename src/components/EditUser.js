import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './EditUser.css';
import { useNavigate } from 'react-router';
const EditUser = ({ user }) => {
  const userId = user.userId;
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');

  const [following, setFollowing] = useState('');

  const [followers, setFollowers] = useState('');

  const [posts, setPosts] = useState('');
  const navigate = useNavigate();
  const onUpdateClick = async () => {
    const updateDoc = {
      userId,
      name,
      designation,
      followers,
      following,
      posts,
    };

    console.log(updateDoc);
    const result = await axios.post(
      'https://pure-coast-84901.herokuapp.com/update-user',
      updateDoc,
    );
    console.log(result);
  };

  const onDeleteClick = async () => {
    const response = await axios.post(
      'https://pure-coast-84901.herokuapp.com/delete-user',
      {
        userId,
      },
    );
    console.log(response);
    navigate('/');
  };

  return (
    <div className="editUser">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Designation"
          variant="outlined"
          onChange={(e) => {
            setDesignation(e.target.value);
            console.log(name);
          }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Following"
          variant="outlined"
          onChange={(e) => {
            setFollowing(e.target.value);
            console.log(name);
          }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Followers"
          variant="outlined"
          onChange={(e) => {
            setFollowers(e.target.value);
            console.log(name);
          }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Posts"
          variant="outlined"
          onChange={(e) => {
            setPosts(e.target.value);
            console.log(name);
          }}
        />
        <Button variant="contained" onClick={onUpdateClick}>
          Update
        </Button>
        <Button variant="outlined" color="error" onClick={onDeleteClick}>
          Delete User
        </Button>
      </Box>
    </div>
  );
};

export default EditUser;
