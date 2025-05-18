import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer className={poppins.className}>
      <div className="bg-black w-full z-50 min-h-lg">
        <div className="flex gap-1">
          <h3 className="font-bold text-lg">Kazeo</h3>
          <h3 className="font-bold text-lg text-blue-600">Official</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
