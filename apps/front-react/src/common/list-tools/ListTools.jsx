import React, { useState, useEffect } from "react";
import "./ListTools.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AXIOS } from "../../app/axios-http";
import { setCategories } from "../../features/categories/categoriesSlice";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ToolItem from "./tool-item/ToolItem";
import AddTool from "./admin/AddTool";
import Spinner from "../generic/spinner/Spinner";
import { safeSrcImg } from "../../utils/image";

export default function ListTools() {
  const { categories } = useSelector((state) => state.categories);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const location = useLocation();
  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 2];
  const urlSubCategory = urlSplitted[urlSplitted.length - 1];

  const [isToolsFound, setIsToolsFound] = useState(false);
  const [subCategory, setSubCategory] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    findTools();
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

  return (
    <div className="container h-100 d-flex flex-column">
      {isToolsFound ? (
        isAuthenticated && user.roles.includes("ROLE_ADMIN") ? (
          <AddTool subCategoryId={subCategory.id} />
        ) : null
      ) : null}
      {isToolsFound ? (
        <div className="row justify-content-center">
          <div className="d-flex flex-row align-content-center">
            <div className="d-flex align-items-center mr-3">
              <Button
                variant="outline-primary"
                className=""
                onClick={() => navigate(-1)}
              >
                Retour
              </Button>
            </div>
            <div
              className="d-flex align-items-center mr-3"
              style={{ height: "80px" }}
            >
              <Image
                src={safeSrcImg(subCategory.url, "sub-categories")}
                style={{ height: "80%", width: "auto" }}
              />
            </div>
            <div className="d-flex align-items-center">
              <h1 className="font-weight-bold my-0">{subCategory.name}</h1>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}

      <hr className="solid" />
      {isToolsFound ? (
        subCategory.tools.length > 0 ? (
          <div className="row justify-content-center flex-column">
            {subCategory.tools.map((tool, index) => (
              <ToolItem
                urlCategory={urlCategory}
                urlSubCategory={urlSubCategory}
                tool={tool}
                key={tool.id}
                isAuthenticated={isAuthenticated}
                user={user}
                subCategoryId={subCategory.id}
              />
            ))}
          </div>
        ) : (
          <div className="col p-0">
            <div className="d-flex rounded my-1 justify-content-between align-content-center align-self-center shadow py-3 px-3">
              <div className="d-flex align-items-center">
                <p className="my-0">Pas encore d'outil</p>
              </div>
              <div></div>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}
