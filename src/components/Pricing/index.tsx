"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="GETAPP BIZ- BUSINESS PACKAGE"
          paragraph=""
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-red-500" 
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-red-500" 
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <OfferList text="Merchant Mobile App" status="active" />
            <OfferList text="Merchant Web Portal" status="active" />
            <OfferList text="Online Delivery" status="active" />
            <OfferList text="Product Management" status="active" />
            <OfferList text="Point-of-Sales (POS) (Max 20 trans/day)" status="active" />
            <OfferList text="Customer Tech Support (Limited)" status="active" />
            <OfferList text="Advertising" status="active" />
            <OfferList text="Promotional Videos (Short videos for YT Shorts, FB/IG Reels, Tiktok) (Php 300.00 / 30-45 sec video) (Php 500.00 / 45-60 sec video) FREE one (1) 30 sec video when you avail" status="active"/>
          </PricingBox>
          <PricingBox
            packageName="Pro"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <OfferList text="Merchant Mobile App" status="active" />
            <OfferList text="Merchant Web Portal" status="active" />
            <OfferList text="Online Delivery" status="active" />
            <OfferList text="Product Management" status="active" />
            <OfferList text="Point-of-Sales (POS) (Max 20 trans/day)" status="active" />
            <OfferList text="Customer Tech Support (Limited)" status="active" />
            <OfferList text="Advertising" status="active" />
            <OfferList text="Print of Order Slip" status="active" />
            <OfferList text="Sales Monitoring" status="active" />
            <OfferList text="Cashflow Management" status="active" />
            <OfferList text="Supplier Management" status="active" />
            <OfferList text="Inventory System" status="active" />
            <OfferList text="Voucher Management" status="active" />
            <OfferList text="Merchant App (Software) (Php 900.00/Month)" status="active" />
            <OfferList text="Merchant Device (Hardware Rental) (Php 950.00/Month)" status="active" />
            <OfferList text="Promotional Videos (Short videos for YT Shorts, FB/IG Reels, Tiktok) (Php 300.00 / 30-45 sec video) (Php 500.00 / 45-60 sec video) FREE one (1) 30 sec video when you avail" status="active"/>
          </PricingBox>
          <PricingBox
            packageName="Enterprise"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <OfferList text="Merchant Mobile App" status="active" />
            <OfferList text="Merchant Web Portal" status="active" />
            <OfferList text="Online Delivery" status="active" />
            <OfferList text="Product Management" status="active" />
            <OfferList text="Point-of-Sales (POS) (Max 20 trans/day)" status="active" />
            <OfferList text="Customer Tech Support (Limited)" status="active" />
            <OfferList text="Advertising" status="active" />
            <OfferList text="Print of Order Slip" status="active" />
            <OfferList text="Sales Monitoring" status="active" />
            <OfferList text="Cashflow Management" status="active" />
            <OfferList text="Supplier Management" status="active" />
            <OfferList text="Inventory System" status="active" />
            <OfferList text="Voucher Management" status="active" />
            <OfferList text="Income Statement" status="active" />
            <OfferList text="Customer Analytics" status="active" />
            <OfferList text="Product Analytics" status="active" />
            <OfferList text="Dine-in / Pre-Order" status="active" />
            <OfferList text="In-app Notification" status="active" />
            <OfferList text="Auto Purchase Order System" status="active" />
            <OfferList text="Merchant App (Software) (Php 1,900.00/Month)" status="active" />
            <OfferList text="Merchant Device (Hardware Rental) (Php 950.00/Month)" status="active" />
            <OfferList text="Promotional Videos (Short videos for YT Shorts, FB/IG Reels, Tiktok) (Php 300.00 / 30-45 sec video) (Php 500.00 / 45-60 sec video) FREE one (1) 30 sec video when you avail" status="active"/>
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
