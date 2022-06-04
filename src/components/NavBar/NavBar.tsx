import React from "react";
import {Link, NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
        <div className="navbar__logo">
            <Link to="/">
                <Logo />
            </Link>
        </div>
        <ul className="navbar__menu">
            <NavLink
              to="/"
              className={({ isActive }) => ( `navbar__link ${isActive ? "navbar__link--active" : ""}`)}
            >
              Characters
            </NavLink>
            <NavLink
              to="/my-watch-list"
              className={({ isActive }) => (`navbar__link ${isActive ? "navbar__link--active" : ""}`)}
            >
              Watch List
            </NavLink>
        </ul>
    </div>
  );
};

export default NavBar;
