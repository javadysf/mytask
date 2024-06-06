import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "../../screens/Home";
import Login from "../../screens/LoginPage";
import Register from "../../screens/RegisterPage";
import Layout from "../../components/Layout/Layout";
import ImagesPage from "../../screens/ImagesPage";
import ForgetPassword from "../../screens/ForgetPassword";
import Page404 from "../../screens/Page404";
import { getItem } from "../Services/common/storage.services";
const RouterConfig = () => {
  const token = getItem("token");
    const pageUrls = [{
      path: "/",
       element: <Layout />,
      children: [
         {
          path: "/",
          element: <Home />,
         },
         {
          path: "/login",
          element: <Login />,
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
    { 
      
      path: "/images",
      element: token?<ImagesPage />:<Page404/>,
     },
      {
        path: "/*",
        element: <Page404/>,
      },
    ];

    const router = createBrowserRouter(pageUrls);
    
return <RouterProvider router={router} />
}
export default RouterConfig;