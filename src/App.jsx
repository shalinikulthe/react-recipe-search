import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MealDetail from "./components/MealDetail";
import MainPage from "./components/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:id",
    element: <MealDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
