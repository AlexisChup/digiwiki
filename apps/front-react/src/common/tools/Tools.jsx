import React from "react";
import "./Tools.css";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ToolsItems from "./tools-items/ToolsItems";

export default function Tools() {
  let navigate = useNavigate();
  const location = useLocation();
  const { category, subCategory } = location.state;

  const tools = [
    {
      id: 0,
      name: "Tools1",
    },
    {
      id: 1,
      name: "Tools2",
    },
    {
      id: 2,
      name: "Tools3",
    },
    {
      id: 3,
      name: "Tools4",
    },
    {
      id: 4,
      name: "Tools5",
    },
  ];

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row justify-content-center">
        <div>
          <h1>Outils - {subCategory.name}</h1>
        </div>
        <div>
          <Button
            variant="outline-primary"
            className="mb-2"
            onClick={() =>
              navigate("/explorer/" + category.name, {
                state: { category: category },
              })
            }
          >
            Retour
          </Button>
        </div>
        <div className="row justify-content-center flex-column">
          {tools.map((tool, index) => (
            <ToolsItems tool={tool} key={tool.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
