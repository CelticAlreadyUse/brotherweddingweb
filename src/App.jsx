import { useEffect, useState, } from "react";
import Heading from "./components/Content/Content.jsx";
import TitleContent from './components/titleContent/Description.jsx'
import PengantinPria from "./components/Pengantin/Pria.jsx";
import PengantinWanita from "./components/Pengantin/Wanita.jsx";
import SeriesOfEvent from "./components/SeriesOfEvent/SeriesOfEvent.jsx";
import AOS from 'aos'
import "aos/dist/aos.css"
import { isAndroid } from "react-device-detect";
function App() {
const [isMobile, setIsMobile] = useState(false);
const [isDesktop, setIsDesktop] = useState(false);
  useEffect(()=>{
    AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
      });
      const userAgent = navigator.userAgent;

  if (/android|iphone|ipad|ipod/i.test(userAgent)) {
    setIsMobile(true);
    console.log("your in mobile")
  } else {
    setIsDesktop(true);
    console.log("your in desktop")
  }
},[])

  return (
    <div>
      {isAndroid && 
      <div className="flex h-svh w-svw bg-gray-500 items-center justify-center">
        <h1 className="text-3xl font-semibold text-white ">Please open with mobile devices</h1>
        </div>}
      {isDesktop && 
      <div className="bg-[#23532e]">
      <div className="fixed open-right top-0 bottom-0 left-0   z-20  bg-white">
      </div>
      <div className="fixed open-left grid text-center place-content-center  w-screen z-10 h-svh bg-white">
      </div>
    <div data-aos="fade-down">
      <Heading />
    </div>
    <div data-aos="fade-up">
      <TitleContent/>
    </div>
      <section data-aos="fade-up">
      <PengantinPria/>
      <div className="mt-10">
      <PengantinWanita/>
      </div>
      </section>
      <SeriesOfEvent/>
      </div>
    }
    </div>
   
  )
}

export default App;
