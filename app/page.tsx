import Header from "./header";
import HeroSection from "./hero";
import Features from "./features";
import Prices from "./prices";
import Testimonials from "./testimonials";
import Footer from "./footer";

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
