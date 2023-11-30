import React, { useState } from "react";
import Card from "./card";

const Fitur = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cardsData = [
    {
      image: "./ilustrasi-materi.jpg",
      title: "Materi",
      description: "Berisi Materi-materi.",
      buttonLabel: "Mulai",
      link: "/materi",
    },
    {
      image: "./ilustrasi-VR.jpg",
      title: "Virtual Reality",
      description: "Jalan-jalan dengan VR.",
      buttonLabel: "Mulai",
    },
    {
      image: "./Ilustrasi-AR.jpg",
      title: "Augmented Reality",
      description: "Lihat secara langsung.",
      buttonLabel: "Mulai",
    },
  ];

  return (
    <div className="bg-black py-20">
      <div className="text-center py-3 ">
        <h1 className="text-2xl  text-white font-bold mb-4" id="fitur">
          FITUR
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

export default Fitur;
