"use client"
import Features from "./components/homePage/features";
import HeroSection from "./components/homePage/heroSection";
import Pricing from "./components/homePage/pricing";
import Footer from "./footer";
import Header from "./header";
import RootLayout from "./layout";


export default function Home() {
  return (
    <RootLayout>
      <main className="flex  flex-col items-center justify-between">
        <div className="w-full">
          <Header />
          <HeroSection />
          <Features />
          <Pricing />
          <Footer />
        </div>
      </main>
    </RootLayout>
  );
}
