import { useEffect, useState } from "react";
import Heading from "./components/Content/Content.jsx";
import TitleContent from "./components/titleContent/Description.jsx";
import PengantinPria from "./components/Pengantin/Pria.jsx";
import PengantinWanita from "./components/Pengantin/Wanita.jsx";
import SeriesOfEvent from "./components/SeriesOfEvent/SeriesOfEvent.jsx";
import "aos/dist/aos.css";
import { isAndroid } from "react-device-detect";
import Aos from "aos";
function App() {
  // console.log("tes 3");
  // const [isMobile, setIsMobile] = useState(false);
  // const [isDesktop, setIsDesktop] = useState(false);
  useEffect(()=>{
    Aos.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
  },)
  // useEffect(() => {
  //   AOS.init({
  //     duration: 700,
  //     easing: "ease-out-cubic",
  //   });
  //   const userAgent = navigator.userAgent;

  //   if (/android|iphone|ipad|ipod/i.test(userAgent)) {
  //     setIsMobile(false);
  //     console.log("your in mobile");
  //   } else {
  //     setIsDesktop(false);
  //     console.log("your in desktop");
  //   }
  // }, []);
  return (
    <div className="overflow-x-hidden">
      {/* {isDesktop && (
        <div className="flex h-svh w-svw bg-gray-500 items-center justify-center">
          <h1 className="text-3xl font-semibold text-white ">
            Please open with mobile devices
          </h1>   
        </div>
      )} */}

        <div className="bg-[#23532e]  ">
          <div className="fixed open-right top-0 bottom-0 left-0  z-20  bg-white"></div>
          <div className="fixed open-left  top-0 bottom-0 right-0 z-20 bg-white"></div>
          <div className="relative">
            <Heading />
          </div>
          <div data-aos="fade-up">
            <TitleContent />
          </div>
          <section data-aos="fade-up">
            <PengantinPria />
            <div className="mt-10">
              <PengantinWanita />
            </div>
          </section>
          <SeriesOfEvent />
        </div>
    </div>
  );
}

export default App;
