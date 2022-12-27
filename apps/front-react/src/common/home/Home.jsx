import React, { useState } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import HomeAnimation from "../../assets/gif/home-animation.gif";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  return (
    <div className="home">
      <div className="col home-col">
        <h1>DigiWiki</h1>
        <p>
          Le site qui va trouver les outils numériques adaptés à tous vos
          besoins.
        </p>
        <div>
          <Button onClick={() => navigate("/explorer")}>Explorer</Button>
        </div>
      </div>
      <div className="col home-col">
        <div className="d-flex justify-content-center align-items-center">
          <img src={HomeAnimation} alt="loading..." />
        </div>
      </div>
    </div>
  );
}
