import React from "react";
import "./CategoryItem.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// const path = "../../../assets/png/categories/ai.png";

// import AIFFF from path;

export default function CategoryItem(props) {
  let navigate = useNavigate();
  const titleImage = "ai";
  const path = `../../../assets/png/categories/${titleImage}.png`;
  const path2 = `../../../assets/png/categories/${titleImage}.png`;

  return (
    <div className="col col-4 ">
      <div
        className="d-flex rounded noselect my-1 justify-content-between align-content-center align-self-center category-container  py-3 px-3"
        onClick={() =>
          navigate("/explorer/" + props.category.url, {
            state: {
              category: props.category,
              categories: props.categories,
            },
          })
        }
      >
        <div className="d-flex align-items-center">
          <h3 className="my-0 small font-weight-bold text-uppercase">
            {props.category.name}
          </h3>
        </div>
        <div>
          <div className="d-flex align-items-center" style={{ height: "80px" }}>
            <Image
              src={props.imageSrc}
              // src={require(path2)}
              // src={require("../../../assets/png/categories/ai.png")}
              style={{ height: "80%", width: "auto" }}
            />
          </div>
          {/* <Button
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
          </Button> */}
        </div>
      </div>
    </div>
  );
}
