import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Activation from './Components/Activation/Activation';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Fallback from './Components/Fallaback/Fallback';
import Profile from './Components/Profile/Profile';
import Permission from './Components/Permission/Permission';
import ItemTable from './Components/Item/ItemTable';
import CreateItem from './Components/Item/CreateItem';
import UpdateItem from './Components/Item/UpdateItem';
import Home from './Components/Dashboard/Home';
import Settings from './Components/Settings/Settings';
import DeleteRole from './Components/Role/DeleteRole';
import UpdateRole from './Components/Role/UpdateRole';
import Role from './Components/Role/CreateRole';

const RoutingModule = () => {
  const AppRoute = createBrowserRouter([
    {
      path: '/',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgetPassword',
      element: <ForgetPassword />
    },
    {
      path: '/resetPassword',
      element: <ResetPassword />
    },
    {
      path: '/activate',
      element: <Activation />
    },
    {
      path: '/auth',
      element: <Auth />
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        {
          path: 'role',
          element: <Role />
        },
        {
          path: 'table',
          element: <Permission />
        },
        {
          path: 'delRole',
          element: <DeleteRole />
        },
        {
          path: 'updateRole',
          element: <UpdateRole />
        },
        {
          path: 'itemtable',
          element: <ItemTable />
        },
        {
          path: 'item',
          element: <CreateItem />
        },
        {
          path: 'updateItem',
          element: <UpdateItem />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'settings',
          element: <Settings />
        }
      ]
    },
    {
      path: '*',
      element: <Fallback />
    }
  ]);
  return <RouterProvider router={AppRoute}></RouterProvider>;
};

export default RoutingModule;
