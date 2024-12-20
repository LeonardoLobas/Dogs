import React from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "./api";
import { useNavigate } from "react-router-dom";

// UserContext armazena as informações entre os componentes.

export const UserContext = React.createContext();

// Distribui informação entre os componentes.
export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const userLogout = React.useCallback(async function () {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem("token");
    }, []);

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const tokenRes = await fetch(url, options);
        const json = await tokenRes.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            const { url, options } = TOKEN_POST({ username, password });
            const tokenRes = await fetch(url, options);
            if (!tokenRes.ok) throw new Error(`Error:${tokenRes.statusText}`);
            const { token } = await tokenRes.json();
            window.localStorage.setItem("token", token);
            await getUser(token);
            navigate("/conta");
        } catch (error) {
            setError(error.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem("token");
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error("Token inválido");
                    await getUser(token);
                } catch (erro) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider
            value={{ userLogin, data, userLogout, error, loading, login }}
        >
            {children}
        </UserContext.Provider>
    );
};
