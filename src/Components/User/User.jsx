import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../Usercontext";

const User = () => {
    const { data } = React.useContext(UserContext);
    return (
        <section className="container">
            <UserHeader />
            <Outlet user={data.id} />
        </section>
    );
};

export default User;
