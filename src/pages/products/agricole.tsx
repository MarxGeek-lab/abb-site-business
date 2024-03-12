import Image from "next/image";
import RootLayout from "@/app/layout";

import prod2 from "../../assets/images/maiis.jpg";
import Link from "next/link";


export default function Home() {
  return (
    <RootLayout>
      <div className="Page pb-8">
        <div className="Head pt-8 pb-6">
          <h1 className="Head-pageTitle mb-3 text-center">Nos produits agricole</h1>
          <p className="Head-subtitle text-center">La qualité, nous offrons!</p>
        </div>
        <div className="BlockProduct">
          <div className="BlockProduct-blockProduct MainGrid4">
            {Array.from({length: 6 }).map((_, i) => (
              <Link href="" className="block Span1 Mb">
                <div className="Tile1">
                  <Image className="Tile1-img" src={prod2} alt="" />
                  <h4 className="Tile1-h1 text-center">Maïs</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
