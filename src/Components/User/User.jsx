import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import { UserContext } from "../../Usercontext";
import { Outlet } from "react-router-dom";

const User = () => {
    const { data } = React.useContext(UserContext);
    return (
        <section className="container">
            <UserHeader />
            <Outlet />
            <Feed user={data.id} />
        </section>
    );
};

export default User;
