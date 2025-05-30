import Analyse from "@/components/analyse/Analyse";
import ContainerCard from "@/components/cards/ContainerCard";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import DesktopNavbar from "@/components/navbar/desktop-view";
import Price from "@/components/price/Price";
import Testimonials from "@/components/testimonials/Testimonials";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
   <DesktopNavbar/>
   <HeroSection/>
   <Analyse/>
   <ContainerCard/>
   <Testimonials/>
   <Price/>
   <Footer/>
   </div>
  );
}
