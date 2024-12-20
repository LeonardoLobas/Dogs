import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Usercontext";
import styles from "./Login.module.css";

const Login = () => {
    const { login } = React.useContext(UserContext);
    if (login === true) return <Navigate to="/conta" />;
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Outlet />
            </div>
        </section>
    );
};

export default Login;
