import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import Nav from "@/components/Nav";
import Tools from "@/components/Tools";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-4xl font-gilroy ">Hello World</h1> */}
      <Nav />
      <Hero />
      <MidSection />
      <Tools />
    </div>
  );
}
