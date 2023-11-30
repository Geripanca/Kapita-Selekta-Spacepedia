// components/Navbar.jsx
import React, { useState } from "react";

const Tentang = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-center bg-black text-white mt-20 pt-5">
      <div className="text-center ">
        <h1 className="text-2xl  font-bold mb-4 " id="tentang">
          TENTANG
        </h1>
        <hr className="mx-auto w-16 border-t-2 border-white top-7 z-0 animate-pulse" />
        <p className="text-justify mx-auto w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 text-gray-700 text-base sm:text-base  lg:text-lg xl:text-xl p-4 sm:p-4 md:p-4 lg:p-4 xl:p-4">
          {" "}
          Selamat datang di <i>website</i> Spacepedia! Kami bangga memperkenalkan media pembelajaran inovatif kami yang didedikasikan untuk meningkatkan pemahaman siswa terhadap sains, khususnya dalam materi pengenalan luar angkasa.
          Spacepedia dirancang khusus untuk membuat pembelajaran luar angkasa menjadi lebih menarik dan modern. Kami menyajikan materi-materi berkualitas tinggi dengan menggunakan berbagai fitur canggih, termasuk teknologi{" "}
          <i>Augmented Reality</i> (AR) dan
          <i> Virtual Reality</i> (VR) yang memungkinkan siswa untuk merasakan pengalaman luar angkasa secara langsung. Dengan kombinasi materi teks yang informatif dan video interaktif, Spacepedia memberikan pendekatan pembelajaran yang
          holistik. Siswa dapat menjelajahi rahasia planet, meteor, satelit, dan benda langit lainnya melalui platform kami yang menarik. Kami percaya bahwa pembelajaran haruslah pengalaman yang menyenangkan. Oleh karena itu, kami
          menyertakan berbagai permainan edukatif yang tidak hanya menghibur, tetapi juga mendidik. <i>Games</i> yang kami tawarkan dirancang untuk memperdalam pemahaman siswa tentang alam semesta dengan cara yang menyenangkan. Spacepedia
          bertujuan untuk membantu siswa mengembangkan minat mereka terhadap sains dan merangsang rasa ingin tahu mereka tentang luar angkasa. Dengan teknologi yang kami hadirkan, diharapkan pengalaman belajar ini dapat membawa pembelajaran
          ke tingkat yang lebih tinggi, menciptakan fondasi yang kokoh untuk pengetahuan sains mereka. Selamat mengeksplorasi luar angkasa bersama Spacepedia!
        </p>
      </div>
    </div>
  );
};

export default Tentang;
