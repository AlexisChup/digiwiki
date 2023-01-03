import React from "react";
import "./CategoryForm.css";
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
          placeholder="GeniusTool"
          value={props.category.name}
          onChange={(e) => props.handleForm("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Url</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="genius-tool"
          value={props.category.url}
          onChange={(e) => props.handleForm("url", e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
