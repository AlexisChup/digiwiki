import React, { useEffect, useState, useLayoutEffect } from "react";
import "./ListSubCategories.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AXIOS } from "../../app/axios-http";
import { setCategories } from "../../features/categories/categoriesSlice";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import SubCategoryItem from "./sub-category-item/SubCategoryItem";
import Spinner from "../generic/spinner/Spinner";
import AdminHeaderListSubCategories from "./admin/AdminHeaderListSubCategories";
import { safeSrcImg } from "../../utils/image";

export default function ListSubCategories() {
  const { categories } = useSelector((state) => state.categories);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 767);

  const location = useLocation();
  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 1];

  const [isSubCategoriesFound, setIsSubCategoriesFound] = useState(false);
  const [category, setCategory] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const handleMobileView = () => {
      if (window.innerWidth < 767) {
        console.log("CALLL");
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    window.addEventListener("resize", handleMobileView);

    return () => {
      window.removeEventListener("resize", handleMobileView);
    };
  }, []);

  useEffect(() => {
    findSubCatetegories();
  }, []);

  // used when modifying category
  useEffect(() => {
    if (categories) {
      for (let index = 0; index < categories.length; index++) {
        if (categories[index].url === urlCategory) {
          setCategory(categories[index]);
          break;
        }
      }
    }
  }, [categories]);

  const findSubCatetegories = () => {
    let isFound = false;
    if (!categories) {
      AXIOS.get("/public/category/all")
        .then((res) => {
          dispatch(setCategories(res.data));

          for (let index = 0; index < res.data.length; index++) {
            if (res.data[index].url === urlCategory) {
              isFound = true;
              setIsSubCategoriesFound(true);
              setCategory(res.data[index]);
              break;
            }
          }
          if (!isFound) {
            navigate("/explorer");
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {});
    } else {
      for (let index = 0; index < categories.length; index++) {
        if (categories[index].url === urlCategory) {
          setCategory(categories[index]);
          setIsSubCategoriesFound(true);
          isFound = true;
          break;
        }
      }
      if (!isFound) {
        navigate("/explorer");
      }
    }
  };

  return (
    <div className="container h-100 d-flex flex-column">
      {category ? (
        isAuthenticated && user.roles.includes("ROLE_ADMIN") ? (
          <AdminHeaderListSubCategories category={category} />
        ) : null
      ) : null}
      {isSubCategoriesFound ? (
        <div className="row justify-content-center">
          <div className="d-flex align-content-center">
            <div className="d-flex align-items-center me-3">
              <Button
                variant="outline-primary"
                className=""
                onClick={() => navigate("/explorer")}
                size="sm"
              >
                Retour
              </Button>
            </div>
            <div
              className="d-flex align-items-center me-3"
              style={{ height: "80px" }}
            >
              <Image
                src={safeSrcImg(category.url, "categories")}
                style={{ height: isMobileView ? "40%" : "80%", width: "auto" }}
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
      {isSubCategoriesFound ? (
        category.subCategories.length === 0 ? (
          <div className="row flex-grow-1">
            <div className="col p-0">
              <div className="d-flex rounded my-1 justify-content-between align-content-center align-self-center shadow py-3 px-3">
                <div className="d-flex align-items-center">
                  <p className="my-0">Pas encore de sous catégories</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container h-100 px-0">
            <div className="row row-cols-md-3 row-cols-1 g-2">
              {category.subCategories.map((subCategory, index) => {
                return (
                  <SubCategoryItem
                    key={subCategory.id}
                    urlCategory={urlCategory}
                    subCategory={subCategory}
                  />
                );
              })}
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}
