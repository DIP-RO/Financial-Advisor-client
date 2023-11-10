
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Advisor = () => {
    const [advisors, setAdvisors] = useState([]);
    // const advisors = [{ "id": "1", "name": "Jonson", "position": "COO", "email": "dipropaul032@gmail.com", "years_of_experience": 10, "education": "Bachelor of Finance from XYZ University", "firm_name": "Origin", "firm_website": "https://www.abcfinancialservices.com", "image": "https://i.ibb.co/bbRMB9T/4113045.png" },
    // { "id": "2", "name": "Smith", "position": "CTO", "email": "dipropaul032@gmail.com", "years_of_experience": 15, "education": "Bachelor of Finance from XYZ University", "firm_name": "KBC Financial Services", "firm_website": "https://www.abcfinancialservices.com", "image": "https://i.ibb.co/Qr3D2Jg/5556468.png" },
    // { "id": "3", "name": "Joe", "position": "Manager", "email": "dipropaul032@gmail.com", "years_of_experience": 15, "education": "Bachelor of Finance from XYZ University", "firm_name": "ABC Financial Services", "firm_website": "https://www.abcfinancialservices.com", "image": "https://i.ibb.co/bbRMB9T/4113045.png" },
    // { "id": "4", "name": "Selina", "position": "Financial Advisor", "email": "dipropaul032@gmail.com", "years_of_experience": 12, "education": "Bachelor of Finance from XYZ University", "firm_name": "Karim Group", "firm_website": "https://www.abcfinancialservices.com", "image": "https://i.ibb.co/9GRd3J7/1000-F-230608264-fhoq-Bu-Eyi-CPw-T0h9-Rtnsu-NAId3h-Wung-P.jpg" }]
    useEffect(() => {
        fetch('https://easy-tan-rhinoceros-hose.cyclic.app/advisor')
            .then((response) => response.json())
            .then((data) =>{
                setAdvisors(data)
             console.log(advisors);
            } );
    }, [])
  return (
    <div className="sm:max-w-sm sm:mx-2 sm:mt-3">
      <h1 className="lg:mt-10 text-2xl lg:text-5xl md:text-5xl font-bold text-white text-center md:mt-10 sm:ml-10 sm:text-center lg:text-center mb-5 md:mb-0">
       Recommended Advisors
      </h1>
      <div className="lg:my-10 grid lg:grid-cols-4  md:pl-14  md:mt-10 md:gap-5 md:w-full md:grid-cols-2 grid-cols-2 lg:gap-5 sm:gap-2">
        {advisors.map((item) => (
          <div key={item.id} className="">
            <div className="flex relative">
              <div className="absolute card bg-[#1d344a] lg:w-96 lg:m-10   lg:h-[280px] md:w-72 md:h-72 sm:h-52 sm:w-ful hover:border-solid ">
                <figure className="px-10 pt-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full lg:w-32 lg:h-32 md:w-20 md:h-20 sm:w-16 sm:h-16"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-white">{item.name}</h2>
                  <p className="text-white hover:disabled: sm:hidden">
                    {item.position}
                  </p>
                </div>
              </div>
              <div className="relative w-96 z-0 lg:ml-10 lg:mt-10 md:mt-0 sm:w-full lg:h-[280px] md:h-72 sm:h-52 border-2 border-black bg-gray-900 opacity-0 hover:opacity-100 rounded-2xl flex justify-center items-center md:w-72">
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="btn bg-[#1d344a] lg:mt-2 md:mt-8 hover:bg-[#1d344a]  text-white my-10">
          <Link to="/coming-soon">SEE MORE</Link>
        </button>
      </div>
    </div>
  );
};

export default Advisor;
