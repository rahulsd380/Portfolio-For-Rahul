import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './pages/Home/Home';
import Dashboard from './pages/Rahul/Dashboard/Dashboard';
import Verify from './pages/Rahul/Verify';
import DashboardLayout from './Layout/DashboardLayout/DashboardLayout';
import AboutMe from './pages/Rahul/Dashboard/pages/AboutMe/AboutMe';
import MyServices from './pages/Rahul/Dashboard/pages/MyServices/MyServices';
import Endorsments from './pages/Rahul/Dashboard/pages/Endorsments/Endorsments';
import ProfessionalSkills from './pages/Rahul/Dashboard/pages/ProfessionalSkills/ProfessionalSkills';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/verify-yourself',
        element : <Verify/>
      },
      {
        path : '/rahul-sutradhar/admin/dashboard',
        element : <Dashboard/>
      },
    ]
  },
  {
    path: "/rahul-sutradhar/admin/dashboard",
    element: <DashboardLayout/>,
    children : [
      {
        path : '',
        element : <Dashboard/>
      },
      {
        path : 'about-me',
        element : <AboutMe/>
      },
      {
        path : 'my-services',
        element : <MyServices/>
      },
      {
        path : 'endorsements',
        element : <Endorsments/>
      },
      {
        path : 'professional-skills',
        element : <ProfessionalSkills/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
