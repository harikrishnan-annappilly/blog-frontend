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
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h3 className="mb-3">Login</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleInputChange}
                                    placeholder="username"
                                    className="mb-3"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    placeholder="password"
                                    className="mb-3"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    type="submit"
                                    className="btn btn-primary mb-3"
                                >
                                    Login
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Login;
