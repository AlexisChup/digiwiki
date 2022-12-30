import React, { useState } from "react";
import "./RemoveTool.css";
import { toast } from "react-toastify";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function RemoveTool(props) {
  const [show, setShow] = useState(false);

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const id = toast.loading("Please wait...");
      AXIOS.delete("/admin/tool/" + props.tool.id + "/remove")
        .then((response) => {
          toast.update(id, {
            render: "Remove successfully !",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          props.updateTools(props.tool, "REMOVE");
          setShow(false);
        })
        .catch((err) => {
          console.log(err);
          toast.update(id, {
            render: err.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
        })
        .finally(() => {});
    } else {
      setShow(false);
    }
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="mr-3">
      <div>
        <Button variant="danger" onClick={handleShow}>
          Supprimer
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer {props.tool.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Voulez-vous vraiment supprimer l'outil {props.tool.name} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Fermer
          </Button>
          <Button variant="danger" onClick={() => handleClose(true)}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
