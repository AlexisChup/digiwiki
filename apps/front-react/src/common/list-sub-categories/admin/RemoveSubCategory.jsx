import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function RemoveSubCategory(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  let navigate = useNavigate();

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const id = toast.loading("Please wait...");
      AXIOS.delete("/admin/sub-category/" + props.subCategory.id + "/remove")
        .then((response) => {
          if (props.fetchSubCategories) {
            props.fetchSubCategories();
          }

          dispatch(setCategories(response.data));
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
        .finally(() => {
          if (!props.fetchSubCategories) {
            navigate(-1);
          }
        });
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
          <FaTrash /> SubCat
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer {props.subCategory.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Voulez-vous vraiment supprimer la sous catégorie{" "}
          {props.subCategory.name} ?
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
