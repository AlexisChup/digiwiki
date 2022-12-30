import React from "react";
import "./CategoryItem.css";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function CategoryItem(props) {
  let navigate = useNavigate();

  return (
    <div className="col col-4 ">
      <div
        className="d-flex rounded noselect my-1 justify-content-between align-content-center align-self-center category-container  py-3 px-3"
        onClick={() => navigate("/explorer/" + props.category.url)}
      >
        <div className="d-flex align-items-center">
          <h3 className="my-0 small font-weight-bold text-uppercase">
            {props.category.name}
          </h3>
        </div>
        <div>
          <div className="d-flex align-items-center" style={{ height: "80px" }}>
            <Image
              src={require(`../../../assets/png/categories/${props.category.url}.png`)}
              style={{ height: "80%", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
