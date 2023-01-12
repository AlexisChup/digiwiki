import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function HandleUsersModal(props) {
  const { userIdentifier, email, password, passwordEdited, roles } =
    props.formUser.user;
  const { type } = props.formUser;
  const { show } = props;

  const isFormValid = () => {
    let isFormValid = true;

    if (type === "ADD") {
      isFormValid &= email.length > 0;
      isFormValid &= password.length > 0;
    }

    return isFormValid;
  };

  return (
    <Modal show={show} onHide={() => props.handleClose(false)} keyboard={false}>
      <Modal.Header closeButton>
        {type === "ADD" ? (
          <Modal.Title>Ajouter un nouvel utilisateur</Modal.Title>
        ) : (
          <Modal.Title>Edit {userIdentifier}</Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              disabled={type === "EDIT"}
              onChange={(e) => props.handleFormUser("email", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="on"
              value={type === "ADD" ? password : passwordEdited}
              onChange={(e) =>
                props.handleFormUser(
                  type === "ADD" ? "password" : "passwordEdited",
                  e.target.value
                )
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRoles">
            <Form.Label>Roles</Form.Label>
            <Form.Check
              disabled
              type="switch"
              id="switch-role-user"
              label="Role User"
              checked={true}
            />
            <Form.Check
              type="switch"
              id="switch-role-admin"
              label="Role Admin"
              checked={roles.includes("ROLE_ADMIN")}
              onChange={(e) =>
                props.handleFormUserRoleAdmin("ROLE_ADMIN", e.target.checked)
              }
            />
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
