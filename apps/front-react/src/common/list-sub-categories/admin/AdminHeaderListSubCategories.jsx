import React from "react";
import EditCategory from "./EditCategory";
import AddSubCategory from "./AddSubCategory";

export default function AdminHeaderListSubCategories(props) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="fw-bold my-0">Admin</h2>
        </div>
        <div className="d-flex flex-row ">
          <div>
            <EditCategory category={props.category} />
          </div>
          <div>
            <AddSubCategory categoryId={props.category.id} />
          </div>
        </div>
      </div>
      <hr className="solid" />
    </div>
  );
}
