import React from "react";
import { json, Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_GET } from "../../api";
import { UserContext } from "../../Usercontext";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const { userLogin } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
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
                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};

export default LoginForm;
