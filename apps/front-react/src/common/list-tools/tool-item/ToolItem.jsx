import React from "react";
import "./ToolItem.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function ToolItem(props) {
  let navigate = useNavigate();

  return (
    <div className="col p-0">
      <div className="d-flex rounded my-1 justify-content-between align-content-center align-self-center shadow py-3 px-3">
        <div>
          <div className="d-flex align-items-center">
            <h3 className="my-0">{props.tool.name}</h3>
          </div>
          <div>{props.tool.shortDescription}</div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <Button
              onClick={() =>
                navigate(
                  "/explorer/" +
                    props.urlCategory +
                    "/" +
                    props.urlSubCategory +
                    "/" +
                    props.tool.name,
                  {
                    state: {
                      tool: props.tool,
                    },
                  }
                )
              }
            >
              {props.tool.id}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
