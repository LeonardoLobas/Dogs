import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Usercontext";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const navigate = useNavigate;
    const mobile = useMedia("(max-width:40rem)");
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    function handleLogout() {
        userLogout();
        navigate("/login");
    }
    return (
        <>
            {mobile && (
                <button
                    aria-label="Menu"
                    className={`${styles.mobileButton} ${
                        mobileMenu && styles.mobileButtonActive
                    }`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}
            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${
                    mobileMenu && styles.navMobileActive
                }`}
            >
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
        </>
    );
};

export default UserHeaderNav;
