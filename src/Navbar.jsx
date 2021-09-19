import React from "react";
export default function Navbar({ Logo1 , fetch_func , hideData ,decide }) {
  return (
    <nav>
      <div className="logo-title-container">
        <div className="logo">
          <img src={Logo1} alt="image" />
        </div>
        <div className="LGMVIP">Lets Grow More</div>
      </div>
      <div className="btn">
        <button onClick={decide}>{hideData===false ? "Remove" : "Get Users"}</button>
      </div>
    </nav>
  );
}
