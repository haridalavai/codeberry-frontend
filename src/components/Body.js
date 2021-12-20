import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import axios from 'axios';
// import { users } from '../users';
import './Body.css';
import Users from './Users';

const Body = () => {
  const [users, setUsers] = useState();
  useEffect(async () => {
    const users = await axios.get(
      'https://pure-coast-84901.herokuapp.com/users',
    );
    setUsers(users.data.users);
    console.log(users.data.users);
  }, []);
  return (
    <div className="users">
      <span className="users__userCards">User Cards</span>
      <span className="users__userDashboard">Dashboard</span>

      <div className="users__usersGrid">
        <Users users={users} />
      </div>
    </div>
  );
};

export default Body;
