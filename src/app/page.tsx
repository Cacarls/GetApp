import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GetApp",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="video">
        <Video />
      </div>
      <div id="brands">
        <Brands />
      </div>
      <div id="about">
        <AboutSectionOne />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="services">
        <AboutSectionTwo />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
