import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Page/Login/Login";
import Home from "../Page/Home/Home";
import DashBoard from "../Layout/DashBoard";
import DashboardHome from "../Page/DashboardHome/DashboardHome";
import Appointment from "../Page/Appointment/Appointment";
import About from "../Page/About/About";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contact/Contact";
import SignUp from "../Page/SignUp/SignUp";
import Booking from "../Page/Booking/Booking";
import Profile from "../Page/Profile/Profile";
import ComingSoon from "../Page/ComingSoon/ComingSoon";
import Registration from "../Page/Registration/Registration";
import AddBlog from "../Page/DashboardHome/AddBlog";
import AddService from "../Page/DashboardHome/AddService";
import AllTestimonial from "../Page/DashboardHome/AllTestimonial";
import AllAppointment from "../Page/DashboardHome/AllAppointment";
import AllUser from "../Page/DashboardHome/AllUser";
import Service from "../Component/Service/Service";
import AllServices from "../Component/Service/AllServices";

import DownloadAppPage from "../Component/DownLoadApp/DownloadAppPage";
import Advisor from "../Component/Recomand/Advisor";
import Ai from "../Page/Ai/Ai";
import Dipro from "../Page/Dipro/Dipro";
import Juss from "../Page/Dipro/Juss";
import Papon from "../Page/Dipro/Papon";
import Rafi from "../Page/Dipro/Rafi";
import Asif from "../Page/Dipro/Asif";
import Team from "../Page/Dipro/Team/Team";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path: "/app",
          element:<DownloadAppPage></DownloadAppPage>,
        },
        {
          path: "/signup",
          element:<SignUp></SignUp>,
        },
        {
          path: "/appointment",
          element:<Appointment></Appointment>,
        },
        {
          path: "/about",
          element:<About></About>,
        },
        {
          path: "/dipro",
          element:<Dipro></Dipro>,
        },
        {
          path: "/juss",
          element:<Juss></Juss>,
        },
        {
          path: "/papon",
          element:<Papon></Papon>,
        },
        {
          path: "/rafi",
          element:<Rafi></Rafi>,
        },
        {
          path: "/asif",
          element:<Asif></Asif>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>,
        },
        {
          path: "/contact",
          element:<Contact></Contact>,
        },
        {
          path: "/team",
          element:<Team></Team>,
        },
        {
          path: "/advisor",
          element:<Advisor></Advisor>,
        },
        {
          path: "/Ai",
          element:<Ai></Ai>,
        },
        {
          path: "/coming-soon",
          element:<ComingSoon></ComingSoon>,
        },
        {
          path: "/service",
          element:<Service></Service>,
        },
        {
          path: "/allService",
          element:<AllServices></AllServices>,
        },
        
       
        
      ],
    },
    {
      path: "/dashboard",
      element:<DashBoard></DashBoard>,
      children: [
        {
          path: "/dashboard",
          element: <DashboardHome></DashboardHome>,
        },
      
        {
          path: "/dashboard/booking",
          element: <Booking></Booking>,
        },
        {
          path: "/dashboard/allAppointment",
          element: <AllAppointment></AllAppointment>,
        },
      
        {
          path: "/dashboard/allUser",
          element: <AllUser></AllUser>
        },
        {
          path: "/dashboard/allTestimonial",
          element: <AllTestimonial></AllTestimonial>,
        },
        {
          path: "/dashboard/addService",
          element: <AddService></AddService>,
        },
        {
          path: "/dashboard/addBlog",
          element: <AddBlog></AddBlog>,
        },
      
        {
          path: "/dashboard/profile",
          element: <Profile></Profile>,
        },
      
        {
          path: "/dashboard/comming",
          element: <ComingSoon></ComingSoon>,
        },
        
      ],
    },
    {
      path: "/registration",
      element:<Registration></Registration>,
    }
  ]);
  