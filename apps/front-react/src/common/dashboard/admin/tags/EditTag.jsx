import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Spinner from "../../../../common/generic/spinner/Spinner";
import TagForm from "../../../forms/TagForm";
import { TAG_COLORS, TAG_TYPES } from "./const";
import { toast } from "react-toastify";
import { AXIOS } from "../../../../app/axios-http";

export default function EditTag(props) {
  const [show, setShow] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const initialStateFormTag = {
    name: props.tag.name,
    color: props.tag.color ? props.tag.color : TAG_COLORS[0],
    type: props.tag.type ? props.tag.type : TAG_TYPES.Tag,
  };

  const [formTag, setFormTag] = useState(initialStateFormTag);

  const toggleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleForm = (key, value) => {
    setFormTag({ ...formTag, [key]: value });
  };

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      setIsRequesting(true);
      const id = toast.loading("Please wait...");
      AXIOS.put("/admin/tag/" + props.tag.id + "/edit", formTag)
        .then((response) => {
          props.fetchTags();
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
    <div>
      <Button size="sm" variant="warning" onClick={() => toggleShow()}>
        {isRequesting ? <Spinner sm /> : <FaPen />}
      </Button>
      <TagForm
        show={show}
        handleForm={handleForm}
        formTag={formTag}
        type="EDIT"
        handleClose={handleClose}
      />
    </div>
  );
}
