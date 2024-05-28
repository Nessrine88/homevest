import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Card = ({ data }) => {
  return (
    <Link href="#">
      <div className="max-w-xs rounded-xl overflow-hidden inline-block mx-2">
        <div className="relative">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="max-w-[350px] w-full h-[300px] object-cover"
          />
          <span className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {data.label}
          </span>
          <div className="p-4 absolute bottom-0 text-white z-50">
            <h2 className="text-lg font-bold text-white">{data.title}</h2>
            <div className="flex gap-1">
              <p className="bg-black bg-opacity-60 rounded-md text-white p-1 text-xs">
                {data.price}
              </p>
              <p className="bg-black bg-opacity-60 rounded-md text-white p-1 text-xs">
                {data.assets}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const PropertiesSlide = () => {
  const dummyData = [
    {
      id: 1,
      title: "Cityshares Funds",
      price: "$10.00 / Share",
      assets: "2 Assets",
      imageUrl: "/images/Rectangle 153.png",
      label: "New",
    },
    {
      id: 2,
      title: "Global Equity",
      price: "$15.00 / Share",
      assets: "5 Assets",
      imageUrl: "/images/Rectangle 154.png",
      label: "Hot",
    },
    {
      id: 3,
      title: "Tech Growth",
      price: "$25.00 / Share",
      assets: "8 Assets",
      imageUrl: "/images/Rectangle 155.png",
      label: "New",
    },
    {
      id: 4,
      title: "Real Estate Fund",
      price: "$50.00 / Share",
      assets: "3 Assets",
      imageUrl: "/images/Rectangle 156.png",
      label: "Popular",
    },
    {
      id: 5,
      title: "Healthcare Fund",
      price: "$20.00 / Share",
      assets: "6 Assets",
      imageUrl: "/images/Rectangle 157.png",
      label: "New",
    },
    {
      id: 6,
      title: "Renewable Energy",
      price: "$30.00 / Share",
      assets: "4 Assets",
      imageUrl: "/images/Rectangle 158.png",
      label: "Trending",
    },
    // {
    //   id: 7,
    //   title: "Cryptocurrency",
    //   price: "$40.00 / Share",
    //   assets: "7 Assets",
    //   imageUrl: "/images/Rectangle 155.jpg",
    //   label: "New",
    // },
    // {
    //   id: 8,
    //   title: "Emerging Markets",
    //   price: "$35.00 / Share",
    //   assets: "10 Assets",
    //   imageUrl: "/images/Rectangle 156.jpg",
    //   label: "Hot",
    // },
  ];

  return (
    <div className="mx-2 md:mx-5 lg:mx-8 2xl:mx-24 mt-8 lg:mt-2 ">
      <Marquee
        direction="right"
        pauseOnHover
      >
        {dummyData.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default PropertiesSlide;
