import React, { useState } from "react";
import "./EditTool.css";
import { toast } from "react-toastify";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddToolForm from "../../tool/form/AddToolForm";

export default function EditTool(props) {
  const initialStateFormEditTool = {
    name: props.tool.name,
    url: props.tool.url,
    shortDescription: props.tool.shortDescription,
    description: props.tool.description,
    affiliateRef: props.tool.affiliateRef,
    codePromo: props.tool.codePromo,
    imgUrl: props.tool.imgUrl,
  };

  const [formEditTool, setformEditTool] = useState(initialStateFormEditTool);

  const handleFormEditTool = (key, value) => {
    setformEditTool({ ...formEditTool, [key]: value });
  };

  const [show, setShow] = useState(false);

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      let payload = {
        ...formEditTool,
        subCategoriesIds: [props.subCategoryId],
      };

      const id = toast.loading("Please wait...");
      AXIOS.put("/admin/tool/" + props.tool.id + "/edit", payload)
        .then((response) => {
          toast.update(id, {
            render: "Edit successfully !",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          payload = {
            ...payload,
            id: response.data.id,
          };
          props.updateTools(payload, "EDIT");
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
  const handleShow = (user) => {
    setShow(true);
  };

  const isFormIsValid = () => {
    const { name, url, shortDescription, description, affiliateRef } =
      formEditTool;

    return (
      name.length &&
      url.length &&
      shortDescription.length &&
      description.length &&
      affiliateRef.length
    );
  };

  return (
    <div>
      <div>
        <Button variant="warning" onClick={handleShow}>
          Modifier
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editer {props.tool.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddToolForm
            handleFormAddTool={handleFormEditTool}
            formAddTool={formEditTool}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Fermer
          </Button>
          <Button
            disabled={!isFormIsValid()}
            variant="success"
            onClick={() => handleClose(true)}
          >
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
