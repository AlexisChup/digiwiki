import React from "react";
import "../../../list-categories/category-item/CategoryItem.css";
import { safeSrcImg } from "../../../../utils/image";
import Image from "react-bootstrap/Image";
import EditSubCategory from "../../../list-tools/admin/EditSubCategory";
import RemoveSubCategory from "../../../list-sub-categories/admin/RemoveSubCategory";

export default function EmptySubCategoryItem(props) {
  return (
    <div className="col p-0">
      <div
        className="d-flex rounded my-1 justify-content-between align-content-center align-self-center category-container py-3 px-3"
        onClick={() => {}}
      >
        <div className="d-flex flex-row">
          <div
            className="d-flex align-items-center me-3"
            style={{ height: "80px" }}
          >
            <Image
              src={safeSrcImg(props.subCategory.url, "sub-categories")}
              style={{ height: "80%", width: "auto" }}
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <div>
              <h3 className="my-0">{props.subCategory.name}</h3>
            </div>
            <div>{props.subCategory.id}</div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <EditSubCategory
            subCategory={props.subCategory}
            fetchSubCategories={props.fetchSubCategories}
          />
          <RemoveSubCategory
            subCategory={props.subCategory}
            fetchSubCategories={props.fetchSubCategories}
          />
        </div>
      </div>
    </div>
  );
}
