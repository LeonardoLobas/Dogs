import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import {
    BrowserRouter,
    createBrowserRouter,
    Outlet,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import LoginForm from "./Components/Login/LoginForm";
import LoginCreate from "./Components/Login/LoginCreate";
import { UserContext, UserStorage } from "./Usercontext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";

const App = () => {
    const route = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <UserStorage>
                        <Header /> <Outlet /> <Footer />
                    </UserStorage>
                </>
            ),
            children: [
                { path: "/", element: <Home /> },
                {
                    path: "/login",
                    element: <Login />,
                    children: [
                        {
                            path: "/login",
                            element: <LoginForm />,
                        },
                        {
                            path: "/login/criar",
                            element: <LoginCreate />,
                        },
                    ],
                },
                {
                    path: "conta/*",
                    element: (
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    ),
                },
            ],
        },
    ]);
    return (
        <div>
            <RouterProvider router={route} />
        </div>
    );
};

export default App;
