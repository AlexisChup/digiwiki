import React from "react";
import "./SubCategoryItem.css";
import "../../list-categories/ListCategories.css";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function SubCategoryItem(props) {
  let navigate = useNavigate();

  const renderImage = () => {
    let imgFromUrl = null;
    let isImgExist = false;

    try {
      imgFromUrl = require(`../../../assets/png/sub-categories/${props.subCategory.url}.png`);
      isImgExist = true;
    } catch (error) {
      console.log("No image for url :", console.log(props.subCategory.url));
    }

    if (isImgExist) {
      return (
        <Image src={imgFromUrl} style={{ height: "80%", width: "auto" }} />
      );
    } else {
      return (
        <Image
          src={require(`../../../assets/png/common/default.png`)}
          style={{ height: "80%", width: "auto" }}
        />
      );
    }
  };

  return (
    <div className="col col-4 ">
      <div
        className="d-flex rounded noselect my-1 justify-content-between align-content-center align-self-center category-container  py-3 px-3"
        onClick={() =>
          navigate(
            "/explorer/" + props.urlCategory + "/" + props.subCategory.url,
            {
              state: {
                urlCategory: props.urlCategory,
                urlSubCategory: props.subCategory.url,
                nameSubCategory: props.subCategory.name,
                tools: props.tools,
              },
            }
          )
        }
      >
        <div className="d-flex align-items-center">
          <h3 className="my-0 small font-weight-bold text-uppercase">
            {props.subCategory.name}
          </h3>
        </div>
        <div>
          <div className="d-flex align-items-center" style={{ height: "80px" }}>
            {renderImage()}
          </div>
        </div>
      </div>
    </div>
  );
}
