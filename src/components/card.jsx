import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, buttonLabel, link }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="max-w-sm rounded border border-white overflow-hidden shadow-lg h-auto">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        {" "}
        {/* Tetapkan ketinggian tetap pada elemen deskripsi */}
        <div className="font-bold text-white text-xl text-center mb-2">{title}</div>
        <p className="text-gray-700 text-base overflow-hidden text-center">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={link}>
          <button className="block bg-sky-500 hover:bg-sky-700 hover:shadow-md text-white font-bold py-2 px-4 mx-auto rounded">{buttonLabel}</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
