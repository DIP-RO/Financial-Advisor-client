import { Link } from "react-router-dom";


const Team = () => {
    return (
        <div>
            <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box w-52">
                <li className="text-white">
                <Link to="/dipro">Dipro Paul(221-15-5666)</Link>
                </li>
                <li className="text-white">
                <Link to="/juss"> MD.Riyazus Salehin(221-15-5592)</Link>
                </li>
                <li className="text-white">
                <Link to="/papon"> Papon Chandra Bir</Link>
                </li>
                <li className="text-white">
                <Link to="/rafi"> Inteshar Rahman Rafi</Link>
                </li>
                <li className="text-white">
                <Link to="/asif"> Md. Asif Hossain</Link>
                </li>
              </ul> 
        </div>
    );
};

export default Team;