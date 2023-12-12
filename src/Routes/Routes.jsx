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
import AddArticle from "../pages/AddArticle/AddArticle";
import NewsDetails from "../pages/News/NewsDetails";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllArticle from "../pages/AllArticle/AllArticle";
import AllPublishedArticle from "../pages/Dashboard/AllPublishedArticle/AllPublishedArticle";
import MyNews from "../pages/Dashboard/MyNews/MyNews";
import UpdateNews from "../pages/UpdateNews/UpdateNews";
import PremiumArticle from "../pages/PremiumArticle/PremiumArticle";
import AddPublisher from "../pages/AddPublisher/AddPublisher";
import PrivateRoutes from "./PrivateRoutes";
import RateUs from "../pages/RateUs/RateUs";
import AllReviews from "../pages/AllReviews/AllReviews";
import AllPremiumNews from "../pages/AllPremiumArticle/AllPremiumNews";
  
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
          element: <PrivateRoutes><Premium></Premium></PrivateRoutes>
        },
        // {
        //   path: "premiumPackage",
        //   element: <PremiumPackage></PremiumPackage>
        // },
        {
            path:'/payment',
            element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
        }, 
        {
          path: '/profile',
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
          path: "/news/:id",
          element: <NewsDetails></NewsDetails>,
          // loader: ({params}) => fetch(`https://y-two-eosin.vercel.app/news/${params.id}`)

        },
        {
          path: "/allArticle",
          element: <PrivateRoutes><AllArticle></AllArticle></PrivateRoutes>
        }, {
          path: "/news/update/:id",
          element: <PrivateRoutes><UpdateNews></UpdateNews></PrivateRoutes>
        },
        {
          path: "/premiumArticle",
          element:<PrivateRoutes><PremiumArticle></PremiumArticle></PrivateRoutes>
        }, 
        
        
      ]
    },
    {
      path:"/dashboard",
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
        path: "adminHome",
        element:<PrivateRoutes><AdminHome></AdminHome></PrivateRoutes>
      },
      {
        path: "allUsers",
        element:<PrivateRoutes><AllUsers></AllUsers></PrivateRoutes>
      },
      {
        path: "userHome",
        element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>
      }, 

      
      {
        path: "addArticle",
        element: <PrivateRoutes><AddArticle></AddArticle></PrivateRoutes>
      },
      {
        path: "mynews",
        element: <PrivateRoutes><MyNews></MyNews></PrivateRoutes>
      },
      {
        path: "allpublishedArticle",
        element: <PrivateRoutes><AllPublishedArticle></AllPublishedArticle></PrivateRoutes>
      }, 
      {
        path: "addPublisher",
        element: <PrivateRoutes><AddPublisher></AddPublisher></PrivateRoutes>
      }, 
      {

        path: "rateus",
        element: <RateUs></RateUs>
      },
      {
        path: "allReviews",
        element: <AllReviews></AllReviews>
      },
      {
        path: "allPremiumNews",
        element: <AllPremiumNews></AllPremiumNews>
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