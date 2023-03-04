import React from "react";
import { Placeholder } from "semantic-ui-react";

export default function PlaceHolderList() {
  const placeHolder = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div>
      {placeHolder.map((value, index) => (
        <Placeholder key={index}>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      ))}
    </div>
  );
}
