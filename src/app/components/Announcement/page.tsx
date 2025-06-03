import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const RunningText = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="bounce">
        <p className="bounce p">REUPLOAD GAK KASIH CR SEMOGA REJEKINYA SERET</p>
      </div>
    </div>
  );
};

export default RunningText;
