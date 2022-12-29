import React, { useEffect, useState } from "react";
import "./ListCategories.css";
import { AXIOS } from "../../app/axios-http";
import { useLocation } from "react-router-dom";
import Spinner from "../generic/spinner/Spinner";
import CategoryItem from "./category-item/CategoryItem";

export default function ListCategories() {
  let [isRequesting, setIsRequesting] = useState(false);
  let [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      if (location.state.hasOwnProperty("loadedCategories")) {
        setCategories(location.state.loadedCategories);
      }
    } else {
      setIsRequesting(true);
      AXIOS.get("/public/category/all")
        .then((res) => {
          setCategories(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setIsRequesting(false));
    }
  }, []);

  const renderFirstRow = () => {
    if (categories.length > 2) {
      return (
        <div className="row flex-grow-1">
          {categories.slice(0, 3).map((category, index) => {
            return (
              <CategoryItem
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(0, categories.length).map((category, index) => {
            return (
              <CategoryItem
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    }
  };

  const renderSecondRow = () => {
    if (categories.length <= 3) {
      return null;
    }

    if (categories.length > 5) {
      return (
        <div className="row flex-grow-1">
          {categories.slice(3, 6).map((category, index) => {
            return (
              <CategoryItem
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(3, categories.length).map((category, index) => {
            return (
              <CategoryItem
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    }
  };

  const renderThirdRow = () => {
    if (categories.length <= 6) {
      return null;
    }

    if (categories.length > 8) {
      return (
        <div className="row flex-grow-1">
          {categories.slice(6, 9).map((category, index) => {
            return (
              <CategoryItem
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(6, categories.length).map((category, index) => {
            return (
              <CategoryItem
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row justify-content-center" style={{ height: "80px" }}>
        <div className="d-flex align-items-center">
          <h1 className="font-weight-bold">Choisir une catégorie</h1>
        </div>
      </div>
      <hr className="solid" />
      {isRequesting ? <Spinner /> : renderFirstRow()}
      {isRequesting ? null : renderSecondRow()}
      {isRequesting ? null : renderThirdRow()}
    </div>
  );
}
