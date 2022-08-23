import React from "react";
import MainRoutes from "./MainRoutes";
import DishesContextProvider from "./contexts/DishesContextProvider";
import Navbar from "./components/Navbar/Navbar";
import "./styles/index.css";

function App() {
  return (
    <>
      <DishesContextProvider>
        <Navbar />
        <MainRoutes />
      </DishesContextProvider>
    </>
  );
}

export default App;
