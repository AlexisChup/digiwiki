import React, { useState } from "react";
import "./AddSubCategory.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SubCategoryForm from "../sub-category/form/SubCategoryForm";

var toType = function (obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};

export default function AddSubCategory(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const getActiveCategoriesIds = () => {
    if (!props.subCategory.category) {
      return [];
    }
    let categoriesIds = [];

    if (toType(props.subCategory.category) === toType([])) {
      for (let index = 0; index < props.subCategory.category.length; index++) {
        if (toType(props.subCategory.category[index]) === toType(1)) {
          categoriesIds.push(props.subCategory.category[index]);
        } else if (toType(props.subCategory.category[index]) === toType({})) {
          categoriesIds.push(props.subCategory.category[index].id);
        }
      }
    } else if (toType(props.subCategory.category) === toType({})) {
      const valuesOfObject = Object.values(props.subCategory.category);

      for (let indObject = 0; indObject < valuesOfObject.length; indObject++) {
        const valObj = valuesOfObject[indObject];
        if (toType(valObj) === toType(1)) {
          categoriesIds.push(valObj);
        } else if (toType(valObj) === toType({})) {
          categoriesIds.push(valObj.id);
        }
      }
    }

    return categoriesIds;
  };

  const initialStateFormAddSubCategory = {
    name: "",
    url: "",
    categoriesIds: "",
    categoriesIds: props.categoryId ? [props.categoryId] : [],
    initialCategoriesIds: [],
  };

  const [formSubCategory, setformAddSubCategory] = useState(
    initialStateFormAddSubCategory
  );

  const getCategoriesIdsToRemove = () => {
    let categoriesIdsToRemove = [];

    for (
      let index = 0;
      index < formSubCategory.initialCategoriesIds.length;
      index++
    ) {
      const idCategory = formSubCategory.initialCategoriesIds[index];
      if (!formSubCategory.categoriesIds.includes(idCategory)) {
        categoriesIdsToRemove.push(idCategory);
      }
    }

    return categoriesIdsToRemove;
  };

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      const id = toast.loading("Please wait...");

      let payload = { ...formSubCategory };
      payload.categoriesIdsToRemove = getCategoriesIdsToRemove();

      AXIOS.post("/admin/sub-category/create", payload)
        .then((response) => {
          if (props.fetchSubCategories) {
            props.fetchSubCategories();
          }

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

  const handleForm = (key, value) => {
    setformAddSubCategory({ ...formSubCategory, [key]: value });
  };

  const isFormIsValid = () => {
    const { name, url } = formSubCategory;

    return name.length && url.length;
  };

  return (
    <div className="me-3">
      <div>
        <Button size="sm" variant="success" onClick={handleShow}>
          <FaPlus /> Sous-catégorie
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
