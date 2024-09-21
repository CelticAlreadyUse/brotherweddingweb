import React from "react";
import "./pengantin.css";
import TitleBox from "../TitleBox";
const Pria = () => {
  return (
    <div >
      <div className="relative grid place-content-center place-items-center">
        <div className="mb-2 relative grid place-content-center place-items-center  w-full">
        <img src="/assets/kerucut.webp"></img>
          <div className="absolute top-[12rem] -left-2">
          <TitleBox text={"Pengantin Pria"} />
          </div>
        </div>
        <img className="w-[50svw] rounded-xl object-cover" src="/assets/yudahd.jpeg"></img>
      </div>
      <div className="flex justify-center items-center place relative ">
        <div className="bg-slate-200 absolute p-4 text-center rounded-lg ">
    <h1 className="font-semibold text-2xl dancing-script-uniquifier">Yuda Hendri Susanto</h1>
        <p
          className=" baskervville-regular z-10 text-center text-black"
          data-aos="fade-up"
          >
          Putra Pertama dari <br></br>
          Bapak Subiyanto & Ibu Yuliana Kargiyati
        </p>
          </div>
        <div className="absolute rotate-[15deg] mt-10 -left-16 -bottom-9 ">
        </div>
      </div>
      <div className=" sticky  pt-20 flex items-center  top-0">
      <img className="absolute -left-20 top-0 bottom-0 wayang-tegak-anim" src="/assets/wayang-tegak.webp"></img>
      <img className="absolute  -right-20 -top-10 bottom-0 wayang-tegak-kanan" src="/assets/wayang-tegak.webp"></img>
      </div>
    </div>
  );
};

export default Pria;
