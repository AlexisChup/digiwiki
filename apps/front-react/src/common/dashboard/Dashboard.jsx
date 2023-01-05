import React from "react";
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

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="shadow p-3">
        <div className="d-flex flex-row">
          <div className="mr-2">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive ? "dashboard-navlink-active" : "dashboard-navlink"
              }
            >
              <FaUserCircle />
              Profile
            </NavLink>
          </div>
          <div className="mr-2">
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive ? "dashboard-navlink-active" : "dashboard-navlink"
              }
            >
              <FaWrench />
              Settings
            </NavLink>
          </div>
          {user.roles.includes("ROLE_ADMIN") ? (
            <div className="mr-2">
              <NavLink
                to="handle-users"
                className={({ isActive }) =>
                  isActive ? "dashboard-navlink-active" : "dashboard-navlink"
                }
              >
                <FaUsers />
                Handle Users
              </NavLink>
            </div>
          ) : null}
          {user.roles.includes("ROLE_ADMIN") ? (
            <div className="mr-2">
              <NavLink
                to="empty-sub-categories"
                className={({ isActive }) =>
                  isActive ? "dashboard-navlink-active" : "dashboard-navlink"
                }
              >
                <FaRegFolderOpen />
                Empty Sub Categories
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
