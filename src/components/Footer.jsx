import React from "react";

function Footer(props) {
    return (
        <nav
            className="navbar bg-dark border-bottom navbar-expand-lg bg-body-tertiary mt-3"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <small className="text-body-secondary">
                        --- deployed on{" "}
                    </small>
                    <em>%date%</em>
                </a>
            </div>
        </nav>
    );
}

export default Footer;
