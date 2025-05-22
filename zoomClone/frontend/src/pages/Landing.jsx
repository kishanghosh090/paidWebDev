import React from "react";
import "../App.css";
function Landing() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Chai Video Call</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <button>Login</button>
        </div>
      </nav>
      <div className="landingPageContent">
        <h1>
          Video <span>Conferencing</span>
        </h1>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Landing;
