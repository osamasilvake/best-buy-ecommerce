import Image from "next/image";
import Banner from "./components/banner/Banner";
import GrandOpeningPromo from "./components/grandopening-promo/GrandOpeningPromo";
import Slider from "./components/slider/page";
import { sliderList } from "./components/slider/Slider.list";
import Deals from "./components/deals-section/Deals";
import { Footer } from "./components/frame/footer/Footer";
import FeaturesSection from "./components/features-section/FeaturesSection";
import SaleProducts from "./components/sale-products/SaleProducts";
import Collections from "./components/collections/Collections";
import FeaturesLocation from "./components/features-location/FeaturesLocation";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="h-fit bg-gradient-to-r from-regal-blue  via-purple-800  to-regal-red">
      <GrandOpeningPromo />

      <Slider items={sliderList}  />

      <div className="bg-[#0247C1]">
        <Deals />
      </div>
      </div>
      <SaleProducts />
      <Collections />
      <FeaturesLocation />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
