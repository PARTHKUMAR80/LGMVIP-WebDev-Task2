import React from "react";

export default function Card({user}) {
  return (
    <div className="card-data">
      <div className="card-data-image">
        <img src={user.avatar} alt="Image" />
      </div>
      <div className="card-data-name">
        <span>{user.first_name}</span><span>{user.last_name}</span>
      </div>
      <div className="card-data-email">
        {user.email}
      </div>
    </div>
  );
}
