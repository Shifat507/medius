import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <Reviews></Reviews>
      <Faq></Faq>
      {/* <Footer></Footer> */}
    </div>
  );
}
