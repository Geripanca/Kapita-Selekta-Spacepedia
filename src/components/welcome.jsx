// components/Welcome.jsx
import React, { useState } from "react";
import "./Welcome.css";

const Welcome = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="text-center lg:text-left mt-12 mx-5">
          <h2 className="text-white text-4xl font-bold mb-4 animate-pulse">SPACEPEDIA</h2>
          <p className="text-gray-700 text-1xl text-justify mb-6">
            Jelajahi keajaiban luar angkasa dengan sumber informasi terkini! Temukan rahasia planet, meteor, satelit, dan benda langit lainnya dengan fitur-fitur keren seperti <i>Augmented Reality</i> (AR) dan <i>Virtual Reality</i> (VR).
            Serta, nikmati pengalaman bermain game yang menghibur dan mendidik seputar kosmos yang begitu luas.
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <img src="../public/Ilustrasi-Astronot.png" alt="Ilustrasi" className="w-1/2 h-auto mx-auto mt-20 floating-image" />
      </div>
    </div>
  );
};

export default Welcome;
