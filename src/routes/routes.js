import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Verify from "../pages/Rahul/Verify";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Rahul/Dashboard/Dashboard";
import AboutMe from "../pages/Rahul/Dashboard/pages/AboutMe/AboutMe";
import MyServices from "../pages/Rahul/Dashboard/pages/MyServices/MyServices";
import EndorsmentsTable from "../pages/Rahul/Dashboard/pages/Endorsments/EndorsmentsTable";
import ProfessionalSkills from "../pages/Rahul/Dashboard/pages/ProfessionalSkills/ProfessionalSkills";
import Root from "./../Layout/Root/Root";
import BlogDetails from "./../pages/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogDetails />,
      },
      {
        path: "/verify-yourself",
        element: <Verify />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/api/v1/professional-skills/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/rahul-sutradhar/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "my-services",
        element: <MyServices />,
      },
      {
        path: "endorsements",
        element: <EndorsmentsTable />,
      },
      {
        path: "professional-skills",
        element: <ProfessionalSkills />,
      },
    ],
  },
]);
