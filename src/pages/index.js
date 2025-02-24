
import { Geist, Geist_Mono } from "next/font/google";
import LayoutHome from "../layouts/LayoutHome"
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
    <LayoutHome>
     
      <div className="hidden md:inline">
      <CarouselSection />
      </div>
      <div className="md:hidden">
        <CarruselSelectionMobile />
      </div>
      <BatterySection />
     
    </LayoutHome>
  );
}
