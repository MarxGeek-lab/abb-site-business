import Image from "next/image";
import styles from "./page.module.css";
import RootLayout from "@/app/layout";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import prod from "../../assets/images/t2.jpeg";
import prod2 from "../../assets/images/img1.jpeg";

export default function Home() {
  return (
    <RootLayout>
      <div className="Page pb-8">
        <div className="Head pt-8 pb-6">
          <h1 className="Head-pageTitle mb-3 text-center">Nos articles</h1>
          <p className="Head-subtitle text-center">Faite votre choix!</p>
        </div>
        <div className="BlockProduct">
          <div className="BlockProduct-blockProduct MainGrid4">
            {Array.from({length: 6 }).map((_, i) => (
              <div className="Tile2 block Span1 Mb">
                <Image className="Tile2-img" src={prod2} alt="" />
                <div className="Tile2-footer mt-3">
                  <h4 className="Tile2-h1 mb-1">Product</h4>
                  <b className="Tile2-price">
                    1200 <br />
                    <i>Fcfa</i>
                  </b>
                  <Link
                    href={`https://web.whatsapp.com/send?phone=${22969816413}&text=`}
                    className="Tile2-btn w-full mt-5 flex gap-2"
                  >
                    <FaWhatsapp />
                    Commander
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
