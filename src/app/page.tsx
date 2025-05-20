import { Poppins } from "next/font/google";
import Cardscript from "./components/Card";
import Randomscript from "./components/Random";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={`${poppins.className} p-6 flex flex-col gap-4 `}>
      <Cardscript />
      <Randomscript />
    </div>
  );
}
