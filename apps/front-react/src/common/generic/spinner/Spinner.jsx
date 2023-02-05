import React from "react";

export default function Spinner(props) {
  return (
    <div
      className={"spinner-grow" + (props.sm ? " spinner-grow-sm" : "")}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
