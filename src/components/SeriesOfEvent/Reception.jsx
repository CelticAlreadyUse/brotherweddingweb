import React, { useEffect } from "react";
import { FaCalendarDay, FaClock, FaMapMarked } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos'
import "aos/dist/aos.css"
const Reception = () => {
  return (
    <div className="relative">
      <h1  data-aos="fade-up" className="text-center font-bold text-4xl text-white mb-4">
        Pemberkatan Pernikahan <br />&<br />
        Upacara Syukur
      </h1>
      <div className="relative">
        <div className="grid  z-10 top-5 right-0 left-0 place-content-center gap-4 text-white">
          <h2 className="flex gap-2">
            <FaCalendarDay size={24} />
            <span className="font-[baskervville-regular] font-medium">
              Minggu, 20 Oktober 2024{" "}
            </span>
          </h2>
          <h2 className="flex gap-2">
            <FaClock size={24} />
            <span>10.00 WIB</span>
          </h2>
          <h2 className="flex items-start gap-2 text-start">
          <FaLocationDot size={24}/>
            {/* Maps */}
            <span className="w-48 font-serif font-semibold">
              Kediaman Mempelai Wanita <br /> Tampungan Sendangtirto Berbah
              Sleman
            </span>
          </h2>
        </div>
      </div>
      <div className=" relative mt-4  grid place-items-center">
        <div className="flex items-center gap-4 text-white">
      <FaMapMarked size={42}  /> 
        <h1 className="font-bold text-xl">Maps</h1>
        </div>
        <iframe
               className="  h-[154px] w-[355px] rounded-lg bg-green-800 px-3 py-2"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.8158190118234!2d110.42721307500528!3d-7.809312992211174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDgnMzMuNSJTIDExMMKwMjUnNDcuMiJF!5e0!3m2!1sid!2sid!4v1726577569400!5m2!1sid!2sid"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div></div>
    </div>
  );
};

export default Reception;
