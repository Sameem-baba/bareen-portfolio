/* eslint-disable @next/next/no-img-element */
import DesignServices from "@/components/DesignServices";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <div className="relative">
      <img src="/backgroundGrid.png" alt="" className="absolute top-0 -z-30 w-full object-cover" />
      <Header />
      <Hero />
      <SelectedWorks />
      <DesignServices />
      <Footer />
      <img src="/footerGrid.svg" alt="" className="absolute -bottom-20 -z-30 w-full object-cover" />
    </div>
  );
}
