import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const RunningText = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="bounce">
        <p className="bounce p">NEW UPDATE FULL STUN</p>
      </div>
    </div>
  );
};

export default RunningText;
