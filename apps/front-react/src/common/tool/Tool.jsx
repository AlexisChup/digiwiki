import React from "react";
import "./Tool.css";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function Tool() {
  let navigate = useNavigate();
  const location = useLocation();
  const { tool } = location.state;

  return (
    <div className="container h-100 d-flex flex-column">
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
      <div className="row justify-content-center"></div>
    </div>
  );
}
