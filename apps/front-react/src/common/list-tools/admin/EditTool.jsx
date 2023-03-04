import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaPen } from "react-icons/fa";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ToolForm from "../../forms/ToolForm";
import Spinner from "../../generic/spinner/Spinner";

var toType = function (obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};

export default function EditTool(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

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
    subCategoriesIds: [],
    initialSubCategoriesIds: [],
    tagsIds: [],
    initialTagsIds: [],
  };

  const [formTool, setFormTool] = useState(initialStateFormEditTool);

  const handleFormTool = (key, value) => {
    setFormTool({ ...formTool, [key]: value });
  };

  const handleShow = () => {
    setShow(true);
    setIsRequesting(true);
    AXIOS.get("/admin/tool/" + props.tool.id + "/get-subcategories-id")
      .then((res) => {
        setFormTool({
          ...formTool,
          subCategoriesIds: res.data,
          initialSubCategoriesIds: res.data,
          tagsIds: getIdsFromTags(props.tool.tags),
          initialTagsIds: getIdsFromTags(props.tool.tags),
        });
        setIsRequesting(false);
      })
      .catch((e) => {
        console.log(
          "ERROR call /admin/tool/" + props.tool.id + "/get-subcategories-id",
          e
        );
        setIsRequesting(false);
      })
      .finally(() => {});
  };

  const getIdsFromTags = (tags) => {
    const tagsIds = tags.map((tag) => tag.id);
    return tagsIds;
  };

  const getSubCategoriesIdsToRemove = () => {
    let subCategoriesIdsToRemove = [];

    for (
      let index = 0;
      index < formTool.initialSubCategoriesIds.length;
      index++
    ) {
      const idSubCategory = formTool.initialSubCategoriesIds[index];
      if (!formTool.subCategoriesIds.includes(idSubCategory)) {
        subCategoriesIdsToRemove.push(idSubCategory);
      }
    }

    return subCategoriesIdsToRemove;
  };

  const getTagsIdsToRemove = (formEditTool) => {
    let tagsIdsToRemove = [];

    for (let index = 0; index < formEditTool.initialTagsIds.length; index++) {
      const idTag = formEditTool.initialTagsIds[index];
      if (!formEditTool.tagsIds.includes(idTag)) {
        tagsIdsToRemove.push(idTag);
      }
    }

    return tagsIdsToRemove;
  };

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      setIsRequesting(true);
      let payload = {
        ...formTool,
        subCategoriesIdsToRemove: getSubCategoriesIdsToRemove(),
        tagsIdsToRemove: getTagsIdsToRemove(formTool),
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
        .finally(() => {
          setIsRequesting(false);
        });
    } else {
      setShow(false);
    }
  };

  return (
    <div className="me-3">
      <div>
        <Button size="sm" variant="warning" onClick={handleShow}>
          {isRequesting ? <Spinner sm /> : <FaPen />}
        </Button>
      </div>

      {formTool ? (
        <ToolForm
          show={show}
          handleClose={handleClose}
          type="EDIT"
          isRequesting={isRequesting}
          handleFormTool={handleFormTool}
          formTool={formTool}
        />
      ) : null}
    </div>
  );
}
