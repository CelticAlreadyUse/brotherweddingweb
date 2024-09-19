import React from "react";
import "./description.css";
const Description = () => {
  return (
    <section className="root">
      <div className="text">
        <div className="text-section mx-5 mt-4 ">
          <p className="text-description tracking-wider">
            "Tuhan membuat segala sesuatu indah pada waktunya Indah saat Dia
            mempertemukan Indah saat Dia menumbuhkan kasih Indah saat Dia
            mempersatukan putra-putri kami dalam Pernikahan Kudus"
          </p>
        </div>
        <div className="mt-20 relative grid mx-auto place-items-center">
          <img
            className="object-cover w-svw min-h-16 max-h-fit -mt-10 "
            src={"/assets/3.svg"}
          ></img>
          <p className="text-description tracking-wider text-center">
            “Demikian mereka bukan lagi dua, melainkan satu. Karena itu, apa
            yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”
            <br />
            Matius 19:6
          </p>
          <img
            className="w-64 mt-10"
            data-aos="zoom-in-down"
            src={"/assets/Icons1.png"}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Description;
