import Header from "./components/layout/header";
import HeroSection from "./components/layout/hero";
import Features from "./components/sections/features";
import Prices from "./components/sections/prices";
import Testimonials from "./components/sections/testimonials";
import Footer from "./components/layout/footer";

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <hr className="bg-accent-1 border-t border-accent-2" />
      <Features />
      <hr className="bg-accent-1 border-t border-accent-2" />
      <Prices />
      <Testimonials />
      <Footer />
    </>
  );
}
