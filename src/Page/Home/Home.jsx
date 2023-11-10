import MakeAppointment from "../../Component/MakeAppointment/MakeAppointment";
import Carusel from "../../Component/Carusel/Carusel";
import Facility from "../../Component/Facility/Facility";
import Subscribe from "../../Component/Subscribe/Subscribe";
import Testymony from "../../Component/Testymony/Testymony";

import Service from "../../Component/Service/Service";

import Question from "../../Component/Question/Question";

import Introducing from "./Introducing/Introducing";
import Loading from "../../Component/Loading/Loading";
import Advisor from "../../Component/Recomand/Advisor";


const Home = () => {
    <Loading/>
    return (
        <div className="sm:max-w-sm">
         
            <Introducing></Introducing>
            <Carusel ></Carusel>
            
            <Service></Service>
            
          
            <Advisor></Advisor>
            <MakeAppointment></MakeAppointment>
            <Testymony></Testymony>
            <Facility></Facility>
            <Question></Question>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;