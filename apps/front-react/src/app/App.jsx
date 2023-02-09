import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../common/generic/header/Header";
import Footer from "../common/generic/footer/Footer";
import IndexRoutes from "../routes/IndexRoutes";
import AuthVerify from "../common/generic/auth/AuthVerify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../common/style/common.scss";

export default function App() {
  return (
    <BrowserRouter>
      <AuthVerify />
      <div id="app-content">
        <Header id="header-content" />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Digiwiki - La référence des outils digitaux</title>
          <meta
            name="description"
            content="Le site qui vous aide à trouver l'outil digital adapté à tous vos besoins."
          />
          <link rel="canonical" href="https://www.digiwiki.io" />
        </Helmet>
        <IndexRoutes />
        <Footer id="footer-content" />
        <ToastContainer autoClose={3000} position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}
