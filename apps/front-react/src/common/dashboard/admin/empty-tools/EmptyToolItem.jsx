import React from "react";
import "../../../list-categories/category-item/CategoryItem.css";
import { safeSrcImg } from "../../../../utils/image";
import Image from "react-bootstrap/Image";

export default function EmptyToolItem(props) {
  return (
    <div className="col p-0">
      <div
        className="d-flex rounded my-1 justify-content-between align-content-center align-self-center category-container py-3 px-3"
        onClick={() => {}}
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
            <div>{props.tool.id}</div>
          </div>
        </div>
        <div className="d-flex align-items-center"></div>
      </div>
      {/* {props.isAuthenticated && props.user.roles.includes("ROLE_ADMIN") ? (
        <div className="d-flex flex-row">
          <EditTool
            updateTools={props.updateTools}
            tool={props.tool}
            subCategoryId={props.subCategoryId}
          />
          <RemoveTool updateTools={props.updateTools} tool={props.tool} />
        </div>
      ) : null} */}
    </div>
  );
}
