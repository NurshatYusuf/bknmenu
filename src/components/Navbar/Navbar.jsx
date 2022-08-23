import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/navbar.css";

const Navbar = () => {
  const pages = [
    {
      type: "Home",
      path: "/",
    },
    {
      type: "Menu",
      path: "/menu",
    },
    {
      type: "Booking",
      path: "/book",
    },
  ];

  const regPages = [
    {
      type: "Registration",
      path: "/registration",
    },
    {
      type: "Login",
      path: "/login",
    },
    {
      type: "Logout",
      path: "#",
    },
  ];

  // const settings = [
  //   {
  //     type: "Register",
  //     path: "/register",
  //   },
  //   {
  //     type: "Login",
  //     path: "/login",
  //   },
  // ];

  const navigate = useNavigate();

  return (
    <header>
      <div className="btn_group">
        {pages.map((page) => (
          <button
            className="navbar__btn"
            key={page.type}
            onClick={() => navigate(page.path)}
          >
            {page.type}
          </button>
        ))}
      </div>
      <div className="navbar__title">
        <h1 onClick={() => navigate("/")}>LA BARASHKA</h1>
      </div>
      <div className="reg__btn_group">
        {regPages.map((page) => (
          <button
            className="navbar__btn"
            key={page.type}
            onClick={() => navigate(page.path)}
          >
            {page.type}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
