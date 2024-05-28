"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Card = ({ data }) => (
  <div
    className={`sticky py-[70px] px-[50px] rounded-[60px] my-6 w-11/12 mx-auto container ${data.color} ${data.stickyPosition}`}
  >
    <p
      className={`flex items-center justify-start flex-shrink-0 gap-2 ${data.textColor}`}
    >
      <span className="text-lg text-black font-semibold bg-white rounded-full h-10 w-10 p-2">
        {data.step}
      </span>
      STEPS
    </p>
    <div className="flex flex-col-reverse lg:flex-row items-end justify-between gap-[100px]">
      <div className="flex-1 lg:mx-6 mt-4 lg:mt-0 text-left">
        <h3 className={`text-xl font-semibold mb-2 ${data.textColor}`}>
          {data.title}
        </h3>
        <p className={`${data.textColor}`}>{data.desc}</p>
      </div>
      <div className="flex items-center justify-center mt-4 lg:mt-0 rounded-3xl overflow-hidden mx-auto">
        <img
          src={data.img}
          alt={data.title}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  </div>
);

const HowItWorksStep = () => {
  const cards = [
    {
      title: "Browse City Properties",
      desc: "Browse through our selection of city funds, each meticulously curated to target high-growth areas with strong rental demand and appreciation potential. From bustling urban centers to charming suburban neighborhoods, we offer a diverse range of investment opportunities to suit your preferences.",
      img: "/images/app_view/step_one.png",
      step: 1,
      color: "bg-[#1C4964] dark:bg-[#232323]",
      textColor: "text-white",
      stickyPosition: "top-[100px]",
      
      backgroundColor:"bg-yellow-600",
      titleFontSize: "text-[400px]", // Add a class for larger font size
    },
    {
      title: "Buy SEC-Compliant Shares Investment Properties",
      desc: "Via the Homevest platform, investors can buy shares in individual homes or in a collection of homes via one of our city funds.",
      img: "/images/app_view/step_two.png",
      step: 2,
      color: "bg-[#5FA7D2] dark:bg-[#272727]",
      textColor: "text-white",
      stickyPosition: "top-[150px]",
    },
    {
      title: "Track Your Investment",
      desc: "Stay informed about the performance of your investments with our user-friendly dashboard. Monitor property acquisitions, rental income, and potential dividends real-time, giving you the confidence to make informed decisions about your portfolio. Our transparent reporting ensures that you always know where your money is and how it's performing.",
      img: "/images/app_view/step_three.png",
      step: 3,
      color: "bg-[#C9E8FF] dark:bg-[#2C2C2C]",
      textColor: "text-black dark:text-white",
      stickyPosition: "top-[200px]",
    },
  ];

  return (
    <section className="text-center pb-[50px] pt-[100px]">
      <h2 className="font-bold mb-8 text-[26px] md:text-[36px] lg:text-[54px]">
        How it works
      </h2>
      <div className="w-screen flex flex-col gap-[50px] justify-center items-center">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              data={card}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksStep;
