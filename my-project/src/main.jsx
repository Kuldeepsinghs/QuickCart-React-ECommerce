import { Mymap } from "./Map/Mymap.jsx";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthContext from "./contextapi/AuthContext.jsx";
import Cartcontext from "./contextapi/Cartcontext.jsx";
import WishlistProvider from "./contextapi/WishlistContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <WishlistProvider>
    <AuthContext>
      <Cartcontext>
        <RouterProvider router={Mymap} />
      </Cartcontext>
    </AuthContext>
  </WishlistProvider>
);
