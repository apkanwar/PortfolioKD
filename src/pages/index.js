import Head from "next/head";
import Navbar from "@/components/navbar";
import Intro from "@/components/intro";
import About from "@/components/about";
import Reviews from "@/components/reviews";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";

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
      <ContactForm />
      <Footer />
    </>
  )
}