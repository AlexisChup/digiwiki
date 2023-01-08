import React from "react";
import "./Auth.css";
import Login from "../login/Login";

export default function Auth() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
