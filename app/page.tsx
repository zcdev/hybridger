import Header from "./components/layout/header";
import HeroSection from "./components/layout/hero";
import Features from "./components/sections/features";
import Prices from "./components/sections/prices";
import Testimonials from "./components/sections/testimonials";
import Footer from "./components/layout/footer";
import Chatbot from "./components/chatbot/chatbot";

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <hr className="border-t-1 border-gray-300" />
      <Features />
      <hr className="border-t-1 border-gray-300" />
      <Prices />
      <Testimonials />
      <Footer />
      <Chatbot />
    </>
  );
}
