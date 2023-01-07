import React, { useState } from "react";
import "./AddToolForm.css";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

export default function AddToolForm(props) {
  const { categories } = useSelector((state) => state.categories);

  const handleMultipleSelect = (event) => {
    let selectOptionsInt = [];
    const selectedOptionsHTML = event.target.selectedOptions;

    for (let index = 0; index < selectedOptionsHTML.length; index++) {
      selectOptionsInt.push(parseInt(selectedOptionsHTML[index].value));
    }

    props.handleFormAddTool("subCategoriesIds", selectOptionsInt);
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

  const uniqueSubCategories = () => {
    let listOfUniqueSubCategories = [];

    if (categories) {
      for (
        let indexCategory = 0;
        indexCategory < categories.length;
        indexCategory++
      ) {
        const listOfSubCategoriesOfOneCategory =
          categories[indexCategory].subCategories;
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
              categoryParent: [categories[indexCategory].name],
            });
          } else {
            listOfUniqueSubCategories[indexIfPresent].categoryParent.push(
              categories[indexCategory].name
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

  return (
    <Form>
      <Form.Group>
        <Form.Label className="my-0 small">Nom</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="GeniusTool"
          value={props.formAddTool.name}
          onChange={(e) => props.handleFormAddTool("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Url</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="genius-tool"
          value={props.formAddTool.url}
          onChange={(e) => props.handleFormAddTool("url", e.target.value)}
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
          value={props.formAddTool.shortDescription}
          onChange={(e) =>
            props.handleFormAddTool("shortDescription", e.target.value)
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Description</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          as="textarea"
          type="text"
          placeholder="Cet outil est vraiment génial !"
          value={props.formAddTool.description}
          onChange={(e) =>
            props.handleFormAddTool("description", e.target.value)
          }
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
          value={props.formAddTool.affiliateRef}
          onChange={(e) =>
            props.handleFormAddTool("affiliateRef", e.target.value)
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
          value={props.formAddTool.codePromo}
          onChange={(e) => props.handleFormAddTool("codePromo", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Url du logo de l'outil</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="https://genius-tool/logo.png"
          value={props.formAddTool.imgUrl}
          onChange={(e) => props.handleFormAddTool("imgUrl", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">
          Sous Catégories parent - {"[Catégorie(s) grand-parent]"}
        </Form.Label>
        <Form.Control
          as="select"
          multiple
          value={props.formAddTool.subCategoriesIds}
          onChange={(e) => handleMultipleSelect(e)}
        >
          {uniqueSubCategories().map((subCategory) => (
            <option key={subCategory.id} value={subCategory.id}>
              {buildOptionString(subCategory)}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
