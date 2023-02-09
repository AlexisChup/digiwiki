import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "isomorphic-dompurify";
import { AXIOS } from "../../app/axios-http";
import { setCategories } from "../../features/categories/categoriesSlice";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Spinner from "../generic/spinner/Spinner";
import { safeSrcImg } from "../../utils/image";
import {Helmet} from "react-helmet";

export default function Tool() {
  const { categories } = useSelector((state) => state.categories);

  const location = useLocation();
  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 3];
  const urlSubCategory = urlSplitted[urlSplitted.length - 2];
  const urlTool = urlSplitted[urlSplitted.length - 1];

  const [isToolFound, setIsToolFound] = useState(false);
  const [category, setCategory] = useState(false);
  const [subCategory, setSubCategory] = useState(false);
  const [tool, setTool] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    findTool();
  }, []);

  const findTool = () => {
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
                  for (
                    let toolIndex = 0;
                    toolIndex <
                    res.data[catIndex].subCategories[subIndex].tools.length;
                    toolIndex++
                  ) {
                    if (
                      res.data[catIndex].subCategories[subIndex].tools[
                        toolIndex
                      ].url === urlTool
                    ) {
                      setCategory(res.data[catIndex]);
                      setSubCategory(
                        res.data[catIndex].subCategories[subIndex]
                      );
                      setTool(
                        res.data[catIndex].subCategories[subIndex].tools[
                          toolIndex
                        ]
                      );
                      setIsToolFound(true);
                      isFound = true;
                      break;
                    }
                  }
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
              for (
                let toolIndex = 0;
                toolIndex <
                categories[catIndex].subCategories[subIndex].tools.length;
                toolIndex++
              ) {
                if (
                  categories[catIndex].subCategories[subIndex].tools[toolIndex]
                    .url === urlTool
                ) {
                  setCategory(categories[catIndex]);
                  setSubCategory(categories[catIndex].subCategories[subIndex]);
                  setTool(
                    categories[catIndex].subCategories[subIndex].tools[
                      toolIndex
                    ]
                  );
                  setIsToolFound(true);
                  isFound = true;
                  break;
                }
              }
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
    <div className="container h-100 d-flex flex-column pt-3">
       <Helmet>
        <title>Digiwiki - La référence des outils digitaux</title>
        <meta name="description" content={tool.name + " - L'un des meilleurs outils de "+ subCategory.name + " du moment !" }/>
        <link rel="canonical" href={"https://www.digiwiki.io/explorer/" + category.url + "/" + subCategory.url + "/" + tool.url}/>
      </Helmet>
      {isToolFound ? (
        <>
          <div className="col-responsive mx-3">
            <div>
              <NavLink to="/explorer" className="dashboard-navlink">
                Explorer &nbsp;{">"}
              </NavLink>
              <NavLink
                to={"/explorer/" + category.url}
                className="dashboard-navlink"
              >
                &nbsp;{category.name} &nbsp;{">"}
              </NavLink>
              <NavLink
                to={"/explorer/" + category.url + "/" + subCategory.url}
                className="dashboard-navlink"
              >
                &nbsp;{subCategory.name} &nbsp;{">"}
              </NavLink>
              <NavLink
                to={
                  "/explorer/" +
                  category.url +
                  "/" +
                  subCategory.url +
                  "/" +
                  tool.url
                }
                className="dashboard-navlink-active"
              >
                &nbsp;{tool.name}
              </NavLink>
            </div>
            <hr className="solid" />
            <div className="row justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div
                  className="d-flex align-items-center me-3"
                  style={{ height: "80px" }}
                >
                  <Image
                    src={safeSrcImg(tool.imgUrl, "tools")}
                    className="logo-tool-page"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center pe-2">
                  <div>
                    <h3 className="my-0 fw-bold">{tool.name}</h3>
                  </div>
                  <div>{tool.shortDescription}</div>
                </div>
                <div className="ms-auto">
                  <a href={tool.affiliateRef} target="_blank">
                    <Button size="sm" className="ms-1">
                      Site Web
                    </Button>
                  </a>
                </div>
              </div>
              <hr className="solid" />
              {
                <div
                  className="container-description mb-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(tool.description),
                  }}
                />
              }
              <hr className="solid" />
              <div className="d-flex flex-row justify-content-center">
                <div>
                  <a href={tool.affiliateRef} target="_blank">
                    <Button size="md" className="ms-1">
                      Site Web
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
