import React from 'react';
import UserCard from './UserCard';
import './Users.css';
const Users = ({ users }) => {
  return (
    <div className="users__list">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default Users;
