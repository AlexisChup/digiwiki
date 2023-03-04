import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import EditTool from "./admin/EditTool";
import RemoveTool from "./admin/RemoveTool";
import { safeSrcImg } from "../../utils/image";
import { Label } from "semantic-ui-react";
import { TAG_TYPES } from "../dashboard/admin/tags/const";

export default function ToolItem(props) {
  let navigate = useNavigate();

  return (
    <div className="col ">
      <div
        className="d-flex rounded my-1 justify-content-between align-content-center align-self-center item-list-shadow py-3 px-3"
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
          <div className="d-flex flex-column">
            {props.tool.tags
              .filter((tag) => tag.type === TAG_TYPES.Ribbon)
              .map((tag, index) => (
                <div className="mb-2" key={index}>
                  <Label as="span" color={tag.color} ribbon>
                    {tag.name}
                  </Label>
                </div>
              ))}
          </div>
          <div
            className="d-flex align-items-center me-3"
            style={{ height: "80px" }}
          >
            <Image
              src={safeSrcImg(props.tool.imgUrl, "tools")}
              alt={props.tool.name}
              className="logo-list-item"
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <div>
              <h2 className="my-0 fw-bold text-break title-card text-capitalize">
                {props.tool.name}
              </h2>
            </div>
            <div>{props.tool.shortDescription}</div>
          </div>
        </div>
        <div className="d-flex align-items-end">
          <div className="d-flex flex-row">
            {props.tool.tags
              .filter((tag) => tag.type === TAG_TYPES.Tag)
              .map((tag, index) => (
                <div className="ms-2" key={index}>
                  <Label as="span" color={tag.color} tag>
                    {tag.name}
                  </Label>
                </div>
              ))}
          </div>
        </div>
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
