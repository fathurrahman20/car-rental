import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../module/landingPage";
import CartPage from "../../module/cart";
import Login from "../../module/login";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default routerList;
