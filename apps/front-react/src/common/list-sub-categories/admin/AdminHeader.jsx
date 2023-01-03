import React from "react";
import "./AdminHeader.css";
import EditCategory from "./EditCategory";

export default function AdminHeader(props) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="font-weight-bold my-0">Admin</h2>
        </div>
        <div>
          <EditCategory category={props.category} />
        </div>
      </div>
      <hr className="solid" />
    </div>
  );
}
