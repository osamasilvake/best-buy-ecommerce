import Image from "next/image";

export interface Item {
  image: string;
  text: string;
}

export const items: Item[] = [
  {
    image: "https://picsum.photos/100?random=1",
    text: "TVs, Home Audio, and Accessories",
  },
  {
    image: "https://picsum.photos/100?random=2",
    text: "Computers, Laptops, and Tablets",
  },
  {
    image: "https://picsum.photos/100?random=3",
    text: "Computer Accessories",
  },
  {
    image: "https://picsum.photos/100?random=4",
    text: "Headphones and Portable Speakers",
  },
  {
    image: "https://picsum.photos/100?random=5",
    text: "Pc Gaming",
  },
  {
    image: "https://picsum.photos/100?random=6",
    text: "Cell Phones and Plans",
  },
  {
    image: "https://picsum.photos/100?random=7",
    text: "Item 7",
  },
  {
    image: "https://picsum.photos/100?random=8",
    text: "Item 8",
  },
  {
    image: "https://picsum.photos/100?random=9",
    text: "Item 9",
  },
  {
    image: "https://picsum.photos/100?random=10",
    text: "Item 10",
  },
  {
    image: "https://picsum.photos/100?random=11",
    text: "Item 11",
  },
  {
    image: "https://picsum.photos/100?random=12",
    text: "Item 12",
  },
  {
    image: "https://picsum.photos/100?random=1",
    text: "TVs, Home Audio, and Accessories",
  },
  {
    image: "https://picsum.photos/100?random=2",
    text: "Computers, Laptops, and Tablets",
  },
  {
    image: "https://picsum.photos/100?random=3",
    text: "Computer Accessories",
  },
  {
    image: "https://picsum.photos/100?random=4",
    text: "Headphones and Portable Speakers",
  },
  {
    image: "https://picsum.photos/100?random=5",
    text: "Pc Gaming",
  },
  {
    image: "https://picsum.photos/100?random=6",
    text: "Cell Phones and Plans",
  },
];

const SaleProducts = () => {
  return (
    <div className="container mx-auto pt-4">
      <h2 className="text-center text-2xl font-[900]">
        Grand Opening Sale deals on select products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 pt-5">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={item.image}
              alt={item.text}
              width={120}
              height={120}
              className="w-28 h-28 object-cover rounded-md"
            />
            <p className="text-sm pt-3 text-[#0045bd]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
