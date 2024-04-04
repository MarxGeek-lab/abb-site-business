import RootLayout from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";

import "../assets/styles/Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/images/agric.jpg";
import slide2 from "../assets/images/agric2.jpg";
import slide4 from "../assets/images/slide4.jpg";
import haricatr from "@/assets/images/haricotRouge.webp";
import haricotb from "@/assets/images/haricot2.webp";
import mais from "@/assets/images/mais2.webp";
import manioc from "@/assets/images/manioc2.webp";
import anana from "@/assets/images/ananas.webp";
import courge from "@/assets/images/courge.webp";
import potirond from "@/assets/images/potirond.webp";
import noix from "@/assets/images/noix.webp";
import info_icon from "@/assets/images/information-6258.svg";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const agricole = [
    {img: haricatr, libelle: "Haricot rouge"},
    {img: haricotb, libelle: "Haricot blanc"},
    {img: mais, libelle: "Maïs"},
    {img: manioc, libelle: "Manioc"},
    {img: anana, libelle: "Ananas"},
    {img: courge, libelle: "Courge"},
    {img: potirond, libelle: "Potirond"},
    {img: noix, libelle: "Noix de palme"},
  ]

  const footerContent = (
    <div>
        <Button label="Ok" severity="warning" onClick={() => {
          setVisible(false);
          localStorage.setItem("dialog_info", "1");
        }} autoFocus />
    </div>
  );

  const header = (
   <div>
     <Image className="HomePage-imgSlide" src={info_icon} alt="" width={70} />
      <h5>Informations</h5>
   </div>
  )

  useEffect(() => {
    let dialog = localStorage.getItem("dialog_info");

    if (dialog) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);
  
  return (
    <RootLayout>
      
      <Dialog 
        className="DialogInfos"
        header={header} 
        visible={visible} 
        position={"top"}
        onHide={() => setVisible(false)} 
        footer={footerContent} draggable={false} resizable={false}>
          <p className="m-0 text-sm Text">
          Cher visiteur, pour des raisons de sécurité, nous vous encourageons à utiliser notre service 
          client via WhatsApp pour toute commande ou achat de produits. 
          Cliquez sur l'icône de WhatsApp pour discuter directement avec notre équipe. 
          Nous pourrons ainsi discuter des détails du produit ainsi que des modalités 
          de livraison après votre achat. <br /> Nous restons à votre disposition pour toute assistance supplémentaire.
          </p>
      </Dialog>
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
          <h2 className="HomePage-titleSection text-center">Nos Produits</h2>
          <div className="SectionTwo-blockProduct MainGrid4">
            {agricole.map((list, index) => (
              <Link href="" className="block Span1 Mb" key={index.toString()}>
              <div className="Tile1">
                <Image className="Tile1-img" src={list.img} alt="" />
                <h4 className="Tile1-h1 text-center">{list.libelle}</h4>
              </div>
            </Link>
            ))}
          </div>

          {/* <div className="SeeMoreDiv">
            <a href="/products/agricole" className="SeeMore">Voir plus <FiChevronRight /></a>
          </div> */}
        </section>
        {/* <section className="HomePage-sectionThree SectionThree">
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
        </section> */}
      </div>
    </RootLayout>
  );
}
