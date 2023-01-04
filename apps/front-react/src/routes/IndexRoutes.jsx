import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../common/home/Home";
import About from "../common/generic/about/About";
import Contact from "../common/generic/contact/Contact";
import Dashboard from "../common/dashboard/Dashboard";
import Error from "../common/generic/error/Error";
import Profile from "../common/generic/profile/Profile";
import Settings from "../common/generic/settings/Settings";
import HandleUsers from "../common/generic/admin/handle-users/HandleUsers";
import PrivacyAndCookies from "../common/generic/privacy-and-cookies/PrivacyAndCookies";
import TermsOfService from "../common/generic/terms-of-service/TermsOfService";
import ListCategories from "../common/list-categories/ListCategories";
import ListSubCategories from "../common/list-sub-categories/ListSubCategories";
import ListTools from "../common/list-tools/ListTools";
import Tool from "../common/tool/Tool";
import Auth from "../common/generic/auth/Auth";
import EmptySubCategories from "../common/dashboard/admin/empty-sub-categories/EmptySubCategories";

export default function IndexRoutes() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div id="body-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explorer" element={<ListCategories />} />
        <Route path="explorer/:category" element={<ListSubCategories />} />
        <Route path="explorer/:category/:subCategory" element={<ListTools />} />
        <Route
          path="explorer/:category/:subCategory/:tool"
          element={<Tool />}
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="auth"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" state="From Auth" />
            ) : (
              <Auth />
            )
          }
        />
        <Route
          path="dashboard"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/" state="From Dashboard" />
            )
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="handle-users"
            element={
              isAuthenticated && user.roles.includes("ROLE_ADMIN") ? (
                <HandleUsers />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="empty-sub-categories"
            element={
              isAuthenticated && user.roles.includes("ROLE_ADMIN") ? (
                <EmptySubCategories />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
        </Route>
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="privacy-and-cookies" element={<PrivacyAndCookies />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
