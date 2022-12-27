import React from "react";
import "./Categories.css";
import CategoriesItems from "./categories-items/CategoriesItems";

export default function Categories() {
  const categories = [
    {
      id: 0,
      name: "Données et Analytiques",
    },
    {
      id: 1,
      name: "Graphiques et designs",
    },
    {
      id: 2,
      name: "Marketing",
    },
    {
      id: 3,
      name: "Productivité",
    },
    {
      id: 4,
      name: "Finances",
    },
    {
      id: 5,
      name: "Programmation",
    },
    {
      id: 6,
      name: "AI",
    },
    {
      id: 7,
      name: "Cryptomonnaies",
    },
    {
      id: 8,
      name: "Bourses",
    },
  ];

  const renderFirstRow = () => {
    if (categories.length > 2) {
      return (
        <div className="row flex-grow-1">
          {categories.slice(0, 3).map((category, index) => {
            return <CategoriesItems key={category.id} category={category} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(0, categories.length).map((category, index) => {
            return <CategoriesItems key={category.id} category={category} />;
          })}
        </div>
      );
    }
  };

  const renderSecondRow = () => {
    if (categories.length <= 3) {
      return null;
    }

    if (categories.length > 5) {
      return (
        <div className="row flex-grow-1">
          {categories.slice(3, 6).map((category, index) => {
            return <CategoriesItems key={category.id} category={category} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(3, categories.length).map((category, index) => {
            return <CategoriesItems key={category.id} category={category} />;
          })}
        </div>
      );
    }
  };

  const renderThirdRow = () => {
    if (categories.length <= 6) {
      return null;
    }

    if (categories.length > 8) {
      return (
        <div className="row flex-grow-1">
          {categories.slice(6, 9).map((category, index) => {
            return <CategoriesItems key={category.id} category={category} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(6, categories.length).map((category, index) => {
            return <CategoriesItems key={category.id} category={category} />;
          })}
        </div>
      );
    }
  };

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row justify-content-center">
        <div>
          <h1>Categories</h1>
        </div>
      </div>
      {renderFirstRow()}
      {renderSecondRow()}
      {renderThirdRow()}
    </div>
  );
}
