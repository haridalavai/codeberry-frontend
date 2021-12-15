import React from 'react';
import UserCard from './UserCard';
import { users } from '../users';
import './Body.css';
import Users from './Users';

const Body = () => {
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
