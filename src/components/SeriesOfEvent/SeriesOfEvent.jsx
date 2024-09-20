import React from "react";
import Gratitude from "./Gratitude";
import Reception from "./Reception";
import './acara.css'
const SeriesOfEvent = () => {
  return (
    <section className="relative pb-20 mt-32">
      <h1 className="text-xl text-reception font-semibold text-white text-center mt-8">
        Rangkaian Acara
      </h1>
      <Gratitude/>
      <div className="mt-44"></div>
      <Reception/>
    </section>
  );
};

export default SeriesOfEvent;
