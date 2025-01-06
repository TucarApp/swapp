import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Mick from "@/components/Mick";
import CarouselSection from "@/components/CarruselSelection";

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
      <CarouselSection />
      <Mick />

      <Footer />
    </div>
  );
}
