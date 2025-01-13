import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BatterySection from "@/components/BatterySection";
import CarouselSection from "@/components/CarruselSelection";
import CarruselSelectionMobile from "@/components/CarruselSelectionMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hidden md:inline">
      <CarouselSection />
      </div>
      <div className="md:hidden">
        <CarruselSelectionMobile />
      </div>
      <BatterySection />
      <Footer />
    </div>
  );
}
