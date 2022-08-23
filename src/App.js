import React from "react";
import MainRoutes from "./MainRoutes";
import DishesContextProvider from "./contexts/DishesContextProvider";

function App() {
  return (
      <>
          <DishesContextProvider>
              <MainRoutes />
          </DishesContextProvider>
      </>
  );
}

export default App;
