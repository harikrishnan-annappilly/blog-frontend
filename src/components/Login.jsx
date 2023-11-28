import React, { useState } from "react";

function Login(props) {
    const defaultUser = {
        username: "",
        password: "",
    };

    const [user, setUser] = useState(defaultUser);

    function handleInputChange(input) {
        const key = input.currentTarget.name;
        const value = input.currentTarget.value;
        setUser({ ...user, [key]: value });
    }

    function handleFormSubmit(form) {
        form.preventDefault();
        console.log("validate not implemented");
        console.log("form submitted", user);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-xl-4 col-lg-6 col-md-8 col-10">
                    <div className="card">
                        <form autoComplete="off" onSubmit={handleFormSubmit}>
                            <div className="card-header bg-primary text-white">
                                <div className="h3">Login</div>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label
                                        htmlFor="username"
                                        className="form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleInputChange}
                                        value={user.username}
                                        className="form-control"
                                        id="username"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputPassword1"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleInputChange}
                                        value={user.password}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default Login;
