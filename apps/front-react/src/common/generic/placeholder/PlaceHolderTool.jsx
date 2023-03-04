import React from "react";
import { Placeholder } from "semantic-ui-react";

export default function PlaceHolderTool() {
  return (
    <div className="col-responsive mx-3">
      <Placeholder fluid style={{ width: "100%" }}>
        <hr className="solid my-3" />
        <Placeholder.Header image className="mb-3">
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <hr className="solid my-3" />
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
        <hr className="solid my-3" />
      </Placeholder>
    </div>
  );
}
