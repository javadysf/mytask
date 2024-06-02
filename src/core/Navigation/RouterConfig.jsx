import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../screens/Home";
import Login from "../../screens/LoginPage";
import Register from "../../screens/RegisterPage";
import Layout from "../../components/Layout/Layout";
import ImagesPage from "../../screens/ImagesPage";

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