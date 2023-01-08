import "./Header.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const commonClassNameNavLink = "me-2";

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="md"
        className="d-flex justify-content-between align-content-center flex-row p-3 shadow mb-3"
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
            DigiWiki
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#serach">Search</Nav.Link> */}
          </Nav>
          <Nav className="">
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
              About
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
        {/* <div className="d-flex flex-row">
          <div className="ms-2">
            <NavLink
              to="explorer"
              className={({ isActive }) =>
                isActive ? commonClassNameNavLink + " navbar-navlink-active" : commonClassNameNavLink + " navbar-navlink"
              }
            >
              Explorer
            </NavLink>
          </div>
          <div className="ms-2">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? commonClassNameNavLink + " navbar-navlink-active" : commonClassNameNavLink + " navbar-navlink"
              }
            >
              About
            </NavLink>
          </div>
          <div className="ms-2">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? commonClassNameNavLink + " navbar-navlink-active" : commonClassNameNavLink + " navbar-navlink"
              }
            >
              Contact
            </NavLink>
          </div>

          {isAuthenticated ? (
            <div className="ms-2">
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive ? commonClassNameNavLink + " navbar-navlink-active" : commonClassNameNavLink + " navbar-navlink"
                }
              >
                <FaUserCircle className="mb-1" />
              </NavLink>
            </div>
          ) : (
            <>
              <div className="ms-2">
                <NavLink
                  to="auth"
                  className={({ isActive }) =>
                    isActive ? commonClassNameNavLink + " navbar-navlink-active" : commonClassNameNavLink + " navbar-navlink"
                  }
                >
                  <FaUserCircle className="mb-1" />
                </NavLink>
              </div>
            </>
          )}
        </div> */}
      </Navbar>
    </header>
  );
}
