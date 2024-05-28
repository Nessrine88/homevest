"use client";
import React, { useState } from "react";
import SliderInput from "./SliderInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const InputBox = () => {
  const [investment, setInvestment] = useState(100);
  const [propertyValueGrowth, setPropertyValueGrowth] = useState(0);
  const [annualRentalYield, setAnnualRentalYield] = useState(0);
  console.log(investment, propertyValueGrowth, annualRentalYield);
  return (
    <div className="bg-white dark:bg-[#393939]  border border-[#1C4966] rounded-[20px] px-5 py-10 ">
      <h4 className="text-[24px] font-semibold text-[#111111]">
        How much do you want to invest?
      </h4>
      <SliderInput
        content="Initial Investment"
        minValue={100}
        maxValue={20000}
        step={100}
        price
        initialValue={100}
        onChange={(e) => setInvestment(e)}
      />
      <SliderInput
        content="Property Value Growth(over 5 year)"
        minValue={0}
        maxValue={100}
        percent
        onChange={(e) => setPropertyValueGrowth(e)}
      />
      <SliderInput
        content="Expected annual rental yield"
        minValue={0}
        maxValue={100}
        percent
        onChange={(e) => setAnnualRentalYield(e)}
      />
      <p className="mt-5 text-[14px]">
        All projected values are before any property costs and platform fees,
        and based on a 5-year holding period. We expect the asset value to grow
        30% over the next 5 years.*
      </p>
    </div>
  );
};

const Earning = () => {
  return (
    <section className=" bg-[#F6FBFE] dark:bg-[#1C1C1C]">
      <div className="container grid grid-cols-1 gap-16 md:grid-cols-2 px-10 py-20">
        <div className="p-2">
          {/* <p className="section-tagline">DREAM IT, DO IT</p> */}

          <h2 className="mb-8 max-lg:mb-4 text-[26px] md:text-[36px] lg:text-[54px]">
            How Much will I Earn?
          </h2>
          <p className="mb-5">
            Home equity investments (HEI’s) allow retail investors to access a
            homeowner’s equity in exchange for a stake in the home’s future
            appreciation. HEI’s are all about equity, the foundation of real
            estate wealth.
          </p>
          <h5 className="mb-5 font-semibold">
            HEI's generate returns through two methods.
          </h5>
          <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
            <li className="flex items-center gap-x-2 ">
              <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                />
              </span>
              <span className="font-jakarta_sans font-medium dark:text-white">
                Property Values Increase
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                />
              </span>
              <span className="font-jakarta_sans font-medium dark:text-white">
                Payoffs Generated from a Home Sale or Refinance
              </span>
            </li>
          </ul>
          <Link
            href="/contact"
            className="btn"
          >
            Get Started
          </Link>
        </div>
        <InputBox />
      </div>
    </section>
  );
};

export default Earning;
