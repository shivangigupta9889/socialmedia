import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/component/About";
import Contact from "./src/component/Contact";

const AppLayout=()=>{
    return (<div>
        <Header/>
        </div>)
};
const appRouter = createBrowserRouter([
  
    {path: "/",element: <AppLayout />},
    {path: "/about", element: <About />} ,
    {path: "/contact", element: <Contact /> ,
  }
  ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 

