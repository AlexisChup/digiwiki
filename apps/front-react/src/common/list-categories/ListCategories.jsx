import React, { useEffect, useState } from "react";
import "./ListCategories.css";
import { AXIOS } from "../../app/axios-http";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../features/categories/categoriesSlice";
import Spinner from "../generic/spinner/Spinner";
import CategoryItem from "./category-item/CategoryItem";

export default function ListCategories() {
  const dispatch = useDispatch();
  let [isRequesting, setIsRequesting] = useState(false);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!categories) {
      setIsRequesting(true);
      AXIOS.get("/public/category/all")
        .then((res) => {
          dispatch(setCategories(res.data));
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsRequesting(false);
        });
    }
  }, []);

  const renderFirstRow = () => {
    if (categories) {
      if (categories.length > 2) {
        return (
          <div className="row flex-grow-1">
            {categories.slice(0, 3).map((category, index) => {
              return <CategoryItem key={category.id} category={category} />;
            })}
          </div>
        );
      } else {
        return (
          <div className="row flex-grow-1">
            {categories.slice(0, categories.length).map((category, index) => {
              return <CategoryItem key={category.id} category={category} />;
            })}
          </div>
        );
      }
    } else {
      return null;
    }
  };

  const renderSecondRow = () => {
    if (categories) {
      if (categories.length <= 3) {
        return null;
      }

      if (categories.length > 5) {
        return (
          <div className="row flex-grow-1">
            {categories.slice(3, 6).map((category, index) => {
              return <CategoryItem key={category.id} category={category} />;
            })}
          </div>
        );
      } else {
        return (
          <div className="row flex-grow-1">
            {categories.slice(3, categories.length).map((category, index) => {
              return <CategoryItem key={category.id} category={category} />;
            })}
          </div>
        );
      }
    } else {
      return null;
    }
  };

  const renderThirdRow = () => {
    if (categories) {
      if (categories.length <= 6) {
        return null;
      }

      if (categories.length > 8) {
        return (
          <div className="row flex-grow-1">
            {categories.slice(6, 9).map((category, index) => {
              return <CategoryItem key={category.id} category={category} />;
            })}
          </div>
        );
      } else {
        return (
          <div className="row flex-grow-1">
            {categories.slice(6, categories.length).map((category, index) => {
              return <CategoryItem key={category.id} category={category} />;
            })}
          </div>
        );
      }
    } else {
      return null;
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
      {!categories ? <Spinner /> : renderFirstRow()}
      {!categories ? null : renderSecondRow()}
      {!categories ? null : renderThirdRow()}
    </div>
  );
}
