// App.jsx
import React from "react";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Tentang from "./components/tentang";
import Fitur from "./components/fitur";
import Permainan from "./components/permainan";
import Quote from "./components/quote";
import Footer from "./components/footer";

const Landingpage = () => {
  return (
    <div className="bg-cover bg-center h-screen bg-space-background bg-repeat">
      <Navbar />
      <Welcome />
      <Tentang />
      <Fitur />
      <Permainan />
      <Quote />
      <Footer />
    </div>
  );
};

export default Landingpage;
