import { RouterProvider } from 'react-router-dom';
import routerList from './router-list';

export default function Routers() {
  return (
    <>
      <RouterProvider router={routerList} />
    </>
  );
}
