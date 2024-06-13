import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Home = lazy(() => import("../pages/home/Home.js"));
const Entertainment = lazy(() => import("../pages/home/Entertainment.js"));
const Economics = lazy(() => import("../pages/home/Economics.js"));
const Sports = lazy(() => import("../pages/home/Sports.js"));
const Politics = lazy(() => import("../pages/home/Politics.js"));
const BlogLayout3 = lazy(() => import("../pages/home/BlogLayout3.js"));
const BlogsDetails = lazy(() => import("../pages/home/BlogsDetailsPage.js"));
const Contact = lazy(() => import("../pages/home/Contact.js"));
const About = lazy(() => import("../pages/home/AboutUs.js"));

const Login = lazy(()=>import("../pages/auth/loginPage.js"));
const Register = lazy(()=>import("../pages/auth/registerPage.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/entertainment", exact: true, element: <Entertainment /> },
      { path: "/economics", exact: true, element: <Economics /> },
      { path: "/sports", exact: true, element: <Sports /> },
      { path: "/politics", exact: true, element: <Politics /> },
      { path: "/bloglayout3", exact: true, element: <BlogLayout3 /> },
      { path: "/detail", exact: true, element: <BlogsDetails /> },
      { path: "/contact", exact: true, element: <Contact /> },
      { path: "/about", exact: true, element: <About /> },
    ],
  },
];

export default ThemeRoutes;
