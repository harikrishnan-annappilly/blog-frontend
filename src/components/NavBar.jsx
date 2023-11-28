import React from "react";

function NavBar(props) {
    return (
        <nav
            className="navbar bg-dark border-bottom border-body mb-3"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="bootstrap-logo.svg"
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />{" "}
                    Home
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
