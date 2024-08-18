import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import styles from "@/styles/customText.module.css"
import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";


export default function Reviews() {
    const [data, setData] = useState([]);
    const [SliderPlay, setSliderPlay] = useState(true);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await fetch('/api/reviews');
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

    var SliderSettings = {
        autoFill: true,
        speed: 120,
        play: SliderPlay
    };

    function formatDate(string) {
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    function getRatingInStars(count) {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            if (i < count) {
                arr.push(
                    <svg className="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                );
            } else {
                arr.push(
                    <svg className="w-6 h-6 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                );
            }
        }
        return arr;
    }

    function SliderButton() {
        setSliderPlay(!SliderPlay)

        const PlayButton = document.getElementById("playButton");
        const PauseButton = document.getElementById("pauseButton");
        if (SliderPlay) {
            PauseButton.style.display = "none"
            PlayButton.style.display = "block"
        } else {
            PauseButton.style.display = "block"
            PlayButton.style.display = "none"
        }
    }

    return (
        <section id="reviews" className="bg-gradient-to-b from-white to-artic-blue">
            <div className="py-16 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center font-dText text-5xl font-bold">
                    <hr className="h-px w-full my-8 bg-gray-300 border-0 dark:bg-gray-700" />
                    <h1>REVIEWS</h1>
                    <hr className="h-px w-full my-8 bg-gray-300 border-0 dark:bg-gray-700" />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Link target="_blank" href={"https://www.google.com/search?q=kanwardeep+kanwar&oq=kanwardeep+kanwar&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBNIBCDk2OTRqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=ChFrYW53YXJkZWVwIGthbndhckibpaTD_66AgAhaGxAAEAEYABgBIhFrYW53YXJkZWVwIGthbndhcpIBD21vcnRnYWdlX2xlbmRlcqoBUhABKhUiEWthbndhcmRlZXAga2Fud2FyKAAyIBABIhzkqNgsvYEHIQFj62mMSHJx1Z85RqfcZuZRC9iaMhUQAiIRa2Fud2FyZGVlcCBrYW53YXI#lkt=LocalPoiReviews&lrd=0x882b15a18dfcacc1:0x1585542428599dfa,3,,,,&rlimm=1550738160971521530"} class="ml-8 mb-8 text-white font-semibold cursor-pointer rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 py-2 px-8 duration-300">
                        Write a Review
                    </Link>
                    <div className="w-10 mr-8 mb-8 text-bmo-blue hover:bg-bmo-blue/25 rounded-full cursor-pointer" onClick={SliderButton}>
                        <PauseCircleIcon id="pauseButton" className="size-6" />
                        <PlayCircleIcon id="playButton" className="size-6 hidden" />
                    </div>
                </div>

                <Marquee {...SliderSettings}>
                    {data.map(({ AuthorName, ProfileImage, ReviewContent, Time, Rating }) => (
                        <div key={Time} className="border-2 mx-8 flex flex-col gap-5 bg-white border-bmo-blue rounded-lg p-10 min-w-[20rem] max-w-xs lg:max-w-md lg:min-w-[28rem] max-h-[350px] min-h-[350px]">
                            <div className="flex flex-row items-center gap-4">
                                <Image src={ProfileImage} alt={'ReviewsImage_' + AuthorName} width={56} height={56} />
                                <div className="font-headings">
                                    <h2 className="font-semibold text-lg">{AuthorName}</h2>
                                    <h4 className="text-sm text-bmo-blue">{formatDate(Time)}</h4>
                                </div>
                            </div>
                            <div className="flex items-center">
                                {getRatingInStars(Rating)}
                            </div>
                            <p className={styles.lineClampText}>
                                {ReviewContent}
                            </p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}