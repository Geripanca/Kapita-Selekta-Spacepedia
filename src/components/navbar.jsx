// components/Navbar.jsx
import React, { useState } from "react";
import "./Welcome.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4 lg:px-7 border-b border-slate-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold tracking-widest text-xl">SPACEPEDIA</div>

          {/* Menu untuk tampilan mobile */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
              ☰
            </button>
          </div>

          {/* Menu untuk tampilan desktop */}
          <div className="hidden lg:flex lg:items-center space-x-10">
            <a href="/beranda" className="nav-link text-white hover:text-sky-600 transition duration-300 ease-in-out">
              BERANDA
            </a>
            <a href="#tentang" className="nav-link text-white hover:text-sky-600 transition duration-300 ease-in-out">
              TENTANG
            </a>
            <a href="#fitur" className="nav-link text-white hover:text-sky-600 transition duration-300 ease-in-out">
              FITUR
            </a>
            <a href="#permainan" className="nav-link text-white hover:text-sky-600 transition duration-300 ease-in-out">
              KUIS
            </a>
          </div>
        </div>

        {/* Tampilan menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <a href="/beranda" className="block text-white hover:text-sky-600 mt-2 text-center">
              BERANDA
            </a>
            <a href="#tentang" className="block text-white hover:text-sky-600 mt-2 text-center">
              TENTANG
            </a>
            <a href="#fitur" className="block text-white hover:text-sky-600 mt-2 text-center">
              FITUR
            </a>
            <a href="#permainan" className="block text-white hover:text-sky-600 mt-2 text-center">
              KUIS
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
