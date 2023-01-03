import React, { useState, useEffect } from "react";
import "./Tool.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AXIOS } from "../../app/axios-http";
import { setCategories } from "../../features/categories/categoriesSlice";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Spinner from "../generic/spinner/Spinner";

export default function Tool() {
  const { categories } = useSelector((state) => state.categories);

  const location = useLocation();
  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 3];
  const urlSubCategory = urlSplitted[urlSplitted.length - 2];
  const urlTool = urlSplitted[urlSplitted.length - 1];

  const [isToolFound, setIsToolFound] = useState(false);
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
    <div className="container h-100 d-flex flex-column">
      {isToolFound ? (
        <div className="row justify-content-between">
          <div className="col-2">
            <Button
              variant="outline-primary"
              className="mb-2"
              onClick={() => navigate(-1)}
            >
              Retour
            </Button>
          </div>
          <div className="col-8 shadow p-3 rounded">
            <div className="d-flex flex-row">
              <div
                className="d-flex align-items-center mr-3"
                style={{ height: "80px" }}
              >
                <Image
                  src={
                    tool.imgUrl
                      ? tool.imgUrl
                      : require(`../../assets/png/common/default.png`)
                  }
                  // src={require(`../../../assets/png/categories/${props.category.url}.png`)}
                  style={{ height: "80%", width: "auto" }}
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <div>
                  <h3 className="my-0">{tool.name}</h3>
                </div>
                <div>{tool.shortDescription}</div>
              </div>
            </div>
            <div>
              <p>{tool.description}</p>
            </div>
            <div className="row justify-content-between">
              <div className="col">
                <Button
                  variant="outline-primary"
                  className="mb-2"
                  onClick={() => navigate(-1)}
                >
                  Retour
                </Button>
              </div>
              <div className="col text-end">
                <a href={tool.affiliateRef}>
                  <Button>Site Web</Button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-2 text-end">
            <a href={tool.affiliateRef}>
              <Button>Site Web</Button>
            </a>
          </div>
        </div>
      ) : (
        <Spinner />
      )}

      <div className="row justify-content-center"></div>
    </div>
  );
}
