import Link from "next/link";
import scripts from "@/app/components/Scripts/scripts.json";
import { Poppins } from "next/font/google";
import PageWrapper from "../components/PageAnimation/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function CategoryPage() {
  const categories = Array.from(new Set(scripts.map((s) => s.category)));

  return (
    <PageWrapper>
      <main className={`${poppins.className} p-6`}>
        <div className="md:text-lg text-sm font-bold mb-4 outline p-4">
          <h1 className="mb-4">Category</h1>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/category/${cat}`}
                  className="block p-2 border rounded  hover:text-white hover:bg-blue-400 transition-all capitalize"
                >
                  {cat.replace(/script-skin-/, "").replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </PageWrapper>
  );
}
