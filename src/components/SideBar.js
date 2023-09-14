import { NavLink } from "react-router-dom";
import "./sideBar.css";
import React from "react";

const SideBar = () => {
  return (
    <div
      className="d-flex flex-column bg-dark p-3 text-white flex-shrink-0"
      style={{ width: 280 + "px", height: 100 + "%" }}
    >
      <div className="d-flex align-items-center">
        <img
          alt="CK-logo"
          src={process.env.PUBLIC_URL + "/images/CK_logo.jpg"}
          style={{ width: 40 + "px", borderRadius: 5 + "px" }}
        />
        <h1 className="brandTitle">Mech Traders</h1>
      </div>

      <hr></hr>

      <ul className="nav nav-pills flex-column mb-auto navLinks">
        <li className="nav-item">
          <NavLink to="/">
            <i className="bi bi-house-door-fill me-2"></i>Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/c">
            <i className="bi bi-receipt me-2"></i>Cars for Sale
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/b">
            <i className="bi bi-binoculars me-2"></i>Research & Reviews
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/d">
            <i className="bi bi-camera-reels me-2"></i>News & Videos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/e">
            <i className="bi bi-car-front me-2"></i>Sell Your Car
          </NavLink>
        </li>
      </ul>

      <hr></hr>

      <div className="d-flex align-items-center aboutYou">
        <img
          alt="Businnesman"
          src={process.env.PUBLIC_URL + "/images/businessman.png"}
          style={{ width: 40 + "px", borderRadius: 5 + "px" }}
          className="me-3"
        ></img>

        <div className="dropup-center dropup">
          <button
            className="btn btn-secondary dropdown-toggle settingsButton"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            // onClick={(e) => {
            //   e.target.style.backgroundColor = "transparent";
            // }}
            style={{ backgroundColor: "#212529" }}
          >
            Settings
          </button>
          <ul className="dropdown-menu dropdownMenuList">
            <li>
              <NavLink className="dropdown-item" to="/update">
                Update profile
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/selected">
                Selected cars
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/date-update">
                Date of update
              </NavLink>
            </li>
            <li>
              <div>
                <NavLink
                  className="dropdown-item d-flex justify-content-between"
                  to="/notifications"
                >
                  Notifications
                  <span
                    className="badge bg-primary d-flex align-items-center justify-content-center
             badgeElement"
                  >
                    3
                  </span>
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/signOut">
                Sign Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
