import Features from "./components/homePage/features";
import Footer from "./components/homePage/footer";
import HeroSection from "./components/homePage/heroSection";
import Navbar from "./components/homePage/navbar";
import Pricing from "./components/homePage/pricing";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <main className="flex  flex-col items-center justify-between">
        <div className="w-full">
          <Navbar />
          <HeroSection />
          <Features />
          <Pricing/>
          <Footer />
        </div>
      </main>
    </RootLayout>
  );
}
