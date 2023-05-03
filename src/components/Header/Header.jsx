import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="header-navigation-bar text-white">
      <div className="header-title">
        <h3> The Wok n Roll Recipe </h3>
      </div>

      <div className="navigation-lings">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "fw-bolder text-decoration-underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "fw-bolder text-decoration-underline" : ""
          }
        >
          Blogs
        </NavLink>
      </div>

      <div >
        {user ? (
          <div  className="navigation-login">
            <img
              className="rounded-circle "
              style={{ width: "50px", height: "50px", marginRight: "20px" }}
              title={user?.displayName}
              src={user?.photoURL}
              alt=""
            />
            <Button
              className="btn btn-outline-secondary text-white mt-0"
              onClick={handleLogOut}
            >
              Logout
            </Button>
          </div>
        ) : (
          <button className="btn btn-outline-secondary">
            <Link className="text-decoration-none fs-5 text-white" to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
