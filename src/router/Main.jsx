import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Aos from "aos";
import Opening from "../Pages/Opening";

const Main = () => {
    useEffect(() => {
        Aos.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    },[])
  return (
      <Routes>
        <Route path="/" element={<Opening />}></Route>
        <Route path="/home" element={<App />}></Route>
      </Routes>
  );
};

export default Main;
