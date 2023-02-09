import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaPen } from "react-icons/fa";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SubCategoryForm from "../../forms/SubCategoryForm";
import Spinner from "../../generic/spinner/Spinner";

var toType = function (obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};

export default function EditSubCategory(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [initialCategoriesIds, setInitialCategoriesIds] = useState(false);

  /* Super weird function because when editing category
   ** the return value can be tricky */
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

  const handleShow = (user) => {
    setShow(true);
    if (!initialCategoriesIds) {
      AXIOS.get(
        "/admin/sub-category/" + props.subCategory.id + "/get-categories-id"
      )
        .then((res) => {
          setInitialCategoriesIds(res.data);
          setFormSubCategory({
            ...formSubCategory,
            initialCategoriesIds: res.data,
            categoriesIds: res.data,
          });
        })
        .catch((e) => {
          console.log("error: ", e);
        });
    }
  };

  const initialStateFormSubCategory = {
    name: props.subCategory.name,
    url: props.subCategory.url,
    categoriesIds: initialCategoriesIds,
    initialCategoriesIds: initialCategoriesIds,
  };

  const [formSubCategory, setFormSubCategory] = useState(
    initialStateFormSubCategory
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
      setIsRequesting(true);
      const id = toast.loading("Please wait...");

      let payload = { ...formSubCategory };
      payload.categoriesIdsToRemove = getCategoriesIdsToRemove();

      AXIOS.put(
        "/admin/sub-category/" + props.subCategory.id + "/edit",
        payload
      )
        .then((response) => {
          if (props.fetchSubCategories) {
            props.fetchSubCategories();
          }
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
        .finally(() => {
          setIsRequesting(false);
        });
    } else {
      setShow(false);
    }
  };

  const handleForm = (key, value) => {
    setFormSubCategory({ ...formSubCategory, [key]: value });
  };

  const isFormIsValid = () => {
    const { name, url } = formSubCategory;

    return name.length && url.length;
  };

  return (
    <div className="me-3">
      <div>
        <Button variant="warning" onClick={handleShow} size="sm">
          <FaPen /> SubCat
        </Button>
      </div>
      <Modal show={show} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editer {props.subCategory.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {initialCategoriesIds ? (
            <SubCategoryForm
              formSubCategory={formSubCategory}
              handleForm={handleForm}
            />
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleClose(false)}
          >
            Fermer
          </Button>
          <Button
            disabled={isRequesting || !isFormIsValid()}
            variant="success"
            onClick={() => handleClose(true)}
            size="sm"
          >
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
