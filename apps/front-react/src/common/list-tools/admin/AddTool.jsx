import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ToolForm from "../../forms/ToolForm";

export default function AddTool(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const initialStateFormAddTool = {
    name: "",
    url: "",
    shortDescription: "",
    description: "",
    affiliateRef: "",
    codePromo: "",
    imgUrl: "",
    subCategoriesIds: props.subCategoryId ? [props.subCategoryId] : [],
    initialSubCategoriesIds: [],
  };

  const getSubCategoriesIdsToRemove = (formAddTool) => {
    let subCategoriesIdsToRemove = [];

    for (
      let index = 0;
      index < formAddTool.initialSubCategoriesIds.length;
      index++
    ) {
      const idSubCategory = formAddTool.initialSubCategoriesIds[index];
      if (!formAddTool.subCategoriesIds.includes(idSubCategory)) {
        subCategoriesIdsToRemove.push(idSubCategory);
      }
    }

    return subCategoriesIdsToRemove;
  };

  const handleClose = (isConfirmed, formAddTool) => {
    if (isConfirmed) {
      setIsRequesting(true);
      let payload = {
        ...formAddTool,
        subCategoriesIdsToRemove: getSubCategoriesIdsToRemove(formAddTool),
      };

      const id = toast.loading("Please wait...");
      AXIOS.post("/admin/tool/create", payload)
        .then((response) => {
          if (props.fetchTools) {
            props.fetchTools();
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
        .finally(() => {
          setIsRequesting(false);
        });
    } else {
      setShow(false);
    }
  };

  const handleShow = (user) => {
    setShow(true);
  };

  return (
    <div className="me-3">
      <div>
        <Button variant="success" size="sm" onClick={handleShow}>
          <FaPlus /> Outil
        </Button>
      </div>
      <ToolForm
        initialStateForm={initialStateFormAddTool}
        show={show}
        handleClose={handleClose}
        type="ADD"
        isRequesting={isRequesting}
      />
    </div>
  );
}
