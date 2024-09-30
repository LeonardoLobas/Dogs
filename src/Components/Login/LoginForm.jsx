import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    function handleSubmit(event) {
        if (username.validate() && password.validate()) {
            event.preventDefault();
            fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((json) => {
                    console.log(json);
                });
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
