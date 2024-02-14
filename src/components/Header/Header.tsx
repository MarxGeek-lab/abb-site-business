"use client";
import React from "react";
import { Button } from "primereact/button";

import "./Header.scss";
import { CONTACT, HOME, PRODUCT_PAGE, REALESTATE_PAGE } from "../../settings/constant";
import { FiMenu } from "react-icons/fi";
import Head from "next/head";

export const Header: React.FC = () => {
  return (
    <header className="HeaderSite">
      <li className="HeaderSite-logoLink">
        <a href={HOME}>
          <b>ABB</b>
          <span>.com</span>
        </a>
      </li>
      <div className="HeaderSite-menu hide">
        <nav className="HeaderSite-nav">
          <ul className="HeaderSite-linkList">
            <a href={HOME} className="HeaderSite-link">
              Accueil
            </a>
            <a href={PRODUCT_PAGE} className="HeaderSite-link">
              Prêt à porter
            </a>
            <a href={REALESTATE_PAGE} className="HeaderSite-link">
              Produit agricole
            </a>
            <a href="nk" className="HeaderSite-link">
              Contact{" "}
            </a>
          </ul>
        </nav>
        <div className="HeaderSite-divRight">
          <Button label="S'abonner" />
        </div>
      </div>
      <div className="HeaderSite-contactNumber">00229 00 00 00 00 / 00 00 00 00</div>
      <FiMenu className="HeaderSite-iconMenu" onClick={() => {}} />
      {/* <div>
        <Button
          icon="pi pi-times"
          onClick={() => {}}
          rounded
          text
          raised
          severity="danger"
          aria-label="Cancel"
        />
        <div className="HeaderSite-menu">
          <nav>
            <ul>
              <a href={HOME}>Accueil</a>
              <a href={PRODUCT_PAGE}>Nos Produits</a>
              <a href={REALESTATE_PAGE}>Immobilier</a>
              <a href={CONTACT}>Contact</a>
            </ul>
          </nav>
          <div className="HeaderSite-divRight">
            {" "}
            <Button label="S'Abonner" onClick={() => {}} />
          </div>
        </div>
      </div> */}
    </header>
  );
};
