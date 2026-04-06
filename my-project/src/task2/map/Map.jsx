import { createBrowserRouter } from "react-router-dom";
import Layout from "../Comp2/Nav/Layout";

export const Mymap3 = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <h1>Home Page</h1>
      },
      {
        path: "/shots",
        element: <h1>Shots Page</h1>
      },
      {
        path: "/explore",
        element: <h1>Explore Page</h1>
      },
      {
        path: "/hire",
        element: <h1>Hire Talent Page</h1>
      },
      {
        path: "/gethired",
        element: <h1>Get Hired Page</h1>
      },
      {
        path: "/community",
        element: <h1>Community Page</h1>
      },
      {
        path: "/signup",
        element: <h1>Signup Page</h1>
      },
      {
        path: "/login",
        element: <h1>Login Page</h1>
      }
    ]
  }
]);