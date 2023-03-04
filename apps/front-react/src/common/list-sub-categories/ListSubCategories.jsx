import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AXIOS } from "../../app/axios-http";
import { setCategories } from "../../features/categories/categoriesSlice";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import SubCategoryItem from "./SubCategoryItem";
import Spinner from "../generic/spinner/Spinner";
import AdminHeaderListSubCategories from "./admin/AdminHeaderListSubCategories";
import { safeSrcImg } from "../../utils/image";
import { Helmet } from "react-helmet";
import PlaceHolderList from "../generic/placeholder/PlaceHolderList";
import PlaceHolderTitleList from "../generic/placeholder/PlaceHolderTitleList";

export default function ListSubCategories() {
  const { categories } = useSelector((state) => state.categories);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const location = useLocation();
  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 1];
  const nameCategory = "";

  const [isRequesting, setIsRequesting] = useState(false);

  const [isSubCategoriesFound, setIsSubCategoriesFound] = useState(false);
  const [category, setCategory] = useState(false);
  const [mobileView, setMobileView] = useState(window.innerWidth < 767);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleMobileView = () => {
      if (window.innerWidth < 767) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    window.addEventListener("resize", handleMobileView);

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
      setIsRequesting(true);
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
          setIsRequesting(false);
          if (!isFound) {
            navigate("/explorer");
          }
        })
        .catch((e) => {
          console.log(e);
          setIsRequesting(false);
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
    <div className="container h-100 d-flex flex-column pt-3">
      <Helmet>
        <title>{"Digiwiki - Sous-catégorie " + category.name}</title>
        <meta
          name="description"
          content={
            "Les meilleurs outils digitaux de " +
            category.name +
            " regroupés au même endroit !"
          }
        />
        <link
          rel="canonical"
          href={"https://www.digiwiki.io" + location.pathname}
        />
      </Helmet>
      {category ? (
        isAuthenticated && user.roles.includes("ROLE_ADMIN") ? (
          <AdminHeaderListSubCategories category={category} />
        ) : null
      ) : null}
      {!isRequesting ? (
        isSubCategoriesFound ? (
          <>
            <div>
              <NavLink to="/explorer" className="dashboard-navlink">
                Explorer &nbsp;{">"}
              </NavLink>
              <NavLink
                to={"/explorer/" + category.url}
                className="dashboard-navlink-active"
              >
                &nbsp;{category.name}
              </NavLink>
            </div>
            <hr className="solid" />
            <div className="row justify-content-center">
              <div className="d-flex align-content-center justify-content-center">
                <div
                  className="d-flex align-items-center me-3"
                  style={{ height: "80px" }}
                >
                  <Image
                    src={safeSrcImg(category.url, "categories")}
                    className="logo-list-header"
                    alt={category.url}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <h1 className="my-0 fw-bold">{category.name}</h1>
                </div>
              </div>
            </div>
          </>
        ) : null
      ) : (
        <div className="d-flex justify-content-center">
          <PlaceHolderTitleList />
          <Spinner />
        </div>
      )}

      <hr className="solid" />
      {!isRequesting ? (
        isSubCategoriesFound ? (
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
        ) : null
      ) : (
        <PlaceHolderList />
      )}
    </div>
  );
}
