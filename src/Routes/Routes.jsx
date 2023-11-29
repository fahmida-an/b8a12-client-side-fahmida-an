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
          element: <UpdateNews></UpdateNews>
        },
        {
          path: "/premiumArticle",
          element:<PremiumArticle></PremiumArticle>
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
        element:<AdminHome></AdminHome>
      },
      {
        path: "allUsers",
        element:<AllUsers></AllUsers>
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>
      }, 

      
      {
        path: "addArticle",
        element: <AddArticle></AddArticle>
      },
      {
        path: "mynews",
        element: <MyNews></MyNews>
      },
      {
        path: "allpublishedArticle",
        element: <AllPublishedArticle></AllPublishedArticle>
      }, 
      {
        path: "addPublisher",
        element: <AddPublisher></AddPublisher>
      }, 
      {

        path: "rateus",
        element: <RateUs></RateUs>
      },
      {
        path: "allReviews",
        element: <AllReviews></AllReviews>
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