import DesignServices from "@/components/DesignServices";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <SelectedWorks />
      <DesignServices />
      <Footer />
    </div>
  );
}
