import React from "react";
import "../styles/HomePage.css";
import bg from "../images/HomePage.jpg";

const HomePage = () => {
  return (
    <div className="container">
      <img src={bg} alt="No connect" />
      <h1 className="home-page__title">LA BARASHKA</h1>
    </div>
  );
};

export default HomePage;
