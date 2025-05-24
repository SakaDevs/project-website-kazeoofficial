import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const RunningText = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="bounce">
        <p className="bounce p">(5/24/2025 10:50) NEW UPDATE FULL LEGEND!</p>
      </div>
    </div>
  );
};

export default RunningText;
