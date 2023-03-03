import React from "react";
import EditTag from "./EditTag";
import RemoveTag from "./RemoveTag";
import { Label } from "semantic-ui-react";
import { TAG_TYPES } from "./const";

function TagItem(props) {
  return (
    <tr>
      <th className="align-middle" scope="row">
        {props.tag.name}
      </th>
      <td className="align-middle">
        <Label
          as="span"
          color={props.tag.color}
          tag={props.tag.type === TAG_TYPES.Tag}
          ribbon={props.tag.type === TAG_TYPES.Ribbon}
        >
          {props.tag.name}
        </Label>
      </td>
      <td className="align-middle">
        <EditTag tag={props.tag} fetchTags={props.fetchTags} />
      </td>
      <td className="align-middle">
        <RemoveTag tag={props.tag} fetchTags={props.fetchTags} />
      </td>
    </tr>
  );
}

export default TagItem;
