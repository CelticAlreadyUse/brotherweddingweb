import React from "react";
import "./pengantin.css";
import TitleBox from "../TitleBox";
const Wanita = () => {
  return (
    <div>
      <div className="relative   grid place-content-center place-items-center ">
          <img src="/assets/kerucut.webp"></img>
          <div className="mb-3">
          <TitleBox text={"Pengantin wanita"} />
          </div>
        <img
          className="w-[80%] rounded-xl object-cover"
          src="/assets/astrihd.jpeg"
        ></img>
      </div>
      <div className="flex justify-center items-center place relative ">
        <div className="bg-slate-300 absolute p-4 text-center rounded-lg ">
          <h1 className="font-semibold text-2xl dancing-script-uniquifier">
            Astri Sumarah
          </h1>
          <p
            className=" baskervville-regular z-10 text-center text-black"
            data-aos="fade-up"
          >
            Putri pertama dari <br></br>
            Ibu Suwawi Astuti
          </p>
        </div>
        <div className="absolute rotate-[15deg] mt-10 -left-16 -bottom-9 "></div>
      </div>
    </div>
  );
};

export default Wanita;
