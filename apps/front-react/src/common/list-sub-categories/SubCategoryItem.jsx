import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { safeSrcImg } from "../../utils/image";

export default function SubCategoryItem(props) {
  let navigate = useNavigate();

  return (
    <div className="col">
      <div
        className="d-flex rounded noselect my-1 justify-content-between align-content-center align-self-center item-list-shadow  py-3 px-3"
        onClick={() =>
          navigate(
            "/explorer/" + props.urlCategory + "/" + props.subCategory.url
          )
        }
      >
        <div className="d-flex align-items-center pe-3">
          <h2 className="my-0 text-break text-uppercase title-card">
            {props.subCategory.name}
          </h2>
        </div>
        <div>
          <div className="d-flex align-items-center" style={{ height: "80px" }}>
            <Image
              src={safeSrcImg(props.subCategory.url, "sub-categories")}
              className="logo-list-item"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
