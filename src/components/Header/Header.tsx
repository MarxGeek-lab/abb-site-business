"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

import "./Header.scss";
import { CONTACT, HOME, PRODUCT_PAGE, REALESTATE_PAGE } from "../../settings/constant";
import { FiMenu } from "react-icons/fi";
import Head from "next/head";
import Link from "next/link";
import BtnWhatsapp from "../BtnWhatsapp/BtnWhatsapp";

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Vérifie initialement la taille de l'écran
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="HeaderSite">
      <div className="Container HeaderSite-topBar">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <ul className="HeaderSite-linkList">
            <Link href="/" className="HeaderSite-link">
              Accueil
            </Link>
            <Link href="/products/pret-a-porter" className="HeaderSite-link">
              Prêt à porter
            </Link>
            <Link href="/products/agricole" className="HeaderSite-link">
              Produit agricole
            </Link>
            <Link href="/contact" className="HeaderSite-link">
              Contact{" "}
            </Link>
          </ul>
        </Sidebar>
        <li className="HeaderSite-logoLink flex align-items-center gap-3">
          <Button
            className=""
            style={{
              display: isMobile ? "block" : "none",
              padding: 0,
              background: "none",
              border: "none",
            }}
            onClick={() => setVisible(true)}
          >
            <i className="pi pi-bars" style={{ fontSize: "25px", color: "#03291F" }} />{" "}
          </Button>
          <a className="HeaderSite-a" href={HOME}>
            <b className="HeaderSite-title">ABB</b>
            <span className="HeaderSite-span">.com</span>
          </a>
        </li>
        <div className="HeaderSite-menu hide">
          <nav className="HeaderSite-nav">
            <ul className="HeaderSite-linkList">
              <Link href="/" className="HeaderSite-link">
                Accueil
              </Link>
              {/* <Link href="/products/pret-a-porter" className="HeaderSite-link">
                Prêt à porter
              </Link>
              <Link href="/products/agricole" className="HeaderSite-link">
                Produit agricole
              </Link> */}
              <Link href="/contact" className="HeaderSite-link">
                Contact{" "}
              </Link>
            </ul>
          </nav>
        </div>
        <Button className="HeaderSite-btnSubscribe" >
          <a href="https://wa.me/22969495554" target="blank" className="flex flex-alignCenter">Nous écrire</a>
        </Button>
        <div className="HeaderSite-contactNumber">+229 69 49 55 54</div>
      </div>
    </header>
  );
};
