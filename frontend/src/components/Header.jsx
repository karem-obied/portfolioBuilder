import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import "../styles/header.css";
function Header() {
  return (
    <>
      <header>
        <div className="logo" style={{ "--x": "2" }}>
          <Link to="/">MyPortfolio</Link>
        </div>
        <ul className="btns">
          <li className="btn">
            <Link to="/login">
              <FaSignInAlt />
              Login
            </Link>
          </li>
          <li className="btn">
            <Link to="/register">
              <FaUser />
              Register
            </Link>
          </li>
        </ul>
      </header>
      <hr />
    </>
  );
}

export default Header;
