import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Label } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "isomorphic-dompurify";
import { AXIOS } from "../../app/axios-http";
import { setCategories } from "../../features/categories/categoriesSlice";
import { Button, Icon } from "semantic-ui-react";
import Image from "react-bootstrap/Image";
import Spinner from "../generic/spinner/Spinner";
import { safeSrcImg } from "../../utils/image";
import { Helmet } from "react-helmet";
import { TAG_TYPES } from "../dashboard/admin/tags/const";
import PlaceHolderTool from "../generic/placeholder/PlaceHolderTool";

export default function Tool() {
  const { categories } = useSelector((state) => state.categories);

  const location = useLocation();
  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 3];
  const urlSubCategory = urlSplitted[urlSplitted.length - 2];
  const urlTool = urlSplitted[urlSplitted.length - 1];

  const [isRequesting, setIsRequesting] = useState(false);

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
      setIsRequesting(true);
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
        <title>{"Digiwiki - " + tool.name}</title>
        <meta name="description" content={tool.shortDescription} />
        <link
          rel="canonical"
          href={
            "https://www.digiwiki.io/explorer/" +
            category.url +
            "/" +
            subCategory.url +
            "/" +
            tool.url
          }
        />
      </Helmet>
      {!isRequesting ? (
        isToolFound ? (
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
                      <Button animated primary size="small" className="ms-1">
                        <Button.Content visible>Site Web</Button.Content>
                        <Button.Content hidden>
                          <Icon name="linkify" />
                        </Button.Content>
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
                {tool.tags.length ? (
                  <div className="mb-1">
                    <div>
                      <h2>Tags</h2>
                    </div>
                    <div className="text-center mb-1">
                      {tool.tags.map((tag, index) => (
                        <Label
                          key={index}
                          className="mx-3 mt-2 mb-2 text-wrap"
                          as="p"
                          color={tag.color}
                          tag
                          // tag={tag.type === TAG_TYPES.Tag}
                          // ribbon={tag.type === TAG_TYPES.Ribbon}
                        >
                          {tag.name}
                        </Label>
                      ))}
                    </div>
                  </div>
                ) : null}
                <hr className="solid" />
                <div className="d-flex flex-row justify-content-center">
                  <div>
                    <a href={tool.affiliateRef} target="_blank">
                      <Button animated primary className="ms-1">
                        <Button.Content visible>Site Web</Button.Content>
                        <Button.Content hidden>
                          <Icon name="linkify" />
                        </Button.Content>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="my-3">
            <Spinner />
          </div>
          <PlaceHolderTool />
        </div>
      )}
    </div>
  );
}
