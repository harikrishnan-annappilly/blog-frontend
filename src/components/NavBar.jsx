import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
    return (
        <nav
            className="navbar bg-dark border-bottom navbar-expand-lg bg-body-tertiary mb-3"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />{" "}
                    Blogs
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
