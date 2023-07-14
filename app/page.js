import Features from "./components/homePage/features";
import HeroSection from "./components/homePage/heroSection";
import Section2 from "./components/homePage/section2";

export default function Home() {
  console.log('home')
  return (
      <main className="flex  flex-col items-center justify-between">
        <div className="w-full">
          <HeroSection />
          <Section2 />
          <Features />
        </div>
      </main>
  );
}
