/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { usePathname, useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
const projects = [
    {
        name: "Councelopedia",
        desc: "Digital tool for young migrants in Germany",
        image: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp",
        dataCategory: "UI/UX",
        link: '/councelopedia'
    },
    {
        name: "UNILaundry",
        desc: "Student Dormitory Laundry Companion",
        image: "/.webp/UNILaundry/UNILaundry.webp",
        dataCategory: "UI/UX",
        link: '/unilaundry'
    },
    {
        name: "Solar Impressions",
        desc: "Energy Harvesting & Data Visualisation",
        image: "/.webp/SolarImpressions/SolarImpressions.webp",
        dataCategory: "Media Arts",
        link: "/solarimpressions"
    },
    {
        name: "Silence",
        desc: "Associations from the Valley of Kashmir",
        image: "/.webp/Silence/Cover.webp",
        dataCategory: "Media Arts",
        link: '/silence'
    },
    {
        name: "ScruberJay",
        desc: "Household Food Waste Management Application",
        image: "/.webp/Scruberjay/MainPage/1.webp",
        dataCategory: "UI/UX",
        link: '/scruberjay'
    },
    {
        name: "Trend Report 2023",
        desc: "Graphic design trend forecasting",
        image: "/.webp/TrendReport/1.webp",
        dataCategory: "Graphic Design",
        link: "/trendreport2023"
    },
]


const PrevNextContainer = () => {
    // console.log(pathname)
    const pathname = usePathname();
    const router = useRouter()
    console.log(pathname)
    function getSurroundingElements(array: any[], property: string, value: any) {
        if (!Array.isArray(array)) {
            throw new Error("The first argument must be an array.");
        }

        const index = array.findIndex(item => item[property] === value);

        if (index === -1) {
            return { before: null, current: null, after: null };
        }

        const before = index > 0 ? array[index - 1] : null;
        // const current = array[index];
        const after = index < array.length - 1 ? array[index + 1] : null;

        return { before, after };
    }


    const { before, after } = getSurroundingElements(projects, 'link', pathname)
    return (
        <div className="prev-next-container">
            {before && (
                <div onClick={() => router.push(before.link)} className="prev">
                    <div className="prev-flex">
                        <img src="/chevron-left.svg" alt="" />
                        <h1 className="font-medium-30">Previous</h1>
                    </div>
                    <p className="prev-next-para font-regular-18">
                        {before.name} - {before.desc}
                    </p>
                </div>
            )}


            {after && (
                <div onClick={() => router.push(after.link)} className="next">
                    <div className="next-flex">
                        <h1 className="font-medium-30">Next</h1>
                        <img src="/chevron-right.svg" alt="" />
                    </div>
                    <p className="prev-next-para font-regular-18">
                        {after.name} - {after.desc}
                    </p>
                </div>
            )}


        </div>
    )
}
export default PrevNextContainer