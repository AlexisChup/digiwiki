import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { TAG_COLORS } from "../dashboard/admin/tags/const";

export default function TagForm(props) {
  const isFormValid = () => {
    const { name, color } = props.formTag;

    return name.length && color.length;
  };

  return (
    <Modal
      show={props.show}
      onHide={() => props.handleClose(false)}
      keyboard={false}
    >
      {props.type === "EDIT" ? (
        <Modal.Header closeButton>Edit {props.formTag.name}</Modal.Header>
      ) : (
        <Modal.Header closeButton>Add new tag</Modal.Header>
      )}
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label className="my-0 small">Nom</Form.Label>
            <Form.Control
              size="sm"
              className="mb-2"
              type="text"
              placeholder="Popular"
              value={props.formTag.name}
              onChange={(e) => props.handleForm("name", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="my-0 small">Couleur</Form.Label>
            <Form.Select
              size="sm"
              value={props.formTag.color}
              onChange={(e) => props.handleForm("color", e.target.value)}
            >
              {TAG_COLORS.map((color, index) => (
                <option value={color} key={index} style={{ color }}>
                  {color}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.handleClose(false)}>
          Close
        </Button>
        <Button
          disabled={!isFormValid()}
          variant="primary"
          onClick={() => props.handleClose(true)}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
