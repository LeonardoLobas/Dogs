import React from "react";
import LoginForm from "./LoginForm";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Login;
