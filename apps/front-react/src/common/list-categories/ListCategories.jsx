import React, { useEffect, useState } from "react";
import { AXIOS } from "../../app/axios-http";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../features/categories/categoriesSlice";
import Spinner from "../generic/spinner/Spinner";
import CategoryItem from "./CategoryItem";

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

  return (
    <div className="container h-100 d-flex flex-column pt-3">
      <div>
        <NavLink to="/explorer" className="dashboard-navlink-active">
          Explorer &nbsp;{">"}
        </NavLink>
      </div>
      <hr className="solid" />
      <div
        className="d-flex flex-row justify-content-center align-content-center align-items-center"
        style={{ height: "80px" }}
      >
        <div className="d-flex align-items-center">
          <h1 className="fw-bold">Choisir une catégorie</h1>
        </div>
        {isRequesting ? <Spinner /> : null}
      </div>
      <hr className="solid" />
      <div>
        <div className="row row-cols-md-3 row-cols-1 g-2">
          {!categories || isRequesting
            ? null
            : categories.map((category, index) => {
                return <CategoryItem key={category.id} category={category} />;
              })}
        </div>
      </div>
    </div>
  );
}
