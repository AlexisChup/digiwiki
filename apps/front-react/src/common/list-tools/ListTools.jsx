import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AXIOS } from "../../app/axios-http";
import { setCategories } from "../../features/categories/categoriesSlice";
import { FaArrowRight } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ToolItem from "./ToolItem";
import Spinner from "../generic/spinner/Spinner";
import { safeSrcImg } from "../../utils/image";
import AdminHeaderListTools from "./admin/AdminHeaderListTools";
import { Helmet } from "react-helmet";
import { TAG_TYPES } from "../dashboard/admin/tags/const";

export default function ListTools() {
  const { categories } = useSelector((state) => state.categories);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const location = useLocation();
  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 2];
  const urlSubCategory = urlSplitted[urlSplitted.length - 1];
  const nameSubCategory = "";

  const [isToolsFound, setIsToolsFound] = useState(false);
  const [category, setCategory] = useState(false);
  const [subCategory, setSubCategory] = useState(false);

  const [mobileView, setMobileView] = useState(window.innerWidth < 576);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    findTools();
    const handleMobileView = () => {
      if (window.innerWidth < 576) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    window.addEventListener("resize", handleMobileView);

    return () => {
      window.removeEventListener("resize", handleMobileView);
    };
  }, []);

  // used when modifying tools
  useEffect(() => {
    if (categories) {
      for (let catIndex = 0; catIndex < categories.length; catIndex++) {
        if (categories[catIndex].url === urlCategory) {
          for (
            let subIndex = 0;
            subIndex < categories[catIndex].subCategories.length;
            subIndex++
          ) {
            if (
              categories[catIndex].subCategories[subIndex].url ===
              urlSubCategory
            ) {
              setCategory(categories[catIndex]);
              setSubCategory(categories[catIndex].subCategories[subIndex]);
              break;
            }
          }
        }
      }
    }
  }, [categories]);

  const findTools = () => {
    let isFound = false;

    if (!categories) {
      AXIOS.get("/public/category/all")
        .then((res) => {
          dispatch(setCategories(res.data));

          for (let catIndex = 0; catIndex < res.data.length; catIndex++) {
            if (res.data[catIndex].url === urlCategory) {
              for (
                let subIndex = 0;
                subIndex < res.data[catIndex].subCategories.length;
                subIndex++
              ) {
                if (
                  res.data[catIndex].subCategories[subIndex].url ===
                  urlSubCategory
                ) {
                  setCategory(res.data[catIndex]);
                  setSubCategory(res.data[catIndex].subCategories[subIndex]);
                  setIsToolsFound(true);
                  isFound = true;
                  break;
                }
              }
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
      for (let catIndex = 0; catIndex < categories.length; catIndex++) {
        if (categories[catIndex].url === urlCategory) {
          for (
            let subIndex = 0;
            subIndex < categories[catIndex].subCategories.length;
            subIndex++
          ) {
            if (
              categories[catIndex].subCategories[subIndex].url ===
              urlSubCategory
            ) {
              setCategory(categories[catIndex]);
              setSubCategory(categories[catIndex].subCategories[subIndex]);
              setIsToolsFound(true);
              isFound = true;
              break;
            }
          }
        }
      }

      if (!isFound) {
        navigate("/explorer");
      }
    }
  };

  const sortByRibbonTag = (array) => {
    let copyOfOriginalArray = [...array];
    let toolIdsSorted = [];
    let isContainsRibbonTag = false;
    let isContainsTagTag = false;

    for (let index = 0; index < copyOfOriginalArray.length; index++) {
      const tool = copyOfOriginalArray[index];
      isContainsRibbonTag = false;
      for (let iTag = 0; iTag < tool.tags.length; iTag++) {
        if (
          tool.tags[iTag].type === TAG_TYPES.Ribbon &&
          !toolIdsSorted.includes(index)
        ) {
          isContainsRibbonTag = true;
          break;
        }
      }

      if (isContainsRibbonTag) {
        toolIdsSorted.push(index);
      }
    }

    for (let index = 0; index < copyOfOriginalArray.length; index++) {
      const tool = copyOfOriginalArray[index];
      isContainsTagTag = false;
      for (let iTag = 0; iTag < tool.tags.length; iTag++) {
        if (
          tool.tags[iTag].type === TAG_TYPES.Tag &&
          !toolIdsSorted.includes(index)
        ) {
          isContainsTagTag = true;
          break;
        }
      }

      if (isContainsTagTag) {
        toolIdsSorted.push(index);
      }
    }

    for (let index = 0; index < copyOfOriginalArray.length; index++) {
      if (!toolIdsSorted.includes(index)) {
        toolIdsSorted.push(index);
      }
    }

    let sortedArray = Array(toolIdsSorted.length);
    for (let index = 0; index < toolIdsSorted.length; index++) {
      sortedArray[index] = copyOfOriginalArray[toolIdsSorted[index]];
    }
    return sortedArray;
  };

  return (
    <div className="container h-100 d-flex flex-column pt-3">
      <Helmet>
        <title>{"Digiwiki - Outils " + subCategory.name}</title>
        <meta
          name="description"
          content={
            "La liste des meilleurs outils digitaux de " +
            subCategory.name +
            " dans " +
            category.name +
            "."
          }
        />
        <link
          rel="canonical"
          href={
            "https://www.digiwiki.io/explorer/" +
            category.url +
            "/" +
            subCategory.url
          }
        />
      </Helmet>
      {isToolsFound ? (
        isAuthenticated && user.roles.includes("ROLE_ADMIN") ? (
          <AdminHeaderListTools subCategory={subCategory} />
        ) : null
      ) : null}
      {isToolsFound ? (
        <>
          <div>
            <NavLink to="/explorer" className="dashboard-navlink">
              Explorer &nbsp;{">"}
            </NavLink>
            <NavLink
              to={"/explorer/" + category.url}
              className="dashboard-navlink"
            >
              &nbsp;{category.name}&nbsp;{">"}
            </NavLink>
            <NavLink
              to={"/explorer/" + category.url + "/" + subCategory.url}
              className="dashboard-navlink-active"
            >
              &nbsp;{subCategory.name}
            </NavLink>
          </div>
          <hr className="solid" />
          <div className="row justify-content-center">
            <div className="d-flex flex-row align-content-center justify-content-center">
              <div
                className="d-flex align-items-center me-3"
                style={{ height: "80px" }}
              >
                <Image
                  src={safeSrcImg(subCategory.url, "sub-categories")}
                  className="logo-list-header"
                  alt={subCategory.url}
                />
              </div>
              <div className="d-flex align-items-center">
                <h1 className="fw-bold my-0">{subCategory.name}</h1>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      )}
      <hr className="solid" />
      <div className="container h-100 px-0">
        {isToolsFound ? (
          subCategory.tools.length > 0 ? (
            <div className="row row-cols-1 g-2">
              {sortByRibbonTag(subCategory.tools).map((tool, index) => (
                <ToolItem
                  urlCategory={urlCategory}
                  urlSubCategory={urlSubCategory}
                  tool={tool}
                  key={tool.id}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  subCategoryId={subCategory.id}
                  mobileView={mobileView}
                />
              ))}
            </div>
          ) : (
            <div className="col p-0">
              <div className="d-flex rounded my-1 justify-content-between align-content-center align-self-center shadow py-3 px-3">
                <div className="d-flex flex-column">
                  <div>
                    <p className="my-0">Pas encore d'outil disponible.</p>
                  </div>
                  <div>
                    <p className="my-0 fw-bold">
                      N'hésitez pas à nous en proposer
                      <Button
                        className="ms-2"
                        onClick={() => navigate("/contact")}
                      >
                        ici &nbsp;
                        <FaArrowRight />
                      </Button>
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
