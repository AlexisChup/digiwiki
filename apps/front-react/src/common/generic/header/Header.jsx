import "./Header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header>
      <nav className="d-flex justify-content-between align-content-center flex-row p-3 shadow mb-3">
        <div className="ml-3" style={{margin: "0 0 0 2%"}}>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "navbar-navlink-active" : "navbar-navlink"
            }
          >
            DigiWiki
          </NavLink>
        </div>
        <div className="d-flex flex-row" style={{margin: "0 4% 0 0"}}>
          <div className="ml-2" style={{margin: "0 0 0 0"}}>
            <NavLink
              to="explorer"
              className={({ isActive }) =>
                isActive ? "navbar-navlink-active" : "navbar-navlink"
              }
            >
              Explorer
            </NavLink>
          </div>
          <div className="ml-2" style={{margin: "0 0 0 4%"}}>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "navbar-navlink-active" : "navbar-navlink"
              }
            >
              About
            </NavLink>
          </div>
          <div className="ml-2" style={{margin: "0 0 0 4%"}}>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "navbar-navlink-active" : "navbar-navlink"
              }
            >
              Contact
            </NavLink>
          </div>

          {isAuthenticated ? (
            <div className="ml-2" style={{margin: "0 0 0 3%"}}>
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive ? "navbar-navlink-active" : "navbar-navlink"
                }
              >
                <FaUserCircle className="mb-1" />
              </NavLink>
            </div>
          ) : (
            <>
              <div className="ml-2" style={{margin: "0 0 0 3%"}}>
                <NavLink
                  to="auth"
                  className={({ isActive }) =>
                    isActive ? "navbar-navlink-active" : "navbar-navlink"
                  }
                >
                  <FaUserCircle className="mb-1" />
                </NavLink>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
