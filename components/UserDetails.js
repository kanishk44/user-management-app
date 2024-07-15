import React from "react";
import "../styles/UserApp.css";

const UserDetails = ({ user, selectedTab, onTabClick }) => {
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <div className="tabs">
        <button
          className={selectedTab === "profile" ? "active" : ""}
          onClick={() => onTabClick("profile")}
        >
          Profile
        </button>
        <button
          className={selectedTab === "contact" ? "active" : ""}
          onClick={() => onTabClick("contact")}
        >
          Contact
        </button>
      </div>
      {selectedTab === "profile" && (
        <div className="profile-info">
          <p>DOB: {user.dob.toDateString()}</p>
          <p>Address: {user.address}</p>
        </div>
      )}
      {selectedTab === "contact" && (
        <div className="contact-info">
          <p>Mobile Number: {user.mobileNumber}</p>
          <p>Skype ID: {user.skypeId}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <div className="actions">
        <button>Edit Profile</button>
        <button>Delete User</button>
      </div>
    </div>
  );
};

export default UserDetails;
