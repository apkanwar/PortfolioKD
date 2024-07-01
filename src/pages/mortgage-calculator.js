import Head from "next/head";
import NavbarDefaut from "@/components/navbars/navbarDefaut";
import Footer from "@/components/footer";
import Calculator from "@/components/calculator";

export default function MortgageCalculator() {
  return (
    <>
      <Head>
        <title>Mortgage Calculator</title>
      </Head>
      
      <NavbarDefaut />
      <Calculator />
      <Footer />
    </>
  )
}