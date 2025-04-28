import Image from 'next/image';

interface Deal  {
  image: string;
  title: string;
  description?: string;
  buttonText: string;
};

const deals: Deal[] = [
  {
    image: 'https://picsum.photos/600/200',
    title: 'Freedom Fridays.',
    description: 'Get up to a $250 gift card on select activations with Freedom Mobile.*',
    buttonText: 'Explore deal',
  },
  {
    image: 'https://picsum.photos/600/200',
    title: 'Only at Best Buy Express: Buy a PlayStation Recertified PS5 disc consol﻿e for $429.99, plus get $250 off select new smartphone activations.',
    description: '',
    buttonText: 'Learn more',
  },
];

const Deals = () => {
  return (
    <section className="container mx-auto">
     <div className='flex flex-col md:flex-row gap-5 py-20'>
     {deals.map((deal, index) => (
        <div key={index} className="mb-8 md:w-1/2">
          <Image
            src={deal.image}
            alt={deal.title}
            width={800}
            height={200}
          />
          <div className="hover:underline cursor-pointer text-white pt-4 pb-2">
          <h3 className="text-lg font-[600]">{deal.title}</h3>
          <p>{deal.description}</p>
          <p className="mt-2 font-[600]">{deal.buttonText}</p>
          </div>
        </div>
      ))}
     </div>
    </section>
  );
};

export default Deals;
