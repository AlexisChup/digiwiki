import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaPen } from "react-icons/fa";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CategoryForm from "../../list-categories/category/form/CategoryForm";

export default function EditCategory(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const initialStateFormCategory = {
    name: props.category.name,
    url: props.category.url,
  };

  const [formCategory, setFormCategory] = useState(initialStateFormCategory);

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const id = toast.loading("Please wait...");
      AXIOS.put("/admin/category/" + props.category.id + "/edit", formCategory)
        .then((response) => {
          dispatch(setCategories(response.data));
          toast.update(id, {
            render: "Edit successfully !",
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

  const handleShow = (user) => {
    setShow(true);
  };

  const handleForm = (key, value) => {
    setFormCategory({ ...formCategory, [key]: value });
  };

  const isFormIsValid = () => {
    const { name, url } = formCategory;

    return name.length && url.length;
  };

  return (
    <div className="me-3">
      <div>
        <Button variant="warning" size="sm" onClick={handleShow}>
          <FaPen /> Catégorie
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editer {props.category.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryForm formCategory={formCategory} handleForm={handleForm} />
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
