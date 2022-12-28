import React from "react";
import "./ListSubCategories.css";
import { useNavigate, useLocation } from "react-router-dom";
import { AXIOS } from "../../app/axios-http";
import Button from "react-bootstrap/Button";
import SubCategoryItem from "./sub-category-item/SubCategoryItem";

export default function ListSubCategories() {
  let navigate = useNavigate();
  const location = useLocation();
  const { category, categories } = location.state;

  const renderFirstRow = () => {
    if (category.subCategories.length > 2) {
      return (
        <div className="row flex-grow-1">
          {category.subCategories.slice(0, 3).map((subCategory, index) => {
            return (
              <SubCategoryItem
                tools={subCategory.tools}
                urlCategory={category.url}
                key={subCategory.id}
                subCategory={subCategory}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {category.subCategories
            .slice(0, category.subCategories.length)
            .map((subCategory, index) => {
              return (
                <SubCategoryItem
                  tools={subCategory.tools}
                  urlCategory={category.url}
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              );
            })}
        </div>
      );
    }
  };

  const renderSecondRow = () => {
    if (category.subCategories.length <= 3) {
      return <div className="row flex-grow-1"></div>;
    }

    if (category.subCategories.length > 5) {
      return (
        <div className="row flex-grow-1">
          {category.subCategories.slice(3, 6).map((subCategory, index) => {
            return (
              <SubCategoryItem
                tools={subCategory.tools}
                urlCategory={category.url}
                key={subCategory.id}
                subCategory={subCategory}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {category.subCategories
            .slice(3, category.subCategories.length)
            .map((subCategory, index) => {
              return (
                <SubCategoryItem
                  tools={subCategory.tools}
                  urlCategory={category.url}
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              );
            })}
        </div>
      );
    }
  };

  const renderThirdRow = () => {
    if (category.subCategories.length <= 6) {
      return <div className="row flex-grow-1"></div>;
    }

    if (category.subCategories.length > 8) {
      return (
        <div className="row flex-grow-1">
          {category.subCategories.slice(6, 9).map((subCategory, index) => {
            return (
              <SubCategoryItem
                tools={subCategory.tools}
                urlCategory={category.url}
                key={subCategory.id}
                subCategory={subCategory}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {category.subCategories
            .slice(6, category.subCategories.length)
            .map((subCategory, index) => {
              return (
                <SubCategoryItem
                  tools={subCategory.tools}
                  urlCategory={category.url}
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              );
            })}
        </div>
      );
    }
  };

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row justify-content-center">
        <div>
          <h1>Liste des sous catégories de {category.name}</h1>
        </div>
        <div>
          <Button
            variant="outline-primary"
            className="mb-2"
            onClick={() =>
              navigate("/explorer", { state: { loadedCategories: categories } })
            }
          >
            Retour
          </Button>
        </div>
      </div>
      {category.subCategories.length === 0 ? (
        <div className="row flex-grow-1">
          <div className="col p-0">
            <div className="d-flex rounded my-1 justify-content-between align-content-center align-self-center shadow py-3 px-3">
              <div className="d-flex align-items-center">
                <p className="my-0">Pas encore de sous catégories</p>
              </div>
              <div></div>
            </div>
          </div>{" "}
        </div>
      ) : null}
      {renderFirstRow()}
      {renderSecondRow()}
      {renderThirdRow()}
    </div>
  );
}
