import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Spinner from "../../generic/spinner/Spinner";
import { setCategories } from "../../../features/categories/categoriesSlice";
import { AXIOS } from "../../../app/axios-http";
import ReactQuill from "react-quill";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AddToolForm(props) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [value, setValue] = useState("");
  const [uniqueSubcategories, setUniqueSubcategories] = useState([]);
  const [isRequesting, setIsRequesting] = useState(false);

  useEffect(() => {
    if (!categories) {
      setIsRequesting(true);
      AXIOS.get("/public/category/all")
        .then((res) => {
          dispatch(setCategories(res.data));
          setUniqueSubcategories(fetchUniqueSubCategories(res.data));
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsRequesting(false);
        });
    } else {
      setUniqueSubcategories(fetchUniqueSubCategories(categories));
    }
  }, []);

  const [formTool, setformTool] = useState(props.initialStateForm);

  const handleQuillText = (value) => {
    setformTool({ ...formTool, description: value });
  };

  const handleFormAddTool = (key, value) => {
    setformTool({ ...formTool, [key]: value });
  };

  const isFormIsValid = () => {
    const { name, url, shortDescription, description, affiliateRef } = formTool;

    return (
      name.length &&
      url.length &&
      shortDescription.length &&
      description.length &&
      affiliateRef.length
    );
  };

  const handleMultipleSelect = (event) => {
    let selectOptionsInt = [];
    const selectedOptionsHTML = event.target.selectedOptions;

    for (let index = 0; index < selectedOptionsHTML.length; index++) {
      selectOptionsInt.push(parseInt(selectedOptionsHTML[index].value));
    }

    handleFormAddTool("subCategoriesIds", selectOptionsInt);
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

  const buildOptionString = (subCategory) => {
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

  const {
    name,
    url,
    shortDescription,
    description,
    affiliateRef,
    codePromo,
    imgUrl,
    subCategoriesIds,
  } = formTool;

  // const modules = {
  //   toolbar: [
  //     [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [
  //       { list: "ordered" },
  //       { list: "bullet" },
  //       { indent: "-1" },
  //       { indent: "+1" },
  //     ],
  //     ["link", "image"],
  //     ["clean"],
  //   ],
  // };

  // const formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  // ];

  return (
    <Modal show={props.show} onHide={() => props.handleClose(false, null)}>
      <Modal.Header closeButton>
        {props.type === "ADD" ? (
          <Modal.Title>Ajouter un nouveau outil</Modal.Title>
        ) : (
          <Modal.Title>Editer {name}</Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        {isRequesting ? (
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
                value={formTool.name}
                onChange={(e) => handleFormAddTool("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">Url</Form.Label>
              <Form.Control
                size="sm"
                className="mb-2"
                type="text"
                placeholder="genius-tool"
                value={formTool.url}
                onChange={(e) =>
                  handleFormAddTool("url", e.target.value.toLowerCase())
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">
                Petit description inférieur à 80 charactères
              </Form.Label>
              <Form.Control
                size="sm"
                className="mb-2"
                type="text"
                placeholder="Cet outil est vraiment génial !"
                value={formTool.shortDescription}
                onChange={(e) =>
                  handleFormAddTool("shortDescription", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">Description</Form.Label>
              {/* <Form.Control
          size="sm"
          className="mb-2"
          as="textarea"
          type="text"
          placeholder="Cet outil est vraiment génial !"
          value={formTool.description}
          onChange={(e) =>
            handleFormAddTool("description", e.target.value)
          }
        /> */}
              <ReactQuill
                value={formTool.description}
                // value={formTool.description}
                onChange={handleQuillText}
                // modules={modules}
                // formats={formats}
                // onChange={setValue}
                // onChange={(e) =>            handleFormAddTool("description", e.target.value)}
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
                value={formTool.affiliateRef}
                onChange={(e) =>
                  handleFormAddTool("affiliateRef", e.target.value)
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
                value={formTool.codePromo}
                onChange={(e) => handleFormAddTool("codePromo", e.target.value)}
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
                value={formTool.imgUrl}
                onChange={(e) => handleFormAddTool("imgUrl", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-0 small">
                Sous Catégories parent - {"[Catégorie(s) grand-parent]"}
              </Form.Label>
              <Form.Control
                as="select"
                multiple
                value={formTool.subCategoriesIds}
                onChange={(e) => handleMultipleSelect(e)}
              >
                {uniqueSubcategories.map((subCategory) => (
                  <option key={subCategory.id} value={subCategory.id}>
                    {buildOptionString(subCategory)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => props.handleClose(false, null)}
        >
          Fermer
        </Button>
        <Button
          disabled={!isFormIsValid()}
          variant="success"
          onClick={() => props.handleClose(true, formTool)}
          size="sm"
        >
          Confirmer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
