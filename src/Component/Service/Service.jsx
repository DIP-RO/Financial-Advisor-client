import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Service = () => {
    const service = 
        [{ "id": "1", "title": "Personalized Financial Planning", "description": "Our AI financial advisor offers personalized financial planning services to help you achieve your financial goals. We analyze your current financial situation and provide tailored recommendations.", "icon": "https://www.sihl.in/App_Themes/images/financial_planning-img.svg" },

        { "id": "2", "title": "Investment Advice", "description": "Get expert investment advice from our AI-powered platform. We can help you make informed investment decisions based on your risk tolerance and financial objectives.", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IUiYKGRcfMql4XtAjJsrIslWFmBfK3L0ZA&usqp=CAU" },
        { "id": "3", "title": "Budgeting Assistance", "description": "Struggling with budgeting? Our AI financial advisor can assist you in creating a budget that suits your lifestyle and financial needs.", "icon": "https://media.istockphoto.com/id/1090652214/photo/budget-with-woman-using-a-smartphone.jpg?s=612x612&w=0&k=20&c=kh6_1s4j5eJ8lEp9y-CHKgga6mPSK0oaJdtz1RNmkjM=" },
       
         
        ];
<Loading/>
    return (
        <div className="sm:max-w-sm sm:mx-2 sm:mt-3  from-slate-900 bg-slate-900">
            <h1 className="lg:mt-10 text-2xl lg:text-5xl md:text-5xl  font-bold text-white text-center md:mt-10  sm:ml-10 sm:text-center lg:text-center mb-5 md:mb-0">Our Services:</h1>
            <div className="lg:my-10 grid lg:grid-cols-3 md:pl-14  md:mt-10 md:gap-5 md:w-full md:grid-cols-2 grid-cols-2 lg:gap-5 sm:gap-2">
                {service.map((item) => (
                    <div key={item.id} className="">
                        <div className="flex relative">
                            <div className="absolute card bg-[#1d344a] lg:w-96 lg:m-10 border-dashed border-2 lg:h-[280px] md:w-72 md:h-72 sm:h-52 sm:w-full border-white hover:border-solid ">
                                <figure className="px-10 pt-10">
                                    <img src={item.icon} alt={item.title} className="rounded-full lg:w-32 lg:h-32 md:w-20 md:h-20 sm:w-16 sm:h-16" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-white">{item.title}</h2>
                                    <p className="text-white hover:disabled: sm:hidden">{item.description}</p>
                                </div>
                            </div>
                            <div className="relative w-96 z-0 lg:ml-10 lg:mt-10 md:mt-0 sm:w-full lg:h-[280px] md:h-72 sm:h-52 border-2 border-black bg-gray-900 opacity-0 hover:opacity-100 rounded-2xl flex justify-center items-center md:w-72">
                                <Link to="/appointment">
                                <button className="animate-bounce btn bg-[#1d344a] hover:bg-[#1d344a] text-white">Consult Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center ">
            <button className="btn bg-[#1d344a] lg:mt-2 md:mt-8 hover:bg-[#1d344a]  text-white my-10">
                <Link to="/allService">SEE MORE</Link>
            </button>
            </div>
        </div>
    );
};

export default Service;
