import About from "@/components/about";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KD Kanwar</title>
      </Head>
      
      <Navbar />
      <Intro />
      <About />
      <Reviews />
    </>
  )
}