import React from "react";
import "./Acara.css";
import { isAndroid, isIOS } from 'react-device-detect';
import { FaCalendarDay, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import ChurchIcons from "/assets/churchIcons.png";
const Gratitude = () => {
    const openMap = () => {
      if (isIOS) {
        window.location.href = `https://www.google.com/maps/place/Gereja+Katolik+Santo+Yohanes+Paulus+2,+Tambakrejo/@-7.7138272,110.3766939,21z/data=!4m6!3m5!1s0x2e7a58d5308bb149:0x4e57b46d7832fef6!8m2!3d-7.7138676!4d110.3768931!16s%2Fg%2F11cjh_g6wd?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D`;
      } else if (isAndroid) {
        window.location.href = `https://www.google.com/maps/place/Gereja+Katolik+Santo+Yohanes+Paulus+2,+Tambakrejo/@-7.7138272,110.3766939,21z/data=!4m6!3m5!1s0x2e7a58d5308bb149:0x4e57b46d7832fef6!8m2!3d-7.7138676!4d110.3768931!16s%2Fg%2F11cjh_g6wd?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D`;
      } else {
        let urlBrowser = `https://www.google.com/maps/place/Gereja+Katolik+Santo+Yohanes+Paulus+2,+Tambakrejo/@-7.7138272,110.3766939,21z/data=!4m6!3m5!1s0x2e7a58d5308bb149:0x4e57b46d7832fef6!8m2!3d-7.7138676!4d110.3768931!16s%2Fg%2F11cjh_g6wd?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D`;
        window.open(urlBrowser,"_blank")

      }
    };
  return (
    <div className="relative ">
      <p className="text-center text-white mb-4">
        Pemberkatan Pernikahan <br />&<br />
        Upacara Syukur
      </p>
      <div className="relative">
        <div className="grid absolute z-10 top-5 right-0 left-0 place-content-center gap-4 text-white">
        <h2 className="flex gap-2">
          <FaCalendarDay size={24} />
          <span className="font-[baskervville-regular] font-medium">Sabtu 12 Oktober 2024 </span>
        </h2>
        <h2 className="flex gap-2">
          <FaClock size={24} />
          <span>10.00 WIB</span>
        </h2>
        <h2 className="flex items-start gap-2 text-start">
          <img src={ChurchIcons}></img>
          {/* Maps */}
          <span className="w-48 font-serif font-semibold">
            Gereja Katolik Santo Yohanes Paulus 2 Tambakrejo, Rejodani 1
            Sariharjo Ngaglik, Sleman
          </span>
        </h2>
        </div>
        <div className="chruch-background "></div>
      </div>
      <div className=" relative grid place-items-center h-full">
          <button onClick={openMap} className="z-20 absolute -bottom-32 px-2 py-1 bg-white font-semibold font-serif rounded-lg tracking-wider  flex items-center gap-2"><FaMapMarkerAlt /> Open Map </button>
        <iframe
          className="absolute -top-16  h-[154px] w-[355px] rounded-lg bg-green-800 px-3 py-2"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d339.5137080237623!2d110.37684826180995!3d-7.713895615057469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58d5308bb149%3A0x4e57b46d7832fef6!2sGereja%20Katolik%20Santo%20Yohanes%20Paulus%202%2C%20Tambakrejo!5e0!3m2!1sid!2sid!4v1726571720788!5m2!1sid!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      
      </div>
      <div>
      </div>
    </div>
  );
};

export default Gratitude;
