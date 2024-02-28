import RootLayout from "@/app/layout";

import "../assets/styles/Home.scss";
import Link from "next/link";

import img from "../assets/images/t5.jpeg";
import Image from "next/image";

import prod from "../assets/images/t2.jpeg";
import prod2 from "../assets/images/img1.jpeg";
import { Button } from "primereact/button";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <RootLayout>
      <div className="HomePage">
        <section className="HomePage-sectionOne SectionOne">
          <h1 className="HomePage-title">
            Bienvenu chez <strong>Abb.com</strong>
          </h1>
          <p className="HomePage-subtitle">Profitez des merveille de notre univers</p>
          <div className="HomePage-body"> </div>
          <div className="HomePage-categoryActivity">
            <Link href={""} className="HomePage-linkCategory">
              <div className="HomePage-activityCard">
                <Image src={img} alt="" />
                <h3> Agriculture </h3>
              </div>
            </Link>
            <Link href={""} className="HomePage-linkCategory">
              <div className="HomePage-activityCard">
                <Image src={img} alt="" />
                <h3> Immobilier </h3>
              </div>
            </Link>
            <Link href={""} className="HomePage-linkCategory">
              <div className="HomePage-activityCard">
                <Image src={img} alt="" />
                <h3> Prêt à porter </h3>
              </div>
            </Link>
            <Link href={""} className="HomePage-linkCategory">
              <div className="HomePage-activityCard">
                <Image src={img} alt="" />
                <h3> Informatique </h3>
              </div>
            </Link>
          </div>
        </section>
        <section className="HomePage-sectionTwo SectionTwo">
          <h2 className="HomePage-titleSection text-center">Nos Produits agricole</h2>
          <div className="SectionTwo-blockProduct MainGrid4">
            <Link href="" className="block Span1 Mb">
              <div className="Tile1">
                <Image className="Tile1-img" src={prod} alt="" />
                <h4 className="Tile1-h1 text-center"> Product</h4>
              </div>
            </Link>
            <Link href="" className="block Span1 Mb">
              <div className="Tile1">
                <Image className="Tile1-img" src={prod} alt="" />
                <h4 className="Tile1-h1 text-center"> Product</h4>
              </div>
            </Link>
            <Link href="" className="block Span1 Mb">
              <div className="Tile1">
                <Image className="Tile1-img" src={prod} alt="" />
                <h4 className="Tile1-h1 text-center"> Product</h4>
              </div>
            </Link>
            <Link href="" className="block Span1 Mb">
              <div className="Tile1">
                <Image className="Tile1-img" src={prod} alt="" />
                <h4 className="Tile1-h1 text-center"> Product</h4>
              </div>
            </Link>
            <Link href="" className="block Span1 Mb">
              <div className="Tile1">
                <Image className="Tile1-img" src={prod} alt="" />
                <h4 className="Tile1-h1 text-center"> Product</h4>
              </div>
            </Link>
            <Link href="" className="block Span1 Mb">
              <div className="Tile1">
                <Image className="Tile1-img" src={prod} alt="" />
                <h4 className="Tile1-h1 text-center"> Product</h4>
              </div>
            </Link>
            <Link href="" className="block Span1 Mb">
              <div className="Tile1">
                <Image className="Tile1-img" src={prod} alt="" />
                <h4 className="Tile1-h1 text-center"> Product</h4>
              </div>
            </Link>
          </div>
        </section>
        <section className="HomePage-sectionThree SectionThree">
          <h2 className="HomePage-titleSection text-center">Prêt à porter</h2>
          <div className="SectionThree-blockProduct MainGrid4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="Tile2 block Span1 Mb">
                <Image className="Tile2-img" src={prod2} alt="" />
                <div className="Tile2-footer mt-3">
                  <h4 className="Tile2-h1 mb-1">Product</h4>
                  <h5 className="Tile2-category">Categorie</h5>
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
        </section>
      </div>
    </RootLayout>
  );
}
