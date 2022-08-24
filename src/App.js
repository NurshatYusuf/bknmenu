import React from "react";
import UsersContextProvider from "./contexts/userContext";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <UsersContextProvider>
      <RegistrationPage />
      <LoginPage />
    </UsersContextProvider>
  );
}

export default App;
