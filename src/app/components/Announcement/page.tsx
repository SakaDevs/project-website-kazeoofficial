import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const RunningText = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="bounce">
        <p className="bounce p">NEW UPDATE KADITA STARLIGHT, JAWHEAD ALLSTAR, EUDORA LUCKYBOX REVAMP</p>
      </div>
    </div>
  );
};

export default RunningText;
