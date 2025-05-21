import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const RunningText = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="bounce">
        <p>(21/5/2025 20:36) UPDATE TERBARU SKIN 11.11</p>
      </div>
    </div>
  );
};

export default RunningText;
