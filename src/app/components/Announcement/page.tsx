import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const RunningText = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="flex justify-center font-bold items center text-center py-2">
        <p className="md:text-base text-sm">
          SUBSCRIBE KE CH ADMIN YANG BARU ={">"}{" "}
          <Link
            className="underline"
            href="https://www.youtube.com/channel/UCInWujvjdt8MDmtOxy_As1Q"
          >
            Kazeo Official
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RunningText;
