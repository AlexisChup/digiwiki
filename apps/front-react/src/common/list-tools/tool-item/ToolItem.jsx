import React from "react";
import "./ToolItem.css";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "../../list-categories/ListCategories.css";
import EditTool from "../admin/EditTool";
import RemoveTool from "../admin/RemoveTool";
import { safeSrcImg } from "../../../utils/image";

export default function ToolItem(props) {
  let navigate = useNavigate();
  return (
    <div className="col p-0">
      <div
        className="d-flex rounded my-1 justify-content-between align-content-center align-self-center category-container py-3 px-3"
        onClick={() =>
          navigate(
            "/explorer/" +
              props.urlCategory +
              "/" +
              props.urlSubCategory +
              "/" +
              props.tool.url
          )
        }
      >
        <div className="d-flex flex-row">
          <div
            className="d-flex align-items-center mr-3"
            style={{ height: "80px" }}
          >
            <Image
              src={safeSrcImg(props.tool.imgUrl, "tools")}
              style={{ height: "80%", width: "auto" }}
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <div>
              <h3 className="my-0">{props.tool.name}</h3>
            </div>
            <div>{props.tool.shortDescription}</div>
          </div>
        </div>
        <div className="d-flex align-items-center"></div>
      </div>
      {props.isAuthenticated && props.user.roles.includes("ROLE_ADMIN") ? (
        <div className="d-flex flex-row">
          <EditTool tool={props.tool} />
          <RemoveTool tool={props.tool} />
        </div>
      ) : null}
    </div>
  );
}
