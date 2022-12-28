import React from "react";
import "./CategoryItem.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function CategoryItem(props) {
  let navigate = useNavigate();

  return (
    <div className="col col-4 ">
      <div className="d-flex rounded my-1 justify-content-between align-content-center align-self-center shadow py-3 px-3">
        <div className="d-flex align-items-center">
          <h3 className="my-0">{props.category.name}</h3>
        </div>
        <div>
          <Button
            onClick={() =>
              navigate("/explorer/" + props.category.url, {
                state: {
                  category: props.category,
                  categories: props.categories,
                },
              })
            }
          >
            {props.category.id}
          </Button>
        </div>
      </div>
    </div>
  );
}
