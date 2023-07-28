import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../module/landingPage";
import CartPage from "../../module/cart";
import Login from "../../module/login";
import Registration from "../../module/registration";
import LoginAdmin from "../../module/loginadmin";

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
  {
    path: "loginadmin",
    element: <LoginAdmin />,
  }
]);

export default routerList;
