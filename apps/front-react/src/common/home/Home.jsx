import React, { useState } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import "./Home.css";
import Image from "react-bootstrap/Image";
import { safeSrcImg } from "../../utils/image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "#FFFFFF",
          color: "#fff",
          overflow: "hidden"
        }}
      >
        <Image src={safeSrcImg("landingbackground1", "landingpage")}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "auto",
                    backfaceVisibility: "hidden"
                }}
          />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "auto",
              display: "flex"
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.05}
              factorY={0.05}
              style={{
                flexDirection: "column",
                display: "flex",
                minWidth : "20%",
                width: "auto",
                height: "100%",
                justifyContent: "center",
                margin : "0 0 0 5%"
              }}
            >
              <h1 style={{ margin: "10% 0 2% 12%" }}>
                Digiwiki
              </h1>
              <p style={{ margin: "0 20% 3% 12%" }}>
                Le site qui vous aide à trouver l'outil adapté à tous vos besoins.
              </p>
              <div style={{ display: "flex", margin: "0 8% 3% 12%"}}  >
                <Button size='lg' onClick={() => navigate("/explorer")}>
                  Explorer
                </Button>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "5%",
                width: "auto",
                height: "100%"
              }}
            >
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "105%"
              }}
            >
              <Image
                src={safeSrcImg("branding", "sub-categories")}
                style={{ height: "10%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "50%"
              }}
            >
              <Image
                src={safeSrcImg("ai-programming", "sub-categories")}
                style={{ height: "20%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "75%"
              }}
            >
              <Image
                src={safeSrcImg("learning", "sub-categories")}
                style={{ height: "15%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "30%"
              }}
            >
              <Image
                src={safeSrcImg("fundamental-analysis", "sub-categories")}
                style={{ height: "40%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "110%"
              }}
            >
              <Image
                src={safeSrcImg("technical-analysis", "sub-categories")}
                style={{ height: "12%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "55%"
              }}
            >
              <Image
                src={safeSrcImg("growth-tips", "sub-categories")}
                style={{ height: "22%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.54}
              factorY={0.4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "135%"
              }}
            >
              <Image
                src={safeSrcImg("finances", "categories")}
                style={{ height: "8%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "85%"
              }}
            >
              <Image
                src={safeSrcImg("ai-general", "sub-categories")}
                style={{ height: "12%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.2}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "40%"
              }}
            >
              <Image
                src={safeSrcImg("data-science", "sub-categories")}
                style={{ height: "25%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "75%"
              }}
            >
              <Image
                src={safeSrcImg("social-network-marketing", "sub-categories")}
                style={{ height: "15%", width: "auto" }}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "130%"
              }}
            >
              <Image
                src={safeSrcImg("marketing", "categories")}
                style={{ height: "10%", width: "auto" }}
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <Image
                src={safeSrcImg("manalone", "landingpage")}
                style={{position: "absolute", height: "25%", width: "auto" , margin : "35% 0 0 30%"}}
              />
        </div>
      </div>
    </>
  );
}
