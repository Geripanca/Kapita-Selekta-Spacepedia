import React from "react";

const Quote = () => {
  return (
    <div className="bg-black py-20">
      <blockquote className="text-2xl  italic  text-gray-400 w-2/3 mx-auto text-justify">
        "Menariknya mempelajari luar angkasa adalah bahwa semakin kita mengetahui tentang kosmos, semakin kita menyadari betapa kecilnya kita dalam skala universal. Itu tidak hanya memberikan wawasan tentang bintang dan planet, tetapi juga
        mengajarkan kita tentang kerendahan hati dan keingintahuan tak terbatas."
      </blockquote>
      <p className="text-md text-white italic text-right w-3/4 font-bold text-xl py-3"> ━ Carl Sagan</p>
      <img src="../public/bumi-ilustrasi.jpg" alt="bumi-ilustrasi" className="w-full" />
    </div>
  );
};

export default Quote;
