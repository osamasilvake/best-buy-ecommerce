import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { MenuItem } from "./IconMenu.interface";
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from "react-icons/md";


export const items: MenuItem[] = [
    { label: "Stores", icon: <HiOutlineBuildingStorefront className="text-white w-8 h-8" /> },
    { label: "My Best Buy Account", icon: <MdOutlineAccountCircle className="text-white w-8 h-8" /> },
    { label: "Cart", icon: <MdOutlineShoppingCart className="text-white w-8 h-8" /> },
  ];