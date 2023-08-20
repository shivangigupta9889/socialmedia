import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./src/component/HomePage";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import JoinPage from"./src/component/JoinPage";
import Sidebar from "./src/component/Sidebar";

const AppLayout = () => {
  return (
    <div>
      {/* Header, Sidebar, and RightSidebar components */}
    
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "main", element: <Homepage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "join", element: <JoinPage /> },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
