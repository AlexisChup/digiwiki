import React from "react";
import { Placeholder, Segment } from "semantic-ui-react";

export default function PlaceHolderList(props) {
  const placeHolder = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div
      className={
        props.flat ? "row row-cols-1 g-2" : "row row-cols-md-3 row-cols-1 g-2"
      }
    >
      {placeHolder.map((value, index) => (
        <div className="col p-3" key={index}>
          <Segment raised>
            <Placeholder style={{ width: "100%" }}>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </div>
      ))}
    </div>
  );
}
