"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const NewSection = () => {
  const data = [
    {
      name: "Georgia",
      price: "$10.00/Share",
      assets: "2 Assets",
      growth: "↑ 10%",
      image: "/images/georgia.jpg",
    },
    {
      name: "Dallas",
      price: "$15.00/Share",
      assets: "3 Assets",
      growth: "↑ 12%",
      image: "/images/dallas.jpg",
    },
    {
      name: "Ocala",
      price: "$20.00/Share",
      assets: "5 Assets",
      growth: "↑ 8%",
      image: "/images/ocala.jpg",
    },
    {
      name: "Charleston",
      price: "$12.00/Share",
      assets: "4 Assets",
      growth: "↑ 15%",
      image: "/images/charleston.jpg",
    },
    {
      name: "Augusta",
      price: "$8.00/Share",
      assets: "1 Asset",
      growth: "↑ 5%",
      image: "/images/augusta.jpg",
    },
    {
      name: "Jacksonville",
      price: "$18.00/Share",
      assets: "3 Assets",
      growth: "↑ 20%",
      image: "/images/jacksonville.jpg",
    },
  ];
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);
  return (
    <>
      <section className="relative bg-white pb-[20px] dark:bg-dark-300 sm:overflow-hidden mb-[50px] mt-[120px]">
        <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70  sm:hidden"></div>
        <div className="container ">
          <div className="mb-12">
            <div className="block max-lg:text-center lg:flex">
              <h2 className=" max-lg:mb-5 text-center max-w-[950px] w-full mx-auto text-[26px] md:text-[36px] lg:text-[54px]">
              Invest in a portfolio of homes in these cities
              </h2>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2  -translate-y-1/2 max-sm:hidden">
              <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px] "></div>
              <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
              <div className="lg-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            </div>
            <motion.div
              className=" grid grid-cols-3  gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
              ref={ref}
              initial="initial"
              animate={controlAnimation}
              variants={fadeUpAnimation}
            >
              {data?.map((item, index) => (
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className=" flex flex-col justify-end p-4 relative scale-100 h-[288px] lg:h-[500px] rounded-[20px] bg-white  shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
                  key={index}
                >
                  <Link href="#">
                    <div className="">
                      <div className="relative w-full">
                        <div>
                          <h2 className="text-lg font-bold text-white">
                            {item.name}
                          </h2>
                          <div className="flex gap-1">
                            <p className="bg-black bg-opacity-60 rounded-md text-white p-1 text-xs">
                              {item.price}
                            </p>
                            <p className="bg-black bg-opacity-60 rounded-md text-white p-1 text-xs">
                              {item.assets}
                            </p>
                            <p className="bg-black bg-opacity-60 rounded-md text-white p-1 text-xs">
                              {item.growth}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-[50px]">
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewSection;
