import React from "react";
import "./ToolsItems.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function ToolsItems(props) {
  let navigate = useNavigate();

  return (
    <div className="col p-0">
      <div className="d-flex rounded my-1 justify-content-between align-content-center align-self-center shadow py-3 px-3">
        <div className="d-flex align-items-center">
          <p className="my-0">{props.tool.name}</p>
        </div>
        <div>
          <Button onClick={() => navigate("/explorer/")}>
            {props.tool.id}
          </Button>
        </div>
      </div>
    </div>
  );
}
