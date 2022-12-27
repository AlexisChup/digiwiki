import React from "react";
import "./Tool.css";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Tool() {
  let navigate = useNavigate();
  const location = useLocation();
  const { category, subCategory, tool } = location.state;

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row justify-content-between">
        <div className="col-3">
          <Button
            variant="outline-primary"
            className="mb-2"
            onClick={() =>
              navigate("/explorer/" + category.name + "/" + subCategory.name, {
                state: {
                  category: category,
                  subCategory: subCategory,
                },
              })
            }
          >
            Retour
          </Button>
        </div>
        <div className="col-6 text-center">
          <h1>{tool.name}</h1>
        </div>
        <div className="col-3 text-end">
          <Button>Site Web</Button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 shadow p-3 rounded">
          <div>
            <p>{tool.description}</p>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <Button
                variant="outline-primary"
                className="mb-2"
                onClick={() =>
                  navigate(
                    "/explorer/" + category.name + "/" + subCategory.name,
                    {
                      state: {
                        category: category,
                        subCategory: subCategory,
                      },
                    }
                  )
                }
              >
                Retour
              </Button>
            </div>
            <div className="col text-end">
              <Button>Site Web</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
