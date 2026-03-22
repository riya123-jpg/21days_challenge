import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/Mainlayout";

import Dashboard from "./pages/Dashboard";
import Content from "./pages/Content";
import Create from "./pages/Create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "content", element: <Content /> },
      { path: "create", element: <Create /> },
    ],
  },
]);
