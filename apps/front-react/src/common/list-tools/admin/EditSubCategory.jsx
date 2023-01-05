import React, { useState } from "react";
import "./EditSubCategory.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SubCategoryForm from "../../list-sub-categories/sub-category/form/SubCategoryForm";

export default function EditSubCategory(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const getCategoriesIds = () => {
    if (!props.subCategory.category) {
      return "";
    }
    let categoriesIds = "";

    const number = 1;

    for (let index = 0; index < props.subCategory.category.length; index++) {
      if (typeof props.subCategory.category[index] == typeof number) {
        categoriesIds += props.subCategory.category[index] + ",";
      } else {
        categoriesIds += props.subCategory.category[index].id + ",";
      }
    }

    categoriesIds = categoriesIds.slice(0, -1);
    return categoriesIds;
  };

  const initialStateFormSubCategory = {
    name: props.subCategory.name,
    url: props.subCategory.url,
    categoriesIds: getCategoriesIds(),
  };

  const [formSubCategory, setFormSubCategory] = useState(
    initialStateFormSubCategory
  );

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const id = toast.loading("Please wait...");

      let payload = { ...formSubCategory };
      payload.categoriesIds = formSubCategory.categoriesIds.split(",");
      console.log("PAYLOAD :", payload);

      AXIOS.put(
        "/admin/sub-category/" + props.subCategory.id + "/edit",
        payload
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
    setFormSubCategory({ ...formSubCategory, [key]: value });
  };

  const isFormIsValid = () => {
    const { name, url } = formSubCategory;

    return name.length && url.length;
  };

  return (
    <div className="mr-3">
      <div>
        <Button variant="warning" onClick={handleShow}>
          Editer la sous catégorie
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editer {props.subCategory.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SubCategoryForm
            formSubCategory={formSubCategory}
            handleForm={handleForm}
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
