import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Premium from "../pages/Premium/Premium";
import PremiumPackage from "../pages/Premium/PremiumPackage";
import Payment from "../pages/payment/Payment";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/premium",
          element: <Premium></Premium>
        },
        {
          path: "premiumPackage",
          element: <PremiumPackage></PremiumPackage>
        },
        {
            path:'payment',
            element: <Payment></Payment>
        }
        
      ]
    },
    {
        path: "/signin",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    },
    
  ]);

  export default router;