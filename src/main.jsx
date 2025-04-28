import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Login from './Login/Login';
import Register from './Register/Register';

import Home from './Home/Home';
import AuthProvider from './AuthProvider';
import Order from './Order/Order';
import PrivateRoute from './Routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  
  children: [

    {
      path:"/home",
      element:<Home></Home>

    },
    {
      path:"/order",
      element:<PrivateRoute><Order></Order></PrivateRoute>
    },
    {
      path: "/logIn",
      element: <Login></Login>,
    },
    {
      path:"/register",
      element:<Register></Register>,
    }
  ],
 
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
 

  
  </React.StrictMode>,
)
