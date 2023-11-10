import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import ButtomNavigation from "../Component/ButtomNavigation/ButtomNavigation";
import Loading from "../Component/Loading/Loading";

const Main = () => {
    <Loading/>
    return (
        <div className="bg-slate-900 sm:max-w-sm">
            <Navbar ></Navbar>
            
            <Outlet></Outlet>
           
            <ButtomNavigation></ButtomNavigation>
            <Footer></Footer>
        </div>
    );
};

export default Main;