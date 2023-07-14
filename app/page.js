import Features from "./components/homePage/features";
import HeroSection from "./components/homePage/heroSection";
import Navbar from "./components/homePage/navbar";
import Section2 from "./components/homePage/section2";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <div className="w-full">
        <Navbar />
        <HeroSection />
        <Section2 />
        <Features/> 
      </div>
    </main>
  );
}
