"use client";
import React from "react";

import "./Footer.scss";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Footer: React.FC = () => {
  return (
    <footer className="FooterSite">
       <FloatingWhatsApp 
          phoneNumber="22969495554" 
          accountName="Abraham Blessigns"
          chatMessage="Bienvenue! En quoi pouvons-nous vous aidez"
          statusMessage="Assistance Abb.com"
          notification={true}
        />
      <div className="FooterSite-block Container">
        <p className="FooterSite-textLeft">&copy; {(new Date()).getFullYear()} Entreprise AbrahamBlessings. Tous droit réservé.</p>
      </div>
    </footer>
  );
};
