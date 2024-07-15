import React, { useState } from "react";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";
import dummyUsers from "../utils/dummyUsers";
import "../styles/UserApp.css";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTab, setSelectedTab] = useState("profile");

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="user-app">
      <div className="user-list-container">
        <UserList users={dummyUsers} onUserClick={handleUserClick} />
      </div>
      <div className="user-details-container">
        {selectedUser && (
          <UserDetails
            user={selectedUser}
            selectedTab={selectedTab}
            onTabClick={handleTabClick}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
