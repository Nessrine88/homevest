import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { ClientData } from "@/data/data";
import clientBorder from "../public/images/clients/client-border.svg";
import clientBorderDark from "../public/images/clients/client-border-dark.svg";
import Link from "next/link";
const Partners = ({
  sectionTitle = true,
  border = true,
  spacing = "py-[50px] max-lg:py-[90px] bg-white dark:bg-dark-300",
}) => {
  return (
    <section className={`client ${spacing} `}>
      <div className="container overflow-hidden max-lg:!px-0">
        {sectionTitle && (
          <div className=" px-10px mx-auto max-w-[550px] text-center max-lg:px-2.5">
            {/* <h2 className="mb-10">The world&rsquo;s best companies trust aplio.</h2> */}
            <h2 className="mb-10 md text-[26px] md:text-[36px] lg:text-[54px]">
              Our Partners
            </h2>
            <p className="text-light mb-15">
              We Work With the Best to Deliver the Best Results
            </p>
          </div>
        )}

        <div className="relative py-8 before:absolute before:-right-0.5 before:top-1/2 before:z-10 before:h-[40px] before:w-[120px] before:-translate-y-1/2  before:bg-gradient-to-l before:from-white before:from-[37.5%] after:absolute after:-left-0.5 after:top-1/2 after:z-10 after:h-[40px] after:w-[120px] after:-translate-y-1/2  after:bg-gradient-to-r after:from-white  after:from-[37.5%] dark:before:from-dark-gradient dark:after:from-dark-gradient">
          {border && (
            <div className="absolute left-0 top-0 h-full w-full  max-lg:hidden">
              <Image
                src={clientBorder}
                alt="border"
                className="inline-block dark:hidden"
              />
              <Image
                src={clientBorderDark}
                alt="border"
                className="hidden dark:inline-block"
              />
            </div>
          )}

          <Marquee pauseOnHover>
            {ClientData.map((clients) => (
              <div
                className="h-30 marquee-content-list relative w-[215px]"
                key={clients.id}
              >
                <Image
                  src={clients.imageLight}
                  alt="group"
                  className="inline-block h-auto w-auto dark:hidden"
                  width={120}
                  height={22}
                />
                <Image
                  src={clients.imageDark}
                  alt="group"
                  className="hidden h-auto w-auto dark:inline-block"
                  width={120}
                  height={22}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <button className="btn-outline">Start Your Journey</button>
      </div>
    </section>
  );
};

export default Partners;
