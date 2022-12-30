import React, { useEffect, useState } from "react";
import "./ListSubCategories.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AXIOS } from "../../app/axios-http";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import SubCategoryItem from "./sub-category-item/SubCategoryItem";
import Spinner from "../generic/spinner/Spinner";

export default function ListSubCategories() {
  let navigate = useNavigate();
  const location = useLocation();
  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 1];

  const { categories } = useSelector((state) => state.categories);

  const findSubCatetegories = () => {
    for (let index = 0; index < categories.length; index++) {
      if (categories[index].url === urlCategory) {
        return categories[index];
      }
    }
  };

  // let [category, setCategory] = useState();

  // useEffect(() => {
  //   AXIOS.get("/public/category/" + urlCategory + "/sub-categories")
  //     .then((res) => {
  //       setCategory(res.data);
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => {});
  // }, []);

  // useEffect(() => {
  //   const category = findSubCatetegories();
  // }, []);

  let category = findSubCatetegories();

  const renderFirstRow = () => {
    if (category.subCategories.length > 2) {
      return (
        <div className="row flex-grow-1">
          {category.subCategories.slice(0, 3).map((subCategory, index) => {
            return (
              <SubCategoryItem
                key={subCategory.id}
                urlCategory={urlCategory}
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
                  key={subCategory.id}
                  urlCategory={urlCategory}
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
                key={subCategory.id}
                urlCategory={urlCategory}
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
                  key={subCategory.id}
                  urlCategory={urlCategory}
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
                key={subCategory.id}
                urlCategory={urlCategory}
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
                  key={subCategory.id}
                  urlCategory={urlCategory}
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
      {category ? (
        <div className="row justify-content-center">
          <div className="d-flex flex-row align-content-center">
            <div className="d-flex align-items-center mr-3">
              <Button
                variant="outline-primary"
                className=""
                onClick={() => navigate("/explorer")}
              >
                Retour
              </Button>
            </div>
            <div
              className="d-flex align-items-center mr-3"
              style={{ height: "80px" }}
            >
              <Image
                src={require(`../../assets/png/categories/${urlCategory}.png`)}
                style={{ height: "80%", width: "auto" }}
              />
            </div>
            <div className="d-flex align-items-center">
              <h1 className="my-0 font-weight-bold">{category.name}</h1>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}

      <hr className="solid" />
      {category ? (
        category.subCategories.length === 0 ? (
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
        ) : null
      ) : null}
      {category ? renderFirstRow() : null}
      {category ? renderSecondRow() : null}
      {category ? renderThirdRow() : null}
    </div>
  );
}
