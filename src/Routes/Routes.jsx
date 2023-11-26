import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Premium from "../pages/Premium/Premium";
// import PremiumPackage from "../pages/Premium/PremiumPackage";
import Payment from "../pages/payment/Payment";
import Profile from "../pages/Profile/Profile";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/AdminHome/AdminHome";
import UserHome from "../pages/UserHome/UserHome";
  
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
        // {
        //   path: "premiumPackage",
        //   element: <PremiumPackage></PremiumPackage>
        // },
        {
            path:'/payment',
            element: <Payment></Payment>
        }, 
        {
          path: '/profile',
          element: <Profile></Profile>
        }
        
      ]
    },
    {
      path:"/dashboard",
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
        path: "adminHome",
        element:<AdminHome></AdminHome>
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>
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