import React from "react";
import Form from "react-bootstrap/Form";

export default function CategoryForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label className="my-0 small">Nom</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="GeniusCategory"
          value={props.formCategory.name}
          onChange={(e) => props.handleForm("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Url</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="genius-category"
          value={props.formCategory.url}
          onChange={(e) =>
            props.handleForm("url", e.target.value.toLowerCase())
          }
        />
      </Form.Group>
    </Form>
  );
}
