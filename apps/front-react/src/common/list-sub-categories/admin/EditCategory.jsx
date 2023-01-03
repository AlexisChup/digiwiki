import React, { useState } from "react";
import "./EditCategory.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CategoryForm from "../../list-categories/category/form/CategoryForm";

export default function EditCategory(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const initialStateFormEditCategory = {
    name: props.category.name,
    url: props.category.url,
  };

  const [formEditCategory, setFormEditCategory] = useState(
    initialStateFormEditCategory
  );

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const id = toast.loading("Please wait...");
      AXIOS.put(
        "/admin/category/" + props.category.id + "/edit",
        formEditCategory
      )
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
    setFormEditCategory({ ...formEditCategory, [key]: value });
  };

  const isFormIsValid = () => {
    const { name, url } = formEditCategory;

    return name.length && url.length;
  };

  return (
    <div className="mr-3">
      <div>
        <Button variant="warning" onClick={handleShow}>
          Editer la catégorie
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editer {props.category.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryForm category={formEditCategory} handleForm={handleForm} />
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
