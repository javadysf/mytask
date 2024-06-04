import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../screens/Home";
import Login from "../../screens/LoginPage";
import Register from "../../screens/RegisterPage";
import Layout from "../../components/Layout/Layout";
import ImagesPage from "../../screens/ImagesPage";
import ForgetPassword from "../../screens/ForgetPassword";

const RouterConfig = () => {
  
    const Publics = [{
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
      element: <ImagesPage />,
     },
      // {
      //   path: "/*",
      //   element: <Page404 />,
      // },
    ];

    const router = createBrowserRouter(Publics);
    
return <RouterProvider router={router} />
}
export default RouterConfig;