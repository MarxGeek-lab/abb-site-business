import RootLayout from "@/app/layout";

import "../assets/styles/Home.scss";
import Link from "next/link";

import img from "../assets/images/t5.jpeg";
import Image from "next/image";

import prod from "../assets/images/mil.jpg";
import prod2 from "../assets/images/img1.jpeg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/images/agric.jpg";
import slide2 from "../assets/images/agric2.jpg";
import slide4 from "../assets/images/slide4.jpg";
import BtnWhatsapp from "@/components/BtnWhatsapp/BtnWhatsapp";
import { FiChevronRight } from "react-icons/fi";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <RootLayout>
      <div className="HomePage">
        <section className="HomePage-sectionOne SectionOne mb-5">
          <div className="HomePage-body">
          <h1 className="HomePage-title">
              Bienvenu sur <strong>Abb.com</strong>
          </h1>
            <p className="HomePage-subtitle mb-6">Profitez des merveille de notre univers</p>
          </div>
        <Slider className="HomePage-carousel" {...settings}>
          <Image className="HomePage-imgSlide" src={slide1} alt="" />
          <Image className="HomePage-imgSlide" src={slide2} alt="" />
          <Image className="HomePage-imgSlide" src={slide4} alt="" />
        </Slider>
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

          <div className="SeeMoreDiv">
            <a href="/products/agricole" className="SeeMore">Voir plus <FiChevronRight /></a>
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
                  <b className="Tile2-price">
                    1200 <br />
                    <i>Fcfa</i>
                  </b>
                  <BtnWhatsapp />
                </div>
              </div>
            ))}
          </div>
          <div className="SeeMoreDiv">
            <a href="/products/pret-a-porter" className="SeeMore">Voir plus <FiChevronRight /></a>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
