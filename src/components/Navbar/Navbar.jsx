import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/navbar.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/userContext";


import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
  const pages2 = [{ type: <ShoppingCartIcon />, path: "/cart" }];
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
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 0,
      top: 15,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      background: "red",
    },
  }));

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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages2.map((page2) => (
              <Button
                key={page2.type}
                onClick={() => navigate(page2.path)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page2.type}
              </Button>
            ))}

            {pages2.map((page) => (
              <StyledBadge
                badgeContent={count}
                color="primary"
                sx={{ margin: 0, padding: 0 }}
              ></StyledBadge>
            ))}
          </Box>

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
