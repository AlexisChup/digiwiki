import React from "react";
import "./SubCategoryForm.css";
import Form from "react-bootstrap/Form";

export default function SubCategoryForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label className="my-0 small">Nom</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="GeniusSubCategory"
          value={props.formSubCategory.name}
          onChange={(e) => props.handleForm("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Url</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="genius-sub-category"
          value={props.formSubCategory.url}
          onChange={(e) => props.handleForm("url", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Categories Ids</Form.Label>
        <Form.Control
          size="sm"
          className="mb-0"
          type="text"
          placeholder="17,36"
          value={props.formSubCategory.categoriesIds}
          onChange={(e) => props.handleForm("categoriesIds", e.target.value)}
        />
        <small>Write category's id separated by a comma, e.g. 17,36</small>
      </Form.Group>
    </Form>
  );
}
