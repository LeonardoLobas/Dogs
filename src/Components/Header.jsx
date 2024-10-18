import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../Assets/dogs.svg";
import { UserContext } from "../Usercontext";

const Header = () => {
    const { data, userLogout } = React.useContext(UserContext);
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <img src={Dogs} alt="ImgDog" />
                </Link>
                {data ? (
                    <Link className={styles.login} to="/login">
                        <button onClick={userLogout}>Sair</button>
                        {data.nome}
                    </Link>
                ) : (
                    <Link className={styles.login} to="/login">
                        Login / Criar
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
