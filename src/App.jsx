import { useEffect, useState } from "react";
import Heading from "./components/Content/Content.jsx";
import TitleContent from "./components/titleContent/Description.jsx";
import PengantinPria from "./components/Pengantin/Pria.jsx";
import PengantinWanita from "./components/Pengantin/Wanita.jsx";
import SeriesOfEvent from "./components/SeriesOfEvent/SeriesOfEvent.jsx";
import "aos/dist/aos.css";
import { isAndroid } from "react-device-detect";
import Aos from "aos";
import "./index.css"
function App() {
  // console.log("tes 3");
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
    const userAgent = navigator.userAgent;

    if (/android|iphone|ipad|ipod/i.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsDesktop(true);
    }
  }, []);
  return (
    <div className="overflow-x-hidden">
      {isDesktop && (
        <div className="flex h-svh w-svw bg-gray-500 items-center justify-center">
          <h1 className="text-3xl font-semibold text-white ">
            Please open with mobile devices
          </h1>   
        </div>
      )}
      {isMobile && (
        <div className=" relative bg-green-800 ">
          <section className="bg-green-800">
          <div className="fixed open-right top-0 bottom-0 left-0  z-20  bg-white"></div>
          <div className="fixed open-left  top-0 bottom-0 right-0 z-20 bg-white"></div>
          <div className="relative">
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
        )}
    </div>
  );
}

export default App;
