import React, { useState } from "react";

const Headingpage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-white sm:text-4xl">Materi</h1>

            <p class="mt-1.5 text-sm text-gray-500">Ayo Baca Materi-materi yang sangat luar biasa ini </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headingpage;
