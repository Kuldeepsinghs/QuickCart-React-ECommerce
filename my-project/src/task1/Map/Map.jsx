import { createBrowserRouter } from "react-router-dom"

import Layout from "../Components/Navbar/Layout"

import Home from "../Components/Navbar/page/Home"
import Blog from "../Components/Navbar/page/Blog"
import Shop from "../Components/Navbar/page/Shop"
import Login from "../Components/Navbar/page/Login"
import Feature from "../Components/Navbar/page/Feature"
import Register from "../Components/Navbar/page/Register"

export let Mymap2=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{
    path:"/",
    element:<Home/>
  },
  {
    path:"/Feature",
    element:<Feature></Feature>
  },
  {
    path:"/Blog",
    element:<Blog/>
  },
  {
    path:"/Shop",
    element:<Shop/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Register",
    element:<Register/>
  }]
  }
])