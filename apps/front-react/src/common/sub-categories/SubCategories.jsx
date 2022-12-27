import React from "react";
import "./SubCategories.css";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SubCategoriesItems from "./sub-categories-items/SubCategoriesItems";

export default function SubCategories() {
  let navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state;

  const subCategories = [
    {
      id: 0,
      name: "Marketplace ",
    },
    {
      id: 1,
      name: "Classement crypto",
    },
    {
      id: 2,
      name: "NFT",
    },
    {
      id: 3,
      name: "Portefeuille",
    },
    {
      id: 4,
      name: "Formation",
    },
  ];

  const renderFirstRow = () => {
    if (subCategories.length > 2) {
      return (
        <div className="row flex-grow-1">
          {subCategories.slice(0, 3).map((subCategory, index) => {
            return (
              <SubCategoriesItems
                category={category}
                key={subCategory.id}
                subCategory={subCategory}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {subCategories
            .slice(0, subCategories.length)
            .map((subCategory, index) => {
              return (
                <SubCategoriesItems
                  category={category}
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              );
            })}
        </div>
      );
    }
  };

  const renderSecondRow = () => {
    if (subCategories.length <= 3) {
      return <div className="row flex-grow-1"></div>;
    }

    if (subCategories.length > 5) {
      return (
        <div className="row flex-grow-1">
          {subCategories.slice(3, 6).map((subCategory, index) => {
            return (
              <SubCategoriesItems
                category={category}
                key={subCategory.id}
                subCategory={subCategory}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {subCategories
            .slice(3, subCategories.length)
            .map((subCategory, index) => {
              return (
                <SubCategoriesItems
                  category={category}
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              );
            })}
        </div>
      );
    }
  };

  const renderThirdRow = () => {
    if (subCategories.length <= 6) {
      return <div className="row flex-grow-1"></div>;
    }

    if (subCategories.length > 8) {
      return (
        <div className="row flex-grow-1">
          {subCategories.slice(6, 9).map((subCategory, index) => {
            return (
              <SubCategoriesItems
                category={category}
                key={subCategory.id}
                subCategory={subCategory}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {subCategories
            .slice(6, subCategories.length)
            .map((subCategory, index) => {
              return (
                <SubCategoriesItems
                  category={category}
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              );
            })}
        </div>
      );
    }
  };

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row justify-content-center">
        <div>
          <h1>Sous-Categories - {category.name}</h1>
        </div>
        <div>
          <Button
            variant="outline-primary"
            className="mb-2"
            onClick={() => navigate("/explorer")}
          >
            Retour
          </Button>
        </div>
      </div>
      {renderFirstRow()}
      {renderSecondRow()}
      {renderThirdRow()}
    </div>
  );
}
