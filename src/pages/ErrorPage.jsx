import React from "react";
import bowl from "../images/bowls.png";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-img-block">
        <img className="error__img" src={bowl} alt="No connect" />
      </div>
      <h1 className="error__title">404 Page not found</h1>
    </div>
  );
};

export default ErrorPage;
