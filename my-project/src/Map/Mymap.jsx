import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Component/Navbar/Layout";
import Home from "../Component/Home/Home";
import Register from "../Component/Navbar/pages/Register";
import Login from "../Component/Navbar/pages/Login";
import ProductDetails from "../Component/Home/ProductDetails";
import Cart from "../Component/cart/Cart";
import Wishlist from "../Component/Wishlist/Wishlist";

export let Mymap = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/productdetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

//router my app navigation layout
