import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import DishesPage from "./pages/DishesPage";
import EditDishesPage from "./pages/EditDishesPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

const MainRoutes = () => {

    const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/add",
      element: <AdminPage />,
      id: 2,
    },
    {
      link: "/menu",
      element: <DishesPage />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditDishesPage />,
      id: 4,
    },
    {
      link: "/registration",
      element: <RegistrationPage />,
      id: 5,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 6,
    }
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
