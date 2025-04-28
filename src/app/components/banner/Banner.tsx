
import Dropdown from "./Dropdown/Dropdown";
import { menuList } from "./Banner.list";
import TopLinks from "./top-links/TopLinks";
import SearchBar from "./search-bar/SearchBar";
import IconMenu from "./icon-menu/IconMenu";
import bestbuy from "../../assets/images/banner/Best_Buy_logo_2018.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <header>
      <div className="bg-[#0046be] pt-5 pb-4">
        <div className="flex justify-between container mx-auto pb-3">
          <div />
          <TopLinks />
        </div>

        <div className="container mx-auto pt-2 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center gap-7">
            <Image className="text-white" src={bestbuy} width={82} height={48} alt="bestbuy" />
            <SearchBar />
          </div>
          <IconMenu />
        </div>
      </div>

      <div className="bg-[#003da6] py-3">
        <nav className="container mx-auto flex">
          {menuList.map((item) => (
            <Dropdown key={item.title} title={item.title} submenu={item.submenu} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Banner;
