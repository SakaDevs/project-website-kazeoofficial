import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const RunningText = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="bounce">
        <p className="bounce p">SELAMAT DATANG!</p>
      </div>
    </div>
  );
};

export default RunningText;
