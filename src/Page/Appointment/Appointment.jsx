
import 'react-day-picker/dist/style.css';
import Loading from "../../Component/Loading/Loading";
import Advisors from './Advisors';

const Appointment = () => {

<Loading/>
    return (
        <div className="flex flex-col w-full  items-center lg:my-10 md:my-10 xl:my-10 sm:max-w-sm">
             <div className="text-3xl font-['Poppins'] font-semibold leading-[32px] text-white">
                Find your Advisor
            </div>
            <div className="flex flex-row justify-center items-center align-middle gap-5">
            <input className="w-full h-10 rounded-[35px] mt-5 px-5" type="url" placeholder="Search" />
            <select className="bg-white mt-5 h-10 hover:bg-white rounded-full" >
                            <option value="ALL" className="lang">
                              All
                            </option>
                            <option value="বাংলা"  className="lang">
                            Dept Management
                            </option>
                            <option value="বাংলা"  className="lang">
                            Tax Management
                            </option>
                            <option value="বাংলা"  className="lang">
                            Investment
                            </option>
                        </select>
           </div>
         <Advisors></Advisors>
            <div className=" w-1/2 flex flex-col justify-center sm:mt-3  sm:w-3/4 sm:p-5 h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-6xl lg:text-4xl md:text-3xl sm:text-lg  font-['Poppins'] font-semibold leading-[32px] text-white">
                    TAKE APPOINTMENT
                </div>
            </div>
            <div className="text-3xl mt-10 font-['Poppins'] font-semibold leading-[32px] text-white">
                Online Now
            </div>
         <Advisors></Advisors>
           

           
        </div>
    );
};

export default Appointment;