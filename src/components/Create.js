import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Create.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageUpload from './ImageUpload';
import './ImageUpload.css';
// Specify camera icon to replace button text
import edit from './edit.svg'; // replace it with your path

// Specify your default image
import defaultUser from './profileImg.png';
let imgFile = null;
const Create = () => {
  const navigate = useNavigate();

  const userId = uuidv4();
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const inputFile = useRef(null);
  const [following, setFollowing] = useState('');

  const [followers, setFollowers] = useState('');

  const [posts, setPosts] = useState('');

  const [profileUrl, setrofileUrl] = useState('');

  const onCreateClick = async () => {
    const createDoc = {
      userId,
      name,
      designation,
      following,
      followers,
      posts,
    };

    console.log(imgFile);
    const response = await axios.post(
      'https://pure-coast-84901.herokuapp.com/user',
      createDoc,
    );
    console.log(response);
    navigate('/');
  };

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    console.log(file);
    this.setState({ file }); /// if you want to upload latter
  };

  return (
    <div className="create">
      <MainProfileForm />

      <Box
        component="form"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '100%',
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-around',
            flexDirection: 'row',
          },
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
        <Button variant="contained" onClick={onCreateClick}>
          Create User
        </Button>
      </Box>
    </div>
  );
};

export default Create;

// replace it with your path

// Profile upload helper

const HandleImageUpload = () => {
  // we are referencing the file input
  const imageRef = useRef();

  // Specify the default image
  const [defaultUserImage, setDefaultUserImage] = useState(defaultUser);
  const [selectedFile, setSelectedFile] = useState(null);
  imgFile = selectedFile;

  // On each file selection update the default image

  // On click on camera icon open the dialog
  const showOpenFileDialog = () => {
    imageRef.current.click();
  };

  console.log(selectedFile);

  // On each change let user have access to a selected file
  const handleChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Clean up the selection to avoid memory leak
  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);

  return {
    imageRef,
    defaultUserImage,
    showOpenFileDialog,
    handleChange,
  };
};

// Image component
export const ItemImage = (props) => {
  const { itemImage, itemImageAlt } = props;
  return (
    <>
      <img src={itemImage} alt={itemImageAlt} className="item-image" />
    </>
  );
};

// Button with icon component
export const CommonClickButtonIcon = (props) => {
  const { onHandleSubmitForm, iconImageValue, altImg } = props;
  return (
    <div className="common-button">
      <button
        type="button"
        onClick={onHandleSubmitForm}
        className="button-image"
      >
        <img src={iconImageValue} alt={altImg} className="image-button-img" />
      </button>
    </div>
  );
};

export const MainProfileForm = () => {
  const { defaultUserImage, handleChange, imageRef, showOpenFileDialog } =
    HandleImageUpload();

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-image">
        <ItemImage
          itemImage={defaultUserImage}
          itemImageAlt="user profile picture"
        />
        <CommonClickButtonIcon // Notice I omitted the text instead used icon
          onHandleSubmitForm={showOpenFileDialog}
          iconImageValue={edit}
          altImg="Upload image icon"
        />
        <input
          ref={imageRef}
          type="file"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
