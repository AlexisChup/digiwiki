import React from "react";
import "./Auth.css";
import Login from "../login/Login";
import Signup from "../signup/Signup";

export default function Auth() {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div>
          <h1>Connexion</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Login />
        </div>
        <div className="col">
          <Signup />
        </div>
      </div>
    </div>
  );
}
