"use client";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Tools from "@/components/Tools";
import Image from "next/image";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      {/* <h1 className="text-4xl font-gilroy ">Hello World</h1> */}
      <Nav />
      <Hero />
      <MidSection />
      <Tools />
      <Pricing />
      <GetStarted />
      <Footer />
    </div>
  );
}
