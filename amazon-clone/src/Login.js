import React from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
    let history = useHistory()
    return (
        <div className="login">
            <h1>Login Page</h1>
        </div>
    )
}

export default Login
