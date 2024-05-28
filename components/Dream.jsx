"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Dream = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FCFF] pb-[50px] pt-[50px] dark:-mt-24 dark:bg-dark max-md:pb-20 dark:max-md:-mt-60">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="p-5 lg:p-10">
            <p className="section-tagline">DREAM IT, DO IT</p>

            <h2 className="mb-8 max-lg:mb-4 text-[26px] md:text-[26px] lg:text-[54px]">
              Earn Rental Income Now
            </h2>
            <p className="mb-11 max-lg:mb-5">
              People will say they always wanted to own rental property, but it
              sounds like work. With Homevest, you leave the work to us.
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  An affordable way to invest in real estate
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
                  Simplifying the investment process
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>

                <span className="font-jakarta_sans font-medium dark:text-white">
                  Track your portfolio online
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="btn"
            >
              Start Your Journey
            </Link>
          </div>
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full h-full z-10 p-[50px]"
            >
              <Image
                src="/images/Frame 2121455565.png"
                alt="vision image"
                width={600}
                height={700}
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dream;
