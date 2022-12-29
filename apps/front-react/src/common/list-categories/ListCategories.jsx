import React, { useEffect, useState } from "react";
import "./ListCategories.css";

import Default from "../../assets/png/common/default.png";
import AIMachineLearning from "../../assets/png/categories/ai.png";
import Cryptocurrencies from "../../assets/png/categories/cryptocurrrencies.png";
import DataAndAnalytics from "../../assets/png/categories/data-and-analytics.png";
import Finances from "../../assets/png/categories/finances.png";
import GraphicsAndDesigns from "../../assets/png/categories/graphics-and-designs.png";
import Marketing from "../../assets/png/categories/marketing.png";
import Productivity from "../../assets/png/categories/productivity.png";
import Programming from "../../assets/png/categories/programming.png";
import Stockmarket from "../../assets/png/categories/stock-market.png";

import { AXIOS } from "../../app/axios-http";
import { useLocation } from "react-router-dom";
import Spinner from "../generic/spinner/Spinner";
import CategoryItem from "./category-item/CategoryItem";

const baseUrlImage = "../../../assets/png/categories/";

export default function ListCategories() {
  let [isRequesting, setIsRequesting] = useState(false);
  let [categories, setCategories] = useState([]);
  const location = useLocation();

  const returnImageAccordingToCategory = (categoryUrl) => {
    let imageSrc = Default;

    switch (categoryUrl) {
      case "ai":
        imageSrc = AIMachineLearning;
        break;
      case "cryptocurrencies":
        imageSrc = Cryptocurrencies;
        break;
      case "data-and-analytics":
        imageSrc = DataAndAnalytics;
        break;
      case "finances":
        imageSrc = Finances;
        break;
      case "graphics-and-designs":
        imageSrc = GraphicsAndDesigns;
        break;
      case "marketing":
        imageSrc = Marketing;
        break;
      case "productivity":
        imageSrc = Productivity;
        break;
      case "programming":
        imageSrc = Programming;
        break;
      case "stock-market":
        imageSrc = Stockmarket;
        break;

      default:
        break;
    }

    return imageSrc;
  };

  useEffect(() => {
    if (location.state !== null) {
      if (location.state.hasOwnProperty("loadedCategories")) {
        setCategories(location.state.loadedCategories);
      }
    } else {
      setIsRequesting(true);
      AXIOS.get("/public/category/all")
        .then((res) => {
          setCategories(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setIsRequesting(false));
    }
  }, []);

  const renderFirstRow = () => {
    if (categories.length > 2) {
      return (
        <div className="row flex-grow-1">
          {categories.slice(0, 3).map((category, index) => {
            return (
              <CategoryItem
                // imageSrc={baseUrlImage + category.url + ".png"}
                imageSrc={returnImageAccordingToCategory(category.url)}
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(0, categories.length).map((category, index) => {
            return (
              <CategoryItem
                // imageSrc={baseUrlImage + category.url + ".png"}
                imageSrc={returnImageAccordingToCategory(category.url)}
                categories={categories}
                key={category.id}
                category={category}
              />
            );
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
            return (
              <CategoryItem
                // imageSrc={baseUrlImage + category.url + ".png"}
                imageSrc={returnImageAccordingToCategory(category.url)}
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(3, categories.length).map((category, index) => {
            return (
              <CategoryItem
                // imageSrc={baseUrlImage + category.url + ".png"}
                imageSrc={returnImageAccordingToCategory(category.url)}
                categories={categories}
                key={category.id}
                category={category}
              />
            );
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
            return (
              <CategoryItem
                // imageSrc={baseUrlImage + category.url + ".png"}
                imageSrc={returnImageAccordingToCategory(category.url)}
                categories={categories}
                key={category.id}
                category={category}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row flex-grow-1">
          {categories.slice(6, categories.length).map((category, index) => {
            return (
              <CategoryItem
                // imageSrc={baseUrlImage + category.url + ".png"}
                imageSrc={returnImageAccordingToCategory(category.url)}
                categories={categories}
                key={category.id}
                category={category}
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
          <h1 className="font-weight-bold">Choisir une catégorie</h1>
        </div>
      </div>
      <hr className="solid" />
      {isRequesting ? <Spinner /> : renderFirstRow()}
      {isRequesting ? null : renderSecondRow()}
      {isRequesting ? null : renderThirdRow()}
    </div>
  );
}
