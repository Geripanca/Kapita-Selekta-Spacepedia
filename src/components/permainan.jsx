import React, { useState } from "react";
import Card from "./card";

const Permainan = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cardsData = [
    {
      image: "./ilustrasi-kuis.jpg",
      title: "Kuis",
      description: "Uji pengetahuanmu!",
      buttonLabel: "Mulai",
      link: "/kuis",
    },
  ];

  return (
    <div className="bg-black py-20">
      <div className="text-center py-3 ">
        <h1 className="text-2xl  text-white font-bold mb-4" id="permainan">
          KUIS
        </h1>
        <hr className="mx-auto w-16 border-t-2 border-white top-7 z-0 animate-pulse" />
      </div>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <div key={index} className="m-4">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Permainan;
