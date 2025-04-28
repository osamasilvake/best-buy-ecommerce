import Image from "next/image";

const FeaturesLocation = () => {
  return (
    <div
      className="container mx-auto bg-gradient-to-r from-regal-blue  via-purple-800
      to-red-500"
    >
      <div className="flex flex-col md:flex-row gap-16 md:items-center px-20 pt-8 pb-10">
        <div className="md:w-[75%]">
          <h2 className="text-3xl font-[900] py-1 text-white">
            Grand Opening
            <span className="text-[#FDF200] font-[700]"> Sale</span>
          </h2>
          <p className="text-2xl font-[900] text-white pb-6">
            With 167 new Best Buy Express locations, it's easier than ever to
            get your hands on the latest tech.
          </p>
          <button className="py-3 px-6 bg-white text-[#0046C3]">
            Find a Store Near You
          </button>
        </div>
        <div className="md:w-[25%]">
          <Image
            alt="box"
            src="https://picsum.photos/100?random=6"
            width={180}
            height={160}
            className="min-w-40 w-full md:w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesLocation;
