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

  useEffect(() => {
    const handleMobileView = () => {
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

  return (
    <div
      className="h-100 d-flex flex-column px-0 mx-0"
      style={{
        backgroundImage: `url(${safeSrcImg(
          "landingbackground1",
          "landingpage"
        )})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
      }}
    >
      <MouseParallaxContainer
            className="parallax h-100"
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
          
          {mobileView ? 
          (
            <div className="row mx-0 flex-grow-1 h-100">
              <div className="col px-0" style={{ minWidth: "300px" }}>
                <div className="row" style={{ height: "20%" }}></div>
                <div className="row mx-5 justify-content-center align-content-center align-items-center">
                  <div className="col d-flex flex-column mx-0">
                    <h1 className="mb-1 headings-font-weight">
                      DigiWiki
                    </h1> 
                    <p className="headings-font-weight">
                      Le site qui vous aide à trouver l'outil adapté à tous vos besoins.
                    </p>
                    <Button 
                      class="btn btn-outline-primary btn-lg" 
                      variant="outline-primary" 
                      onClick={() => navigate("/explorer")}>
                        Explorer
                    </Button>
                  </div>
                </div>
                <div className="row rows-col-3 d-flex flex-column mx-0" style={{ height: "5%"}}>
                  <div className="col mx-0 flex-grow-1"> </div>
                  <div className="col mx-0 flex-grow-1"> </div>
                  <div className="col mx-0 flex-grow-1 align-items-end"> 
                  </div>
                </div>
                <div className="row mx-0 justify-content-center align-content-center">
                    {<Image
                      className=""
                      src={safeSrcImg("manalone", "landingpage")}
                      style={{ height: "50%", width: "auto" }}
                    />}
                </div>
              </div>
            </div>
                ) : (
            <div className="row mx-0 flex-grow-1 h-100">
            <div className="col px-0" style={{ minWidth: "300px" }}>
              <div className="row d-flex flex-column mx-0 flex-grow-1" style={{ height: "40%" }}></div>
              <div className="row rows-col-3 mx-0 flex-grow-1">
                <div className="col mx-0 flex-grow-1"> </div>
                <div className="col d-flex flex-column mx-0 flex-grow-1">
                  <h1 className="mb-2 headings-font-weight">
                    DigiWiki
                  </h1> 
                  <p className="headings-font-weight">
                    Le site qui vous aide à trouver l'outil adapté à tous vos besoins.
                  </p>
                  <Button 
                    class="btn btn-outline-primary btn-lg" 
                    variant="outline-primary" 
                    onClick={() => navigate("/explorer")}>
                      Explorer
                  </Button>
                </div>
                <div className="col mx-0 flex-grow-1"> </div>
              </div>
            </div>

            <div className="col-7 px-0">
              <div className="row h-100 flex-grow-1 mx-0 row-cols-lg-6 row-cols-md-3 row-cols-1">
                <div className="col d-flex justify-content-center align-content-center align-items-center">
                  <MouseParallaxChild
                    factorX={0.5}
                    factorY={0.3}
                    className=""
                  >
                    <div>
                      <Image
                        src={safeSrcImg("data-science", "sub-categories")}
                        style={{ height: "90px", width: "auto" }}
                      />
                    </div>
                    <div className="row flex-grow-1"></div>
                  </MouseParallaxChild>
                </div>
                <div className="row d-flex align-content-center">
                  <div className="row mx-0 flex-grow-1" style={{ height: "2%" }}></div>
                  <div className="row flex-grow-1"style={{ height: "55%" }}>
                    <MouseParallaxChild
                      factorX={0.4}
                      factorY={0.3}
                      className=""
                    >
                      <div>
                        <Image
                          src={safeSrcImg("ai-general", "sub-categories")}
                          style={{ height: "90px", width: "auto" }}
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
                          src={safeSrcImg("ai-programming", "sub-categories")}
                          style={{ height: "90px", width: "auto" }}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                 
                  <div className="row flex-grow-1"></div>
                </div>
                <div className="row d-flex  ">
                  <div className="row mx-0 flex-grow-1" style={{ height: "20%" }}></div>
                  <div className="row flex-grow-1 ">
                    <MouseParallaxChild
                      factorX={0.4}
                      factorY={0.3}
                      className=""
                    >
                      <div>
                        <Image
                          src={safeSrcImg("finances", "categories")}
                          style={{ height: "90px", width: "auto" }}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1"></div>
                  <div className="row flex-grow-1"></div>
                </div>
                <div className="row d-flex">
                <div className="row mx-0 flex-grow-1" style={{ height: "5%" }}></div>
                  <div className="row flex-grow-1 " style={{ height: "40%" }}>
                    <MouseParallaxChild
                      factorX={0.4}
                      factorY={0.5}
                      className=""
                    >
                      <div>
                        <Image
                          src={safeSrcImg("social-network-marketing", "sub-categories")}
                          style={{ height: "100px", width: "auto" }}
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
                          src={safeSrcImg("technical-analysis", "sub-categories")}
                          style={{ height: "95px", width: "auto" }}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1"></div>
                  <div className="row flex-grow-1"></div>
                </div>
                <div className="row d-flex align-content-center">
                  <div className="row mx-0 flex-grow-1" style={{ height: "25%" }}></div>
                  <div className="row flex-grow-1 " style={{ height: "45%" }}>
                    <MouseParallaxChild
                      factorX={0.3}
                      factorY={0.5}
                      className=""
                    >
                      <div>
                        <Image
                          src={safeSrcImg("learning", "sub-categories")}
                          style={{ height: "90px", width: "auto" }}
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
                          src={safeSrcImg("growth-tips", "sub-categories")}
                          style={{ height: "100px", width: "auto" }}
                        />
                      </div>
                    </MouseParallaxChild>
                  </div>
                  <div className="row flex-grow-1"></div>
                  <div className="row flex-grow-1"></div>
                </div>
                <div className="row d-flex align-content-center">
                  <div className="row mx-0 flex-grow-1" style={{ height: "1%" }}></div>
                  <div className="row flex-grow-1 "style={{ height: "45%" }}>
                    <MouseParallaxChild
                      factorX={0.5}
                      factorY={0.3}
                      className=""
                    >
                      <div>
                        <Image
                          src={safeSrcImg("fundamental-analysis", "sub-categories")}
                          style={{ height: "95px", width: "auto" }}
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
                          src={safeSrcImg("marketing", "categories")}
                          style={{ height: "100px", width: "auto" }}
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
