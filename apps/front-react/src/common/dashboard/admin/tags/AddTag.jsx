import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Spinner from "../../../generic/spinner/Spinner";
import TagForm from "../../../forms/TagForm";
import { TAG_COLORS } from "./const";
import { toast } from "react-toastify";
import { AXIOS } from "../../../../app/axios-http";

export default function AddTag(props) {
  const [show, setShow] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const initialStateFormTag = {
    name: "",
    color: TAG_COLORS[0],
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
      AXIOS.post("/admin/tag/create", formTag)
        .then((response) => {
          props.fetchTags();
          toast.update(id, {
            render: "Create successfully !",
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
      <Button size="sm" variant="success" onClick={() => toggleShow()}>
        {isRequesting ? <Spinner sm /> : <FaPlus />}
      </Button>
      <TagForm
        show={show}
        handleForm={handleForm}
        formTag={formTag}
        type="ADD"
        handleClose={handleClose}
      />
    </div>
  );
}
