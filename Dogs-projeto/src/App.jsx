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

const App = () => {
    const route = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Header /> <Outlet /> <Footer />
                </>
            ),
            children: [
                { path: "/", element: <Home /> },
                {
                    path: "/login",
                    element: <Login />,
                },
            ],
        },
        {
            path: "*",
            element: <>Ai não lobinho </>,
        },
    ]);
    return (
        <div>
            <RouterProvider router={route} />
        </div>
    );
};

export default App;
