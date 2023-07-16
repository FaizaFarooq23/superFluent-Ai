"use client"

import Features from "./components/homePage/features";
import Footer from "./components/homePage/footer";
import HeroSection from "./components/homePage/heroSection";
import Section2 from "./components/homePage/section2";
import Navbar from "./components/homePage/navbar";
import Pricing from "./components/homePage/pricing";

import RootLayout from "./layout";


export default function Home() {
  console.log('home')
  return (
      <main className="flex  flex-col items-center justify-between">
        <div className="w-full">
          <HeroSection />
          <Features />
          <Pricing/>
          <Footer />
        </div>
      </main>
  );
}
