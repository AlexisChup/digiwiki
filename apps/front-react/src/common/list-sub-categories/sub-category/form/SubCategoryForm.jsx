import React, { useState, useEffect } from "react";
import "./SubCategoryForm.css";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

export default function SubCategoryForm(props) {
  const { categories } = useSelector((state) => state.categories);

  const handleMultipleSelect = (event) => {
    let selectOptionsInt = [];
    const selectedOptionsHTML = event.target.selectedOptions;

    for (let index = 0; index < selectedOptionsHTML.length; index++) {
      selectOptionsInt.push(parseInt(selectedOptionsHTML[index].value));
    }

    props.handleForm("categoriesIds", selectOptionsInt);
  };

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
        <Form.Label className="my-0 small">Parent's Categories</Form.Label>
        <Form.Control
          as="select"
          multiple
          value={props.formSubCategory.categoriesIds}
          onChange={(e) => handleMultipleSelect(e)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
