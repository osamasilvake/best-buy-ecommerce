import Image from "next/image";
import Banner from "./components/banner/Banner";
import GrandOpeningPromo from "./components/grandopening-promo/GrandOpeningPromo";
import Slider from "./components/slider/page";
import { sliderList as sliderData } from "./components/slider/Slider.list";
import Deals from "./components/deals-section/Deals";
import { Footer } from "./components/frame/footer/Footer";
import FeaturesSection from "./components/features-section/FeaturesSection";
import SaleProducts from "./components/sale-products/SaleProducts";
import Collections from "./components/collections/Collections";
import FeaturesLocation from "./components/features-location/FeaturesLocation";
import SliderWithProgressbar from "./components/slider-with-progressbar/page";
import { sliderList } from "./components/slider-with-progressbar/SliderWithProgressbar.list";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="h-fit bg-gradient-to-r from-regal-blue  via-purple-800  to-regal-red">
        <GrandOpeningPromo />

        <Slider items={sliderData} />

        <div className="bg-[#0247C1]">
          <Deals />
        </div>
      </div>
      <SaleProducts />
      <Collections />
      <FeaturesLocation />
      <Deals />
      <SliderWithProgressbar
        title="Top selling and popular products"
        items={sliderList}
      />
      <SliderWithProgressbar
        title="Products we think you'll love"
        items={sliderList}
      />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
