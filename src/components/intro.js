import Image from "next/image";

export default function Intro() {

    return (
        <section className="bg-gradient-to-b from-white to-artic-blue">
            <div id="top" className='flex flex-col justify-center items-center font-dText font-bold text-5xl gap-3 max-w-7xl mx-2 xl:mx-auto min-h-screen text-center'>
                <Image alt="BMO Rate Guarantee" src="/rate.png" width={256} height={256} className="lg:absolute right-32 top-28" />
                <h2 className="mt-16">Hi, my name is </h2>
                <h1 className='mb-12 text-6xl bg-gradient-to-l from-[#4167A6] to-[#00CDAC] text-transparent bg-clip-text'>Kanwardeep Kanwar</h1>
                <h2 className='mt-8 text-2xl lg:text-5xl'>I am here help you solve your Mortgage Needs</h2>
            </div>
        </section>
    )
}