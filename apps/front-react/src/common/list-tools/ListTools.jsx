import React, { useState } from "react";
import "./ListTools.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ToolItem from "./tool-item/ToolItem";
import AddTool from "./admin/AddTool";

export default function ListTools() {
  const { categories } = useSelector((state) => state.categories);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  let navigate = useNavigate();
  const location = useLocation();

  const urlSplitted = location.pathname.split("/");
  const urlCategory = urlSplitted[urlSplitted.length - 2];
  const urlSubCategory = urlSplitted[urlSplitted.length - 1];

  const findTools = () => {
    for (let catIndex = 0; catIndex < categories.length; catIndex++) {
      if (categories[catIndex].url === urlCategory) {
        for (
          let subIndex = 0;
          subIndex < categories[catIndex].subCategories.length;
          subIndex++
        ) {
          if (
            categories[catIndex].subCategories[subIndex].url === urlSubCategory
          ) {
            return categories[catIndex].subCategories[subIndex];
          }
        }
      }
    }
  };

  let subCategory = findTools();
  const { tools } = subCategory;

  return (
    <div className="container h-100 d-flex flex-column">
      {isAuthenticated && user.roles.includes("ROLE_ADMIN") ? (
        <AddTool subCategoryId={subCategory.id} />
      ) : null}
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
              src={require(`../../assets/png/sub-categories/${urlSubCategory}.png`)}
              style={{ height: "80%", width: "auto" }}
            />
          </div>
          <div className="d-flex align-items-center">
            <h1 className="font-weight-bold my-0">{subCategory.name}</h1>
          </div>
        </div>
      </div>
      <hr className="solid" />
      {tools.length > 0 ? (
        <div className="row justify-content-center flex-column">
          {tools.map((tool, index) => (
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
      )}
    </div>
  );
}
