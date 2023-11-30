// App.jsx
import React from "react";
import Navbar from "./components/navbar";
import Headingpage from "./components/atom/heading";
import Dataki from "./components/atom/dataki";
import Footer from "./components/footer";
const Materi = () => {
  return (
    <div className="bg-cover bg-black min-h-screen">
      <Navbar />
      <Headingpage />
      <Dataki />
      <Footer />
    </div>
  );
};

export default Materi;
