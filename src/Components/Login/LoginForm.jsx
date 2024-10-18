import React from "react";
import { json, Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_GET } from "../../api";
import { UserContext } from "../../Usercontext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="anime-left">
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    label="Usuário"
                    {...username}
                />
                <Input
                    type="password"
                    name="password"
                    label="Senha"
                    {...password}
                />
                {loading ? (
                    <Button>Carregando...</Button>
                ) : (
                    <Button>Entrar</Button>
                )}
                <Error error={error} />
            </form>
            <Link className={styles.perdeu} to="/login/perdeu">
                Perdeu a senha ?
            </Link>
            <div className={styles.cadastros}>
                <h2 className={styles.subtitles}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/criar">
                    Cadastro
                </Link>
            </div>
        </section>
    );
};

export default LoginForm;
