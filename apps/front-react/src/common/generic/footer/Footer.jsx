/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer d-flex justify-content-center">
      <div className="row row-cols-sm-3 row-cols-1 g-2 justify-content-center">
        <div className="col text-center">
          <span className="">Copyright © 2022</span>
        </div>
        <div className="col text-center">
          {" "}
          <NavLink
            to="terms-of-service"
            className={({ isActive }) =>
              isActive ? "navbar-navlink-active" : "navbar-navlink"
            }
          >
            Conditions générales
          </NavLink>
        </div>
        <div
          className="col text-center flex-nowrap"
          style={{ whiteSpace: "noWrap" }}
        >
          {" "}
          <NavLink
            to="privacy-and-cookies"
            className={({ isActive }) =>
              isActive ? "navbar-navlink-active" : "navbar-navlink"
            }
          >
            Politique de confidentialité
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
