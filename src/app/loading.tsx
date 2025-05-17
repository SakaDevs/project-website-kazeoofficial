import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Loading = () => {
  return (
    <div
      className={`${poppins.className} flex flex-col justify-center items-center h-screen`}
    >
      <div className="loader"></div>
      <h3 className="font-bold">tunggu bentar ye...</h3>
    </div>
  );
};

export default Loading;
