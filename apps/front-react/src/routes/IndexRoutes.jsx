import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../common/home/Home";
import About from "../common/generic/about/About";
import Contact from "../common/generic/contact/Contact";
import Dashboard from "../common/dashboard/Dashboard";
import Error from "../common/generic/error/Error";
import Login from "../common/generic/login/Login";
import Signup from "../common/generic/signup/Signup";
import Profile from "../common/generic/profile/Profile";
import Settings from "../common/generic/settings/Settings";
import HandleUsers from "../common/generic/admin/handle-users/HandleUsers";
import PrivacyAndCookies from "../common/generic/privacy-and-cookies/PrivacyAndCookies";
import TermsOfService from "../common/generic/terms-of-service/TermsOfService";
import Categories from "../common/categories/Categories";
import SubCategories from "../common/sub-categories/SubCategories";
import Tools from "../common/tools/Tools";
import Tool from "../common/tool/Tool";
import Auth from "../common/generic/auth/Auth";

export default function IndexRoutes() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div id="body-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explorer" element={<Categories />} />
        <Route path="explorer/:category" element={<SubCategories />} />
        <Route path="explorer/:category/:subCategory" element={<Tools />} />
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
          <Route path="handle-users" element={<HandleUsers />} />
        </Route>
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="privacy-and-cookies" element={<PrivacyAndCookies />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
