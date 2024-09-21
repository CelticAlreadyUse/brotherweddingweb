import { useEffect, useState } from "react";
import Heading from "./components/Content/Content.jsx";
import TitleContent from "./components/titleContent/Description.jsx";
import PengantinPria from "./components/Pengantin/Pria.jsx";
import PengantinWanita from "./components/Pengantin/Wanita.jsx";
import SeriesOfEvent from "./components/SeriesOfEvent/SeriesOfEvent.jsx";
import "aos/dist/aos.css";
import Aos from "aos";
import "./index.css"
function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="grid overflow-x-hidden bg-slate-500 place-content-center place-items-center">
        <div className=" max-w-[375px]  bg-green-800 ">
          <section className="bg-green-800">
          <div className="fixed open-right top-0 bottom-0 left-0  z-20  bg-white"></div>
          <div className="fixed open-left  top-0 bottom-0 right-0 z-20 bg-white"></div>
          <div className="w-full h-full">
            <Heading />
          </div>
          <div className="z-30" data-aos="fade-up">
            <TitleContent />
          </div>
          </section >
          <section className="relative">
            <div className="bg-pengantin absolute top-0 bottom-0 w-full z-0 h-ful ">
            </div>
            <PengantinPria />
            <div className="mt-10">
              <PengantinWanita />
            </div>
          </section>
          <SeriesOfEvent />
        </div>
    </div>
        )}


export default App;
