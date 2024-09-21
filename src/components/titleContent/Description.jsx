import React from "react";
import "./description.css";
const Description = () => {
  return (
    <section className="root bg-[#d3e5a8] ">
      <div className="text">
        <div className="text-section mx-5 mt-4 ">
          <p className="text-description font-semibold tracking-wider text-[#9a621a] text-center">
            "Tuhan membuat segala sesuatu indah pada waktunya Indah saat Dia
            mempertemukan Indah saat Dia menumbuhkan kasih Indah saat Dia
            mempersatukan putra-putri kami dalam Pernikahan Kudus"
          </p>
        </div>
        <div className="mt-20 h-fit relative grid mx-auto place-items-center">
          <img
            className="w-svw scale-100 scale-x-100 h-64 -mt-28 "
            src={"/assets/3.svg"}
          ></img>
          <p className="text-[#dd912e] font-semibold text-description tracking-wider text-center">
            “Demikian mereka bukan lagi dua, melainkan satu. Karena itu, apa
            yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”
            <br />
            Matius 19:6
          </p>
          <div className="flex w-svw justify-center items-center">
          <img
            className="w-36 mt-10 h-36  bottom max-w-56 max-h-56"
            src={"/assets/pengantin.webp"}
            ></img>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
