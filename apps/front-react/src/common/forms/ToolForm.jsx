import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "isomorphic-dompurify";
import Form from "react-bootstrap/Form";
import Spinner from "../generic/spinner/Spinner";
import { setCategories } from "../../features/categories/categoriesSlice";
import { AXIOS } from "../../app/axios-http";
import ReactQuill from "react-quill";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ToolForm(props) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [uniqueSubcategories, setUniqueSubcategories] = useState([]);
  const [isRequesting, setIsRequesting] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (props.show) {
    }
  }, [props.show]);

  useEffect(() => {
    setIsRequesting(true);
    if (!categories) {
      AXIOS.get("/public/category/all")
        .then((res) => {
          dispatch(setCategories(res.data));
          setUniqueSubcategories(fetchUniqueSubCategories(res.data));
          if (!tags.length) {
            AXIOS.get("/admin/tag/all")
              .then((resTags) => {
                setTags(resTags.data);
              })
              .catch((e) => console.log(e))
              .finally(() => {
                setIsRequesting(false);
              });
          } else {
            setIsRequesting(false);
          }
        })
        .catch((e) => {
          console.log(e);
          setIsRequesting(false);
        })
        .finally(() => {});
    } else {
      setUniqueSubcategories(fetchUniqueSubCategories(categories));
      if (!tags.length) {
        AXIOS.get("/admin/tag/all")
          .then((resTags) => {
            setTags(resTags.data);
          })
          .catch((e) => console.log(e))
          .finally(() => {
            setIsRequesting(false);
          });
      } else {
        setIsRequesting(false);
      }
    }
  }, []);

  const handleQuillText = (value) => {
    props.handleFormTool("description", value);
  };

  const isFormIsValid = () => {
    const { name, url, shortDescription, description, affiliateRef } =
      props.formTool;

    return (
      name.length &&
      url.length &&
      shortDescription.length &&
      shortDescription.length < 80 &&
      description.length &&
      affiliateRef.length
    );
  };

  const handleMultipleSelect = (key, event) => {
    let selectOptionsInt = [];
    const selectedOptionsHTML = event.target.selectedOptions;

    for (let index = 0; index < selectedOptionsHTML.length; index++) {
      selectOptionsInt.push(parseInt(selectedOptionsHTML[index].value));
    }

    props.handleFormTool(key, selectOptionsInt);
  };

  const isSubCategoryIdIsPresent = (id, arrayOfSubCategory) => {
    let indexOfArray = false;

    for (let index = 0; index < arrayOfSubCategory.length; index++) {
      const subCategory = arrayOfSubCategory[index];
      if (subCategory.id === id) {
        indexOfArray = index;
        break;
      }
    }

    return indexOfArray;
  };

  const fetchUniqueSubCategories = (listOfCategories) => {
    let listOfUniqueSubCategories = [];

    if (listOfCategories) {
      for (
        let indexCategory = 0;
        indexCategory < listOfCategories.length;
        indexCategory++
      ) {
        const listOfSubCategoriesOfOneCategory =
          listOfCategories[indexCategory].subCategories;
        for (
          let indexSubCategory = 0;
          indexSubCategory < listOfSubCategoriesOfOneCategory.length;
          indexSubCategory++
        ) {
          const subCategory =
            listOfSubCategoriesOfOneCategory[indexSubCategory];
          const indexIfPresent = isSubCategoryIdIsPresent(
            subCategory.id,
            listOfUniqueSubCategories
          );
          if (!indexIfPresent && indexIfPresent !== 0) {
            listOfUniqueSubCategories.push({
              id: subCategory.id,
              name: subCategory.name,
              categoryParent: [listOfCategories[indexCategory].name],
            });
          } else {
            listOfUniqueSubCategories[indexIfPresent].categoryParent.push(
              listOfCategories[indexCategory].name
            );
          }
        }
      }
    }

    return listOfUniqueSubCategories;
  };

  const buildOptionStringSubCategory = (subCategory) => {
    let strReturn = subCategory.name;

    strReturn = strReturn + " - [";
    for (let index = 0; index < subCategory.categoryParent.length; index++) {
      const categoryParent = subCategory.categoryParent[index];
      strReturn = strReturn + categoryParent + ",";
    }

    strReturn = strReturn.slice(0, -1);
    strReturn = strReturn + "]";

    return strReturn;
  };

  const buildOptionStringTag = (tag) => {
    return tag.name + "-" + tag.type + "-" + tag.color;
  };

  const {
    name,
    url,
    shortDescription,
    description,
    affiliateRef,
    codePromo,
    imgUrl,
    subCategoriesIds,
    tagsIds,
  } = props.formTool ? props.formTool : null;

  var toolbarOptions = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [2, 3, 4, 5, 6, false] }],

      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <Modal show={props.show} onHide={() => props.handleClose(false)}>
      <Modal.Header closeButton>
        {props.type === "ADD" ? (
          <Modal.Title>Ajouter un nouveau outil</Modal.Title>
        ) : (
          <Modal.Title>Editer {name}</Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        {isRequesting || props.isRequesting ? (
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        ) : (
          <Form>
            <Form.Group>
              <Form.Label className="my-0 small">Nom</Form.Label>
              <Form.Control
                size="sm"
                className="mb-2"
                type="text"
                placeholder="GeniusTool"
                value={name}
                onChange={(e) => props.handleFormTool("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">Url</Form.Label>
              <Form.Control
                size="sm"
                className="mb-2"
                type="text"
                placeholder="genius-tool"
                value={url}
                onChange={(e) =>
                  props.handleFormTool("url", e.target.value.toLowerCase())
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">
                Petite description inférieur à 80 charactères
              </Form.Label>
              <Form.Control
                size="sm"
                className="mb-2"
                type="text"
                placeholder="Cet outil est vraiment génial !"
                value={shortDescription}
                onChange={(e) =>
                  props.handleFormTool("shortDescription", e.target.value)
                }
              />
              <div className="text-end">
                <small
                  className={
                    shortDescription.length > 80 ? "text-danger fw-bold" : ""
                  }
                >
                  {shortDescription.length} / 80
                </small>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">Description</Form.Label>
              <ReactQuill
                value={description}
                onChange={handleQuillText}
                modules={toolbarOptions}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">
                Lien d'affiliation ou du site
              </Form.Label>
              <Form.Control
                size="sm"
                className="mb-2"
                type="text"
                placeholder="https://genius-tool.com"
                value={affiliateRef}
                onChange={(e) =>
                  props.handleFormTool("affiliateRef", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">Code Promo</Form.Label>
              <Form.Control
                size="sm"
                className="mb-2"
                type="text"
                placeholder="GT022"
                value={codePromo}
                onChange={(e) =>
                  props.handleFormTool("codePromo", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">
                Url du logo de l'outil
              </Form.Label>
              <Form.Control
                size="sm"
                className="mb-2"
                type="text"
                placeholder="https://genius-tool/logo.png"
                value={imgUrl}
                onChange={(e) => props.handleFormTool("imgUrl", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">
                Sous Catégories parent - {"[Catégorie(s) grand-parent]"}
              </Form.Label>
              <Form.Control
                as="select"
                multiple
                value={subCategoriesIds}
                onChange={(e) => handleMultipleSelect("subCategoriesIds", e)}
              >
                {uniqueSubcategories.map((subCategory) => (
                  <option key={subCategory.id} value={subCategory.id}>
                    {buildOptionStringSubCategory(subCategory)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            {tags.length > 0 ? (
              <Form.Group>
                <Form.Label className="my-0 small">
                  Tags - {"[name - type - color]"}
                </Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  value={tagsIds}
                  onChange={(e) => handleMultipleSelect("tagsIds", e)}
                >
                  {tags.map((tag) => (
                    <option key={tag.id} value={tag.id}>
                      {buildOptionStringTag(tag)}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            ) : null}
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => props.handleClose(false)}
        >
          Fermer
        </Button>
        <Button
          disabled={props.isRequesting || !isFormIsValid() || isRequesting}
          variant="success"
          onClick={() => props.handleClose(true)}
          size="sm"
        >
          Confirmer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
