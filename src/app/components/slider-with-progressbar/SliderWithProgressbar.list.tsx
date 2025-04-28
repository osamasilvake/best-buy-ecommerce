import { SliderItemData } from "../slider/types";

const productData = [
  {
    title: "MacBook Air M2",
    description: "Apple M2 Chip, 8GB RAM, 256GB SSD",
    price: "$999",
    save: "Save $140",
  },
  {
    title: "Dell XPS 13",
    description: "13.3” FHD+, Intel i7, 16GB RAM",
    price: "$1,199",
    save: "Save $120",
  },
  {
    title: "iPhone 15",
    description: "128GB, Dynamic Island, Dual Camera",
    price: "$799",
    save: "Save $50",
  },
  {
    title: "Sony WH-1000XM5",
    description: "Noise Cancelling Headphones",
    price: "$379",
    save: "Save $60",
  },
  {
    title: "Samsung Galaxy S24",
    description: "6.2” AMOLED, 128GB",
    price: "$899",
    save: "Save $80",
  },
  {
    title: "Lenovo Legion 5",
    description: "Ryzen 7, RTX 4060, 16GB RAM",
    price: "$1,299",
    save: "Save $200",
  },
  {
    title: "Apple Watch Series 9",
    description: "41mm, GPS",
    price: "$399",
    save: "Save $30",
  },
  {
    title: "GoPro HERO12",
    description: "5.3K60 Ultra HD Video",
    price: "$449",
    save: "Save $40",
  },
  {
    title: "ASUS ROG Strix",
    description: "Intel i9, RTX 4080",
    price: "$2,499",
    save: "Save $300",
  },
  {
    title: "Canon EOS R50",
    description: "24.2MP Mirrorless Camera",
    price: "$679",
    save: "Save $70",
  },
  {
    title: "Amazon Echo Dot 5",
    description: "Smart Speaker with Alexa",
    price: "$49",
    save: "Save $10",
  },
  {
    title: "Samsung Galaxy Tab S9",
    description: "11'' AMOLED, 256GB",
    price: "$799",
    save: "Save $80",
  },
  {
    title: "Kindle Paperwhite",
    description: "6.8'' Display, 8GB",
    price: "$139",
    save: "Save $20",
  },
  {
    title: "Anker PowerCore 20K",
    description: "Portable Charger",
    price: "$49",
    save: "Save $15",
  },
  {
    title: "Bose QuietComfort Earbuds II",
    description: "Noise Cancelling",
    price: "$299",
    save: "Save $50",
  },
];

export const sliderList: SliderItemData[] = productData.map((product, i) => ({
  id: i,
  image: `https://picsum.photos/200/200?random=${i + 1}`,
  title: product.title,
  description: product.description,
  save: product.save,
  price: product.price,
}));
