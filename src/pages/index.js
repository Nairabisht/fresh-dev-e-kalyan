import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Boxsection from "./components/Boxsection";
import Footer from "./components/footer";
import { Divider } from "@mui/material";
import Dbanner from "./components/Dbanner";
import Features from "./components/Features";
import Knowmore from "./components/Knowmore";
import Usefullinks from "./components/Usefullinks";
import FAQ from "./components/FAQ";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
        <Banner/>
        <Navbar/>
        <Hero/>
        <Marquee/>
        <Boxsection/>
         <Features/>
         <Knowmore/>\
         <FAQ/>
         <Usefullinks/>
        <Divider/>
        <Footer/>
        <Dbanner/>
    </main>
  );
}

		

