import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../../components/Home/HomeModule";
import Login from "../../components/LoginModule/LoginModule";
import Register from "../../components/RegisterModule/RegisterModule";
import Layout from "../../components/Layout/Layout";
import ImagesPage from "../../components/ImagesModule/ImagesModule";
import ForgetPassword from "../../components/ForgetPasswordModule/ForgetPasswordModule";
import Page404 from "../../components/Page404/Page404";

const RouterConfig = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
     // Check if user is logged in when the component mounts
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const k = "hi"
  const pageUrls = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          // if login was successful change the state to true
          element: <Login setIsLoggedIn={setIsLoggedIn} />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/forgetpassword",
          element: <ForgetPassword />,
        },
      ],
    },
    // if logout was successful change the state to false and dont show the element
    isLoggedIn&&
    {
      path: "/images",
      element:<ImagesPage setIsLoggedIn={setIsLoggedIn} />,
    },
    {
      path: "/*",
      element: <Page404 />,
    },
  ];

  const router = createBrowserRouter(pageUrls);

  return <RouterProvider router={router} />;
};
export default RouterConfig;
