import { createBrowserRouter } from 'react-router-dom';
import LandingPage from 'src/module/landingPage';
import CartPage from 'src/module/cart';
import Login from 'src/module/login';
import Registration from 'src/module/registration';
import LoginAdmin from 'src/module/admin/login';
import Payment from 'src/module/payment';
import PaymentDetail from 'src/module/payment/pages/PaymentDetail';

const routerList = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Registration />,
  },
  {
    path: 'admin/login',
    element: <LoginAdmin />,
  },
  {
    path: 'cart/payment/:id',
    element: <Payment />,
  },
  {
    path: 'cart/payment-detail/:id',
    element: <PaymentDetail />,
  },
]);

export default routerList;
