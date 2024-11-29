import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-4xl font-gilroy ">Hello World</h1> */}
      <Nav />
      <Hero />
      <MidSection />
    </div>
  );
}
