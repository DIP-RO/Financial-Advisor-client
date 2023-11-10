import { Link } from "react-router-dom";


const Dipro = () => {
    return (
        <div className="card lg:card-side  shadow-xl m-10">
      <figure className="w-1/4 h-1/2 rounded-full">
        <img
          src="https://i.ibb.co/KWGpK5z/profile.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body flex-col justify-center items-center">
        <h2 className="card-title text-white">My Name Is Dipro Paul</h2>
        <p className="text-white">Id : 221-15-5666</p>
        <h2 className="text-2xl text-white">Assignment</h2>
        <Link to="https://drive.google.com/drive/folders/1oM9RoLYyslpLrk-_RiPJjXHKly6kjPwl?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V1</p></Link>
        <Link to="https://drive.google.com/drive/folders/1oM9RoLYyslpLrk-_RiPJjXHKly6kjPwl?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V2</p></Link>
        <Link to="https://drive.google.com/drive/folders/1oM9RoLYyslpLrk-_RiPJjXHKly6kjPwl?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V3</p></Link>
      </div>
    </div>
    );
};

export default Dipro;