import { useEffect, useState } from "react";

export default function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchProjectOverview();
    }, []);

    const fetchProjectOverview = async () => {
        try {
            const response = await fetch('/api/aboutInfo');
            if (!response.ok) {
                throw new Error('Failed to Fetch Data');
            }
            const { data } = await response.json();
            setData(data);
            console.log('Fetched Data!');
        } catch (error) {
            console.error('Error Fetching Data:', error);
        }
    };

    return (
        <section className='bg-gradient-to-b from-artic-blue to-white'>
            <div id="about" className="max-w-7xl mx-auto pb-16">
                <div className="flex flex-col items-center justify-center font-dText text-5xl font-bold pb-12">
                    <hr class="h-px w-full my-8 bg-gray-300 border-0 dark:bg-gray-700" />
                    <h1>ABOUT</h1>
                    <hr class="h-px w-full my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
                    <div className="flex items-center justify-center">
                        <img src="profile.png" alt="Profile Picture" className="rounded-full w-64" />
                    </div>
                    <div className="flex flex-col gap-4 col-span-2">
                        {data.map(({ paragraph }) => (
                            <p className="text-lg font-dText">
                                {paragraph}
                            </p>
                        ))}
                        <button className="bg-bmo-blue text-white mt-8 rounded-full py-5 px-14 hover:bg-opacity-90 transition-opacity duration-300 text-2xl font-medium font-headings w-fit">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}