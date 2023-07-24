import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../module/landingPage";
import CartPage from "../../module/cart";
import Login from "../../module/login";
import Registration from "../../module/registration";

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
  {
    path: "registration",
    element: <Registration />,
  },
]);

export default routerList;
