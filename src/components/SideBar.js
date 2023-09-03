import { Link, NavLink } from "react-router-dom";
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
          className="me-2"
        ></img>

        <div className="dropup-center dropup">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Settings
          </button>
          <ul className="dropdown-menu dropdownMenuList">
            <li>
              <Link className="dropdown-item" to="/settings">
                Update profile information
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
