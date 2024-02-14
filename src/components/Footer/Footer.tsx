"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

import "./Footer.scss";
import { Button } from "primereact/button";

export const Footer: React.FC = () => {
  return (
    <footer className="FooterSite">
      <p className="FooterSite-textLeft">&copy; Tout droit réservé.</p>
      <ul className="FooterSite-divRight">
        <li className="FooterSite-infos">
          <FaWhatsapp />
          <span>00299 00 00 00 00 / 00 00 00 00</span>
        </li>
        <li className="FooterSite-infos">
          <MdLocationCity />
          <span> Bénin / Atlantique / Abomey-Calavi</span>
        </li>
        <Button label="Nous Contacter" className="FooterSite-btnContact" />
      </ul>
    </footer>
  );
};
