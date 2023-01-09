import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaPen } from "react-icons/fa";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddToolForm from "../../tool/form/AddToolForm";

var toType = function (obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};

export default function EditTool(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const getActiveSubCategoriesIds = () => {
    if (!props.tool.subCategories) {
      return [];
    }
    let subCategoriesIds = [];

    if (toType(props.tool.subCategories) === toType([])) {
      for (let index = 0; index < props.tool.subCategories.length; index++) {
        if (toType(props.tool.subCategories[index]) === toType(1)) {
          subCategoriesIds.push(props.tool.subCategories[index]);
        } else if (toType(props.tool.subCategories[index]) === toType({})) {
          subCategoriesIds.push(props.tool.subCategories[index].id);
        }
      }
    } else if (toType(props.tool.subCategories) === toType({})) {
      const valuesOfObject = Object.values(props.tool.subCategories);

      for (let indObject = 0; indObject < valuesOfObject.length; indObject++) {
        const valObj = valuesOfObject[indObject];
        if (toType(valObj) === toType(1)) {
          subCategoriesIds.push(valObj);
        } else if (toType(valObj) === toType({})) {
          subCategoriesIds.push(valObj.id);
        }
      }
    }

    return subCategoriesIds;
  };

  const initialStateFormEditTool = {
    name: props.tool.name ? props.tool.name : "",
    url: props.tool.url ? props.tool.url : "",
    shortDescription: props.tool.shortDescription
      ? props.tool.shortDescription
      : "",
    description: props.tool.description ? props.tool.description : "",
    affiliateRef: props.tool.affiliateRef ? props.tool.affiliateRef : "",
    codePromo: props.tool.codePromo ? props.tool.codePromo : "",
    imgUrl: props.tool.imgUrl ? props.tool.imgUrl : "",
    subCategoriesIds: getActiveSubCategoriesIds(),
    initialSubCategoriesIds: getActiveSubCategoriesIds(),
  };

  const getSubCategoriesIdsToRemove = (formEditTool) => {
    let subCategoriesIdsToRemove = [];

    for (
      let index = 0;
      index < formEditTool.initialSubCategoriesIds.length;
      index++
    ) {
      const idSubCategory = formEditTool.initialSubCategoriesIds[index];
      if (!formEditTool.subCategoriesIds.includes(idSubCategory)) {
        subCategoriesIdsToRemove.push(idSubCategory);
      }
    }

    return subCategoriesIdsToRemove;
  };

  const handleClose = (isConfirmed, formEditTool) => {
    if (isConfirmed) {
      let payload = {
        ...formEditTool,
        subCategoriesIdsToRemove: getSubCategoriesIdsToRemove(formEditTool),
      };

      const id = toast.loading("Please wait...");

      AXIOS.put("/admin/tool/" + props.tool.id + "/edit", payload)
        .then((response) => {
          if (props.fetchTools) {
            props.fetchTools();
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
        .finally(() => {});
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
        <Button size="sm" variant="warning" onClick={handleShow}>
          <FaPen />
        </Button>
      </div>

      <AddToolForm
        show={show}
        handleClose={handleClose}
        initialStateForm={initialStateFormEditTool}
        type="EDIT"
      />
    </div>
  );
}
