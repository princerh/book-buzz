import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home';
import ListedBooks from './Components/ListedBooks';
import PagesToRead from './Components/PagesToRead';
import Events from './Components/Events';
import AboutUs from './Components/AboutUs';
import Error from './Components/Error';
import BookDetails from './Components/BookDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BooookDetails from './Components/BooookDetails';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './Components/AuthProvider';
import HudaiLogin from './Components/HudaiLogin';
import HudaiRegister from './Components/HudaiRegister';
import UpdateProfile from './Components/UpdateProfile';
import PrivateRoute from './Components/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed",
        element: <PrivateRoute><ListedBooks></ListedBooks></PrivateRoute>
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/update", 
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "/events",
        element: <Events></Events>,
        loader: () => fetch("../Events.JSON")
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/book/:id",
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>, 
        loader: () => fetch("../Books.JSON")
        
      },
      {
        path: "/boook/:id",
        element: <BooookDetails></BooookDetails>
      }, 
      {
        path: "/login",
        element:  <PrivateRoute><HudaiLogin></HudaiLogin></PrivateRoute>
      },
      {
        path: "/register",
        element: <HudaiRegister></HudaiRegister>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   <ToastContainer />
   </HelmetProvider>
  </React.StrictMode>,
)
