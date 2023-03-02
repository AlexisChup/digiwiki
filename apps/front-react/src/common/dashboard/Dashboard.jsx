import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaUserCircle,
  FaWrench,
  FaUsers,
  FaRegFolderOpen,
} from "react-icons/fa";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const [mobileView, setMobileView] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleMobileView = () => {
      if (window.innerWidth < 767) {
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
    <div className="container pt-3">
      <h1>Dashboard</h1>
      <div className="shadow p-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="me-2">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive ? "dashboard-navlink-active" : "dashboard-navlink"
              }
            >
              <FaUserCircle />
              {mobileView ? null : "Profile"}
            </NavLink>
          </div>
          <div className="me-2">
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive ? "dashboard-navlink-active" : "dashboard-navlink"
              }
            >
              <FaWrench />
              {mobileView ? null : "Settings"}
            </NavLink>
          </div>
          {user.roles.includes("ROLE_ADMIN") ? (
            <div className="me-2">
              <NavLink
                to="handle-users"
                className={({ isActive }) =>
                  isActive ? "dashboard-navlink-active" : "dashboard-navlink"
                }
              >
                <FaUsers />
                {mobileView ? "H-U" : "Handle Users"}
              </NavLink>
            </div>
          ) : null}
          {user.roles.includes("ROLE_ADMIN") ? (
            <div className="me-2">
              <NavLink
                to="empty-sub-categories"
                className={({ isActive }) =>
                  isActive ? "dashboard-navlink-active" : "dashboard-navlink"
                }
              >
                <FaRegFolderOpen />
                {mobileView ? "S-C" : "Sub Categories"}
              </NavLink>
            </div>
          ) : null}
          {user.roles.includes("ROLE_ADMIN") ? (
            <div className="me-2">
              <NavLink
                to="empty-tools"
                className={({ isActive }) =>
                  isActive ? "dashboard-navlink-active" : "dashboard-navlink"
                }
              >
                <FaRegFolderOpen />
                {mobileView ? "T" : "Tools"}
              </NavLink>
            </div>
          ) : null}
          {user.roles.includes("ROLE_ADMIN") ? (
            <div className="me-2">
              <NavLink
                to="list-tags"
                className={({ isActive }) =>
                  isActive ? "dashboard-navlink-active" : "dashboard-navlink"
                }
              >
                <FaRegFolderOpen />
                {mobileView ? "LT" : "List Tags"}
              </NavLink>
            </div>
          ) : null}
        </div>
        <hr className="solid" />
        <Outlet />
      </div>
    </div>
  );
}
