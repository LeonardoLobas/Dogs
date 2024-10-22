import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Usercontext";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null);
    const { userLogout } = React.useContext(UserContext);
    const navigate = useNavigate;

    function handleLogout() {
        userLogout();
        navigate("/login");
    }
    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <img src={MinhasFotos} />
                {mobile && "Minhas fotos"}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                <img src={Estatisticas} />
                {mobile && "Estatisticas"}
            </NavLink>
            <NavLink to="/conta/postar">
                <img src={AdicionarFoto} />
                {mobile && "Adicionar Fotos"}
            </NavLink>
            <button onClick={handleLogout}>
                <img src={Sair} />
                {mobile && "Sair"}
            </button>
        </nav>
    );
};

export default UserHeaderNav;
