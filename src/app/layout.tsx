import next from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

import "primeflex/primeflex.scss";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import "../globals/globals.scss";
import "../globals/helpers.scss";
import "../assets/styles/Layout.scss";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <main className="Layout">
        <Head>
          <title>Abraham blessing' Store</title>
        </Head>
        <Header />
        <div className="Layout-body Container">{children}</div>
        <Footer />
      </main>
    </PrimeReactProvider>
  );
}
