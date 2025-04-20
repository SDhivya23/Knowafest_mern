import React from "react";

function Profile({ user }) {
  return (
    <div className="profile">
      <h2>Profile Page</h2>
      <div className="user-details">
        <p><strong>Name</strong> </p>
        <p><strong>Email</strong> </p>
        <p><strong>Mobile No</strong> </p>
        <p><strong>Year</strong> </p>
        <p><strong>Department</strong> </p>
        <p><strong>Roll No</strong> </p>
      </div>
      <style jsx>{`
        .profile {
          text-align: center;
        }
        .user-details {
          margin: 0 auto;
          max-width: 400px; 
          
        }
      `}</style>
    </div>
  );
}

export default Profile;