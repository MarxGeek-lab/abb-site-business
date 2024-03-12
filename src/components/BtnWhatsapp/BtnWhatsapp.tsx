"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface BtnWhatsappProps {
    imgUrl?: string;
}
const BtnWhatsapp:React.FC<BtnWhatsappProps> = ({ imgUrl }) => {
    return (
        <Link
            href={`https://web.whatsapp.com/send?phone=${22969495554}&text=${encodeURIComponent("https://www.freepik.com/free-photo/man-shoes-with-glasses-paper-mustache-table_4048379.htm#fromView=search&page=1&position=18&uuid=8af4bb8e-f188-444c-ab73-6a5afc1af826")}`}
            target="blank"
            className="Tile2-btn w-full mt-5 flex gap-2"
            >
            <FaWhatsapp />
            Commander
        </Link>
    )
};

export default BtnWhatsapp;