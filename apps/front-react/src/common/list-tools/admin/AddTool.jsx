import React, { useState } from "react";
import "./AddTool.css";
import { toast } from "react-toastify";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddToolForm from "../../tool/form/AddToolForm";

export default function AddTool(props) {
  const initialStateFormAddTool = {
    name: "",
    url: "",
    shortDescription: "",
    description: "",
    affiliateRef: "",
    codePromo: "",
    imgUrl: "",
  };

  const [formAddTool, setformAddTool] = useState(initialStateFormAddTool);

  const handleFormAddTool = (key, value) => {
    setformAddTool({ ...formAddTool, [key]: value });
  };

  const [show, setShow] = useState(false);

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const payload = {
        ...formAddTool,
        subCategoriesIds: [props.subCategoryId],
      };

      const id = toast.loading("Please wait...");
      AXIOS.post("/admin/tool/create", payload)
        .then((response) => {
          toast.update(id, {
            render: "Post successfully !",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          props.updateTools(response.data, "ADD");
          setShow(false);
        })
        .catch((err) => {
          toast.update(id, {
            render: err.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          console.log(err);
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
      formAddTool;

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
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="font-weight-bold my-0">Admin</h2>
        </div>
        <div>
          <div>
            <Button variant="success" onClick={handleShow}>
              Ajouter
            </Button>
          </div>
        </div>
      </div>
      <hr className="solid" />
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouveau outil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddToolForm
            handleFormAddTool={handleFormAddTool}
            formAddTool={formAddTool}
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
