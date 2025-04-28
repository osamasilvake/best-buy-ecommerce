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
  ];

  
const Collections = () => {
    return (
        <div className="container mx-auto pt-18 pb-5">
               <h2 className="text-center text-2xl font-[900]">Shop all on sale collections</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-5">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image src={item.image} alt={item.text} width={120} height={120}
             className="w-28 h-28 object-cover rounded-md mb-2" />
            <p className="text-sm pt-2 text-[#0045bd]">{item.text}</p>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default Collections;