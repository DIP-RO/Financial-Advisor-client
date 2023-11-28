import { Link } from "react-router-dom";


const Papon = () => {
    return (
        <div className="card lg:card-side  shadow-xl m-10">
        <figure className="w-1/4 h-1/2 rounded-full">
          <img
            src="https://i.ibb.co/Qr3D2Jg/5556468.png"
            alt="Album"
          />
        </figure>
        <div className="card-body flex-col justify-center items-center">
          <h2 className="card-title text-white">My Name Is Papon Chandra Bir</h2>
          <p className="text-white">Id : 221-15-4727</p>
          <Link to="https://drive.google.com/drive/folders/1qe4HgggwrLSXsZFRmxj03pwnftWjxHEp?usp=drive_link"><p className="text-cyan-400 underline-offset-1">Video Presentation Link</p></Link><br/>
          <h2 className="text-2xl text-white">Assignment</h2>
         
          <Link to="https://drive.google.com/drive/folders/1qe4HgggwrLSXsZFRmxj03pwnftWjxHEp?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V1</p></Link>
          <Link to="https://drive.google.com/drive/folders/1qe4HgggwrLSXsZFRmxj03pwnftWjxHEp?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V2</p></Link>
          <Link to="https://drive.google.com/drive/folders/1qe4HgggwrLSXsZFRmxj03pwnftWjxHEp?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V3</p></Link>
          <Link to="https://drive.google.com/drive/folders/1qe4HgggwrLSXsZFRmxj03pwnftWjxHEp?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V4</p></Link>
          <Link to="https://drive.google.com/drive/folders/1qe4HgggwrLSXsZFRmxj03pwnftWjxHEp?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V5</p></Link>

        </div>
      </div>
    );
};

export default Papon;