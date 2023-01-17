import React, { useState, useEffect } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import "./Home.css";
import Image from "react-bootstrap/Image";
import { safeSrcImg } from "../../utils/image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const [mobileView, setMobileView] = useState(window.innerWidth < 720);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleMobileView = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 760) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    window.addEventListener("resize", handleMobileView);

    return () => {
      window.removeEventListener("resize", handleMobileView);
    };
  }, []);

  const widthLogoLanding = () => {
    if (windowWidth < 45) {
      return "80%";
    } else if (windowWidth < 576) {
      return "70%";
    } else if (windowWidth < 650) {
      return "60%";
    } else if (windowWidth < 768) {
      return "50%";
    } else {
      return "40%";
    }
  };

  return (
    <div
      className="h-100 d-flex flex-column px-0 mx-0 pt-3"
      style={{
        backgroundImage: `url(${safeSrcImg(
          "landingbackground1",
          "landingpage"
        )})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <MouseParallaxContainer
        className="parallax h-100"
        globalFactorX={0.3}
        globalFactorY={0.3}
        resetOnLeave
      >
        {mobileView ? (
          <div className="row mx-0 flex-grow-1 h-100">
            <div
              className="col px-0 d-flex justify-content-center flex-column"
              style={{ minWidth: "300px" }}
            >
              {/* <div className="row" style={{ height: "20%" }}></div> */}
              <div className="row mx-0 justify-content-center align-content-center mb-3">
                {
                  <Image
                    className=""
                    src={safeSrcImg("logo-landing-mobile", "landingpage")}
                    style={{ height: "auto", width: widthLogoLanding() }}
                  />
                }
              </div>
              <div className="row mx-5 justify-content-center align-content-center align-items-center mt-3">
                <div className="col d-flex flex-column mx-0">
                  <h1 className="mb-1 fw-bold">DigiWiki</h1>
                  <p className="">
                    Le site qui vous aide à trouver l'outil adapté à tous vos
                    besoins.
                  </p>
                  <Button
                    className="btn btn-primary btn-lg"
                    variant="primary"
                    onClick={() => navigate("/explorer")}
                  >
                    Explorer
                  </Button>
                </div>
              </div>
              {/* <div
                className="row rows-col-3 d-flex flex-column mx-0"
                style={{ height: "5%" }}
              >
                <div className="col mx-0 flex-grow-1"> </div>
                <div className="col mx-0 flex-grow-1"> </div>
                <div className="col mx-0 flex-grow-1 align-items-end"></div>
              </div> */}
            </div>
          </div>
        ) : (
          <div className="row mx-0 flex-grow-1 h-100">
            <div className="col px-0" style={{ minWidth: "300px" }}>
              <div
                className="row d-flex flex-column mx-0 flex-grow-1"
                style={{ height: "40%" }}
              ></div>
              <div className="row rows-col-3 mx-0 flex-grow-1">
                <div className="col d-flex flex-column mx-4 flex-grow-1">
                  <h1 className="mb-2 fw-bold">DigiWiki</h1>
                  <p className="">
                    Le site qui vous aide à trouver l'outil adapté à tous vos
                    besoins.
                  </p>
                  <div>
                    <Button
                      className="btn btn-primary btn-lg"
                      variant="primary"
                      onClick={() => navigate("/explorer")}
                    >
                      Explorer
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-7 px-0">
              <div className="row h-100 flex-grow-1 mx-0 row-cols-lg-6 row-cols-md-3 row-cols-3">
                <div className="col d-flex justify-content-center align-content-center align-items-center">
                  <MouseParallaxChild factorX={0.5} factorY={0.3} className="">
                    <div>
                      <Image
                        className="img-landing-page"
                        src={safeSrcImg("data-science", "sub-categories")}
                      />
                    </div>
                    <div className="row flex-grow-1"></div>
                  </MouseParallaxChild>
                </div>
                <div className="row d-flex align-content-center">
                  <div
                    className="row mx-0 flex-grow-1"
                    style={{ height: "2%" }}
                  ></div>
                  <div className="row flex-grow-1" style={{ height: "55%" }}>
                    <MouseParallaxChild
                      factorX={0.4}
                      factorY={0.3}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg("ai-general", "sub-categories")}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1 ">
                    <MouseParallaxChild
                      factorX={0.3}
                      factorY={0.6}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg("ai-programming", "sub-categories")}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>

                  <div className="row flex-grow-1"></div>
                </div>
                <div className="row d-flex  ">
                  <div
                    className="row mx-0 flex-grow-1"
                    style={{ height: "20%" }}
                  ></div>
                  <div className="row flex-grow-1 ">
                    <MouseParallaxChild
                      factorX={0.4}
                      factorY={0.3}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg("finances", "categories")}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1"></div>
                  <div className="row flex-grow-1"></div>
                </div>
                <div className="row d-flex">
                  <div
                    className="row mx-0 flex-grow-1"
                    style={{ height: "5%" }}
                  ></div>
                  <div className="row flex-grow-1 " style={{ height: "40%" }}>
                    <MouseParallaxChild
                      factorX={0.4}
                      factorY={0.5}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg(
                            "social-network-marketing",
                            "sub-categories"
                          )}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1 ">
                    <MouseParallaxChild
                      factorX={0.2}
                      factorY={0.4}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg(
                            "technical-analysis",
                            "sub-categories"
                          )}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1"></div>
                  <div className="row flex-grow-1"></div>
                </div>
                <div className="row d-flex align-content-center">
                  <div
                    className="row mx-0 flex-grow-1"
                    style={{ height: "25%" }}
                  ></div>
                  <div className="row flex-grow-1 " style={{ height: "45%" }}>
                    <MouseParallaxChild
                      factorX={0.3}
                      factorY={0.5}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg("learning", "sub-categories")}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1 ">
                    <MouseParallaxChild
                      factorX={0.6}
                      factorY={0.4}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg("growth-tips", "sub-categories")}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1"></div>
                  <div className="row flex-grow-1"></div>
                </div>
                <div className="row d-flex align-content-center">
                  <div
                    className="row mx-0 flex-grow-1"
                    style={{ height: "1%" }}
                  ></div>
                  <div className="row flex-grow-1 " style={{ height: "45%" }}>
                    <MouseParallaxChild
                      factorX={0.5}
                      factorY={0.3}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg(
                            "fundamental-analysis",
                            "sub-categories"
                          )}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1 ">
                    <MouseParallaxChild
                      factorX={0.4}
                      factorY={0.2}
                      className=""
                    >
                      <div>
                        <Image
                          className="img-landing-page"
                          src={safeSrcImg("marketing", "categories")}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1"></div>
                  <div className="row flex-grow-1"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </MouseParallaxContainer>
    </div>
  );
}
