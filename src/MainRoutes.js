import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: "/",
            element: <HomePage />,
            id: 1
        },
        {
            link: "/admin",
            element: <AdminPage />,
            id: 2
        },
        {
            link: "/edit/:id",
            element: <EditPage />,
            id: 3
        }
    ];

    return (
        <Routes>
            {PUBLIC_ROUTES.map(item => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
        </Routes>
    );
};

export default MainRoutes;