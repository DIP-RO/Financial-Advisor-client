import Loading from "../Loading/Loading";

const Testymony = () => {
    const testymony = [
        {
            id: 1,
            name: 'Stella Larson',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/bbRMB9T/4113045.png",
        },
        {
            id: 2,
            name: 'Olga Jhonso',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/Qr3D2Jg/5556468.png",
        },
        {
            id: 3,
            name: 'Paul Smith',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/bbRMB9T/4113045.png",
        },
        {
            id: 4,
            name: 'Nat Reynolds',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/9GRd3J7/1000-F-230608264-fhoq-Bu-Eyi-CPw-T0h9-Rtnsu-NAId3h-Wung-P.jpg",
        },
    ];
<Loading/>
    return (
        <div className="flex flex-col justify-center items-center my-20 sm:hidden">
            <div>
                <h1 className="text-center text-4xl font-['Orbitron'] font-bold leading-[14px] uppercase text-white w-min">Feedback</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-6 mt-10 ">
                {testymony.map((testy) => (
                    <div
                        key={testy.id}
                        className="flex flex-col gap-5 w-[270px] h-[350px] items-center p-8 rounded-[22px] bg-[#1d344a]"
                    >
                        <img src={testy.image} className="w-[75px] h-[75px] rounded-full" alt={testy.name} />
                        <div className="text-center font-['Montserrat'] font-bold tracking-[2] leading-[19.2px] uppercase text-[#bdcdf1] mb-0">
                            {testy.name}
                        </div>
                        <div className="text-center font-['Open_Sans'] leading-[25.6px] text-white">
                            {testy.message}
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn bg-[#1d344a] hover:bg-[#1d344a] mt-4 text-white">SEE MORE</button>
        </div>
    );
};

export default Testymony;
