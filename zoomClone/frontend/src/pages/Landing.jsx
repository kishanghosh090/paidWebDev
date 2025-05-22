import React from "react";
import "../App.css";
import { Link } from "react-router-dom";  
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
        <button>
          <Link to={"/auth"}>Get Started</Link>
        </button>
      </div>
    </div>
  );
}

export default Landing;
