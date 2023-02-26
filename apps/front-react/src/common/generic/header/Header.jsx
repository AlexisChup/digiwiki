import "./Header.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { safeSrcImg } from "../../../utils/image";

export default function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const commonClassNameNavLink = "me-4";

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="md"
        className="d-flex fixed justify-content-between align-content-center flex-row p-3 shadow"
      >
        <Navbar.Brand className="ms-3">
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? commonClassNameNavLink + " navbar-navlink-active"
                : commonClassNameNavLink + " navbar-navlink"
            }
          >
            <img
              src={safeSrcImg("logo", "logo")}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              alt="DigiWiki logo"
            />
            DigiWiki
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#serach">Search</Nav.Link> */}
          </Nav>
          <Nav className="justify-content-center align-content-center align-items-center">
            <NavLink
              to="explorer"
              className={({ isActive }) =>
                isActive
                  ? commonClassNameNavLink + " navbar-navlink-active"
                  : commonClassNameNavLink + " navbar-navlink"
              }
            >
              Explorer
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? commonClassNameNavLink + " navbar-navlink-active"
                  : commonClassNameNavLink + " navbar-navlink"
              }
            >
              À propos
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive
                  ? commonClassNameNavLink + " navbar-navlink-active"
                  : commonClassNameNavLink + " navbar-navlink"
              }
            >
              Contact
            </NavLink>
            {isAuthenticated ? (
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? commonClassNameNavLink + " navbar-navlink-active"
                    : commonClassNameNavLink + " navbar-navlink"
                }
              >
                <FaUserCircle className="mb-1" />
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="auth"
                  aria-label="auth"
                  className={({ isActive }) =>
                    isActive
                      ? commonClassNameNavLink + " navbar-navlink-active"
                      : commonClassNameNavLink + " navbar-navlink"
                  }
                >
                  <FaUserCircle className="mb-1" />
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
