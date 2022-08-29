import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/navbar.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/userContext";

import { useCart } from "../../contexts/CartContextProvider";

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
      path: "/booking",
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
  ];

  const { logOut } = useAuth();

  const { count, getCount } = useCart();
  useEffect(() => {
    getCount();
  }, []);

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      {location.pathname === "/" ? (
        <header className="header_dark">
          <div className="btn_group_dark">
            {pages.map((page) => (
              <button
                className="navbar__btn_dark"
                key={page.type}
                onClick={() => navigate(page.path)}
              >
                {page.type}
              </button>
            ))}
          </div>
          <div className="reg__btn_group_dark">
            {regPages.map((page) => (
              <button
                className="navbar__btn_dark"
                key={page.type}
                onClick={() => navigate(page.path)}
              >
                {page.type}
              </button>
            ))}
            <button className="navbar__btn_dark" onClick={() => logOut()}>
              Logout
            </button>
          </div>
        </header>
      ) : (
        <header className="header_light">
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
            <h1 onClick={() => navigate("/")} className="title">
              LA BARASHKA
            </h1>
          </div>

          <div className="reg__btn_group">
            <button
              className="navbar__btn cart"
              onClick={() => navigate("/cart")}
            >
              Cart {count === 0 ? "" : count}
            </button>
            {regPages.map((page) => (
              <button
                className="navbar__btn"
                key={page.type}
                onClick={() => navigate(page.path)}
              >
                {page.type}
              </button>
            ))}
            <button className="navbar__btn" onClick={() => logOut()}>
              Logout
            </button>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
