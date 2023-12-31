import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className='h-[700px] w-full flex justify-center items-center'>
            <HashLoader color="#36a1d6" />
        </div>
    );
};

export default Loading;