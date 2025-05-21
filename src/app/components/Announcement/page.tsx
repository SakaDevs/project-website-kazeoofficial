import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const RunningText = () => {
  return (
    <div className={poppins.className}>
      <div className="marqueeContainer">
        <div className="marqueeText">SELAMAT DATANG</div>
      </div>
    </div>
  );
};

export default RunningText;
