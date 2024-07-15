import React from "react";
import "../styles/UserApp.css";

const UserList = ({ users, onUserClick }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.name} onClick={() => onUserClick(user)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
