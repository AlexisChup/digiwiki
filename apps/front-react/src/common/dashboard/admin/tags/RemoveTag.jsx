import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AXIOS } from "../../../../app/axios-http";
import Spinner from "../../../../common/generic/spinner/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function RemoveTag(props) {
  const [show, setShow] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const id = toast.loading("Please wait...");
      AXIOS.delete("/admin/tag/" + props.tag.id + "/remove")
        .then((response) => {
          props.fetchTags();
          toast.update(id, {
            render: "Remove successfully !",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
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
    <div className="me-3">
      <div>
        <Button variant="danger" size="sm" onClick={handleShow}>
          {isRequesting ? <Spinner sm /> : <FaTrash />}
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer {props.tag.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Voulez-vous vraiment supprimer le tag {props.tag.name} ?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleClose(false)}
          >
            Fermer
          </Button>
          <Button variant="danger" size="sm" onClick={() => handleClose(true)}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RemoveTag;
