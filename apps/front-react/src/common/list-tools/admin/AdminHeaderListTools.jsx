import React from "react";
import "./AdminHeaderListTools.css";
import AddTool from "./AddTool";
import EditSubCategory from "./EditSubCategory";
import RemoveSubCategory from "../../list-sub-categories/admin/RemoveSubCategory";

export default function AdminHeaderListTools(props) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="font-weight-bold my-0">Admin</h2>
        </div>
        <div className="d-flex flex-row ">
          <div>
            <EditSubCategory subCategory={props.subCategory} />
          </div>
          <div>
            <RemoveSubCategory subCategory={props.subCategory} />
          </div>
          <div>
            <AddTool subCategoryId={props.subCategory.id} />
          </div>
        </div>
      </div>
      <hr className="solid" />
    </div>
  );
}
