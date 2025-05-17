import scripts from "@/app/components/Scripts/scripts.json";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type PageProps = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { slug } = params;

  const filteredScripts = scripts.filter(
    (script) => script.category.toLowerCase() === slug.toLowerCase()
  );

  if (filteredScripts.length === 0) {
    return (
      <div className="p-6 text-red-500 font-semibold">
        Tidak ada script dengan kategori:{" "}
        <span className="capitalize">{slug}</span>
      </div>
    );
  }

  return (
    <div className={`${poppins.className} p-6 flex flex-col gap-2`}>
      <div className="flex flex-col gap-5 outline p-4 rounded">
        <div className="flex justify-between items-center">
          <h3 className="font-bold md:text-lg text-sm">
            Kategori : {slug[0].toUpperCase() + slug.slice(1)}
          </h3>
        </div>
        <ul className="grid md:grid-cols-5 grid-cols-2 gap-4">
          {filteredScripts.map((script) => (
            <li
              key={script.id}
              className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="shadow cursor-pointer rounded">
                <Image
                  src={script.image}
                  height={100}
                  width={300}
                  alt=""
                  className="rounded"
                />
                <Link href={`/script-all/${script.slug}`} className="flex">
                  <div className="flex flex-col py-4 px-2">
                    <span className="text-xs font-thin">{script.date}</span>
                    <span className="md:text-base text-sm">{script.title}</span>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
