import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../auth/Login/Login";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../auth/Register/Register";
import Profile from "../auth/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About/> },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
        { path: 'login', element: <Login /> },
        { path: 'profile', element: <Profile /> },
        { path: 'register', element: <Register /> },
    ]
  },
  { path: "/*", element: <p>not found</p> },
]);

export default router;