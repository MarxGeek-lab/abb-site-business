import { FaBuilding, FaMapMarked, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import "../assets/styles/Contact.scss";
import RootLayout from "@/app/layout";

export default function Contact () {
    return(
        <RootLayout>
            <div className="ContactPage pb-8 pt-8">
                <div className="ContactPage-cordonnee Cordonnee flex">
                    <FaBuilding className="Cordonnee-avatar mb-3" />
                    <div className="Cordonnee-infos">
                        <h2 className="Cordonnee-nameCompany">Abb<i>.com</i></h2>
                        <h2 className="Cordonnee-h1">abraham blessings</h2>
                        <p className="Cordonnee-p"><FaPhoneAlt />+229 69495554</p>
                        <p className="Cordonnee-p"><FaMapMarked />C/SB M/S GODOMEY C/SB M/S GODOMEY, ATLANTIQUE, CALAVI, 01BP2314</p>
                        <li className="Cordonnee-btnWhatsapp">
                            <a href="https://wa.me/22969495554" target="blank" className="flex flex-alignCenter"> <FaWhatsapp />Contactez-nous sur whatsapp</a>
                        </li>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};