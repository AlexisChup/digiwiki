import React, { useState, useEffect } from "react";
import EmptySubCategoryItem from "./EmptySubCategoryItem";
import { useSelector, useDispatch } from "react-redux";
import { AXIOS } from "../../../../app/axios-http";
import { Spinner } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

export default function EmptySubCategories() {
  let [isRequesting, setIsRequesting] = useState(false);
  const [emptySubCategories, setEmptySubCategories] = useState([]);

  useEffect(() => {
    setIsRequesting(true);

    AXIOS.get("public/sub-category/all")
      .then((res) => {
        findEmptySubCategories(res.data);
      })
      .catch((e) => console.log("ERROR public/sub-category/all: ", e))
      .finally(() => setIsRequesting(false));
  }, []);

  const findEmptySubCategories = (subCatagories) => {
    let listEmptySubCategories = [];

    for (let index = 0; index < subCatagories.length; index++) {
      if (subCatagories[index].category.length === 0) {
        listEmptySubCategories.push(subCatagories[index]);
      }
    }

    setEmptySubCategories(listEmptySubCategories);
  };

  return (
    <div>
      <div>
        <h2>Sous-catégories sans catégorie parent</h2>
      </div>
      <div className="row justify-content-center flex-column">
        {isRequesting ? (
          <Spinner />
        ) : emptySubCategories.length > 0 ? (
          emptySubCategories.map((subCategory, index) => (
            <EmptySubCategoryItem
              key={subCategory.id}
              subCategory={subCategory}
            />
          ))
        ) : (
          <div className="d-flex flex-row">
            <h3 className="small">
              Aucune sous-catégorie sans catégorie parent
            </h3>
            &nbsp;
            <FaCheck />
          </div>
        )}
      </div>
    </div>
  );
}