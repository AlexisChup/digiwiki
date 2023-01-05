import React, { useState } from "react";
import "./AddSubCategory.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SubCategoryForm from "../sub-category/form/SubCategoryForm";

export default function AddSubCategory(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const initialStateFormAddSubCategory = {
    name: "",
    url: "",
    categoriesIds: "",
  };

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const payload = {
        ...formSubCategory,
        categoriesIds: [props.categoryId],
      };

      const id = toast.loading("Please wait...");
      console.log("POST: ", payload);
      AXIOS.post("/admin/sub-category/create", payload)
        .then((response) => {
          dispatch(setCategories(response.data));
          toast.update(id, {
            render: "Post successfully !",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
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

  const [formSubCategory, setformAddSubCategory] = useState(
    initialStateFormAddSubCategory
  );

  const handleForm = (key, value) => {
    setformAddSubCategory({ ...formSubCategory, [key]: value });
  };

  const isFormIsValid = () => {
    const { name, url } = formSubCategory;

    return name.length && url.length;
  };

  return (
    <div className="mr-3">
      <div>
        <Button variant="success" onClick={handleShow}>
          Ajouter une sous-catégorie
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une nouvelle sous-catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SubCategoryForm
            handleForm={handleForm}
            formSubCategory={formSubCategory}
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
