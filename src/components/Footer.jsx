import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-zinc-700 text-white py-5 mt-4">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between px-4">
        <a className="text-3xl font-bold italic mb-4 md:mb-0" href="#home">
          Portofolio
        </a>
        <p className="text-sm text-center md:text-left">
          © 2025 Aldi Musneldi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
