import React from "react";
import "./CategoryItem.css";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { safeSrcImg } from "../../../utils/image";

export default function CategoryItem(props) {
  let navigate = useNavigate();

  return (
    <div className="col">
      <div
        className="swing-in-bottom-fwd d-flex rounded noselect justify-content-between align-content-center align-self-center category-container py-3 px-3"
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
              src={safeSrcImg(props.category.url, "categories")}
              style={{ height: "80%", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
