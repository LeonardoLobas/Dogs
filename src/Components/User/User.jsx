import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { Outlet } from "react-router-dom";

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Outlet />
        </section>
    );
};

export default User;
