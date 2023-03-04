import React from "react";
import { Placeholder } from "semantic-ui-react";

export default function PlaceHolderTitleList() {
  return (
    <Placeholder style={{ width: "100%" }}>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
    </Placeholder>
  );
}
