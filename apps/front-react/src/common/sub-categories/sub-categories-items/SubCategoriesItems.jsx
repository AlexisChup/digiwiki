import React from "react";
import "./SubCategoriesItems.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function CategoriesItems(props) {
  let navigate = useNavigate();

  return (
    <div className="col col-4 ">
      <div className="d-flex rounded my-1 justify-content-between align-content-center align-self-center shadow py-3 px-3">
        <div className="d-flex align-items-center">
          <p className="my-0">{props.subCategory.name}</p>
        </div>
        <div>
          <Button
            onClick={() =>
              navigate(
                "/explorer/" +
                  props.category.url +
                  "/" +
                  props.subCategory.name,
                {
                  state: {
                    category: props.category,
                    subCategory: props.subCategory,
                  },
                }
              )
            }
          >
            {props.subCategory.id}
          </Button>
        </div>
      </div>
    </div>
  );
}
