import React from "react";

const Userposts = () => {
    const [username, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={({ target }) => setUserName(target.value)}
            />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            <button>Enviar</button>
        </form>
    );
};

export default Userposts;
