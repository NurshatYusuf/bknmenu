import React from "react";
import MainRoutes from "./MainRoutes";
import DishesContextProvider from "./contexts/DishesContextProvider";
import Navbar from "./components/Navbar/Navbar";
import "./styles/index.css";
import UsersContextProvider from "./contexts/userContext";
import BookingContextProvider from "./contexts/BookingContextProvider";
import Modal from "./components/Modal/Modal";
import ModalBooked from "./components/Modal/ModalBooked";

function App() {
  return (
    <>
      <BookingContextProvider>
        <UsersContextProvider>
          <DishesContextProvider>
            <Navbar />
            <MainRoutes />
            <Modal />
            <ModalBooked />
          </DishesContextProvider>
        </UsersContextProvider>
      </BookingContextProvider>
    </>
  );
}

export default App;
