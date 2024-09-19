import React from "react";
import "./pengantin.css";
import TitleBox from "../TitleBox";
const Pria = () => {
  return (
    <div className="">
      <div className="relative grid place-content-center mt-10">
        <div className="mb-2">
          <TitleBox text={"Pengantin Pria"} />
        </div>

        <img src="/assets/Frame 2.svg" className="w-[281px] h-[221px]  rounded-tl-[82px] rounded-br-[82px] border-b-white"></img>

        <div className="grid place-content-center place-items-center w-full">
          <div className="bg-[#C89860]   h-8 place-content-center absolute bottom-0 right-0  rounded-l-[23px] px-9">
            <h1
              data-aos="fade-left"
              className="text-white text-center font-bold text-lg baskervville-bold-title  "
            >
              Florentinus Yuda Hendri Susanto
            </h1>
          </div>
        </div>
        <div className="rotate-180 absolute right-0 -top-9">
          <img
            className="w-52 mt-10  right-0"
            data-aos="zoom-in-down"
            src={"/assets/1.svg"}
          ></img>
        </div>
      </div>
      <div className="flex justify-end place relative ">
        <p
          className=" baskervville-regular z-10 text-center text-white"
          data-aos="fade-up"
        >
          Putra Pertama dari <br></br>
          Bapak Subiyanto & Ibu Yuliana Kargiyati
        </p>
        <div className="absolute rotate-[20deg] mt-10 -left-8 -bottom-4 ">
          <img
            className="w-[13.5rem]  "
            data-aos="zoom-in-down "
            src={"/assets/1.svg"}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Pria;
