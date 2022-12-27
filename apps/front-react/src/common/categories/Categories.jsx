import React from "react";
import "./Categories.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  let navigate = useNavigate();

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row justify-content-center">
        <div>
          <h1>Categories</h1>
        </div>
      </div>
      <div className="row flex-grow-1">
        <div className="col d-flex rounded mx-1 my-1 justify-content-between align-content-center align-self-center shadow py-3">
          <div className="d-flex align-items-center">
            <p className="my-0">Catégorie 1</p>
          </div>
          <div>
            <Button onClick={() => navigate("/explorer/cat1")}>Cat 1</Button>
          </div>
        </div>
        <div className="col d-flex mx-1 my-1 rounded justify-content-between align-content-center align-self-center shadow py-3">
          <div className="d-flex align-items-center">
            <p className="my-0">Catégorie 1</p>
          </div>
          <div>
            <Button>Cat 1</Button>
          </div>
        </div>
        <div className="col d-flex rounded mx-1 my-1 justify-content-between align-content-center align-self-center shadow py-3">
          <div className="d-flex align-items-center">
            <p className="my-0">Catégorie 1</p>
          </div>
          <div>
            <Button>Cat 1</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
