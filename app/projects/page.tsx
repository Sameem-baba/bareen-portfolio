/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Footer from "@/components/Footer"
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header"
import Link from "next/link"
import { useState } from "react"

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
    {
        name: "Rose | The Coffee Company",
        desc: "Visual identity design",
        image: "/rose.png",
        dataCategory: "Graphic Design",
        link: "https://www.behance.net/gallery/120644037/ROSE-The-Coffee-Company-Brand-Identity"
    },
    {
        name: "Meezan | Publishers & Distributors",
        desc: "Visual identity design",
        image: "/meezan.png",
        dataCategory: "Graphic Design",
        link: "https://www.behance.net/gallery/116630229/MEEZAN-Publishers-Distributors-Brand-Identity"

    },
    {
        name: "Editorial Style Guide",
        desc: "Global Citizenship Foundation India",
        image: "/editorial.png",
        dataCategory: "Graphic Design",
        link: 'https://www.behance.net/gallery/118590027/Editorial-Style-Guide-Global-Citizenship-Foundation'

    },
]

const Projects = () => {
    const [dataCategory, setDataCategory] = useState("all");
    const [filteredProjects, setFilteredProjects] = useState<any[]>(projects)
    const [number, setNumber] = useState(0)


    const sandbox = [
        {
            name: "The Pacifist | Game Design",
            desc: "A 2D platformer game I am currently working on as a part of the project module in my masters’ program. The game is being developed in Unity with two other stduents and in additon to the art direction, I am working on designing the levels and environment of the game.",
            image: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp"
        },
        {
            name: "Communication Prothesis | Wearable Interactive Device",
            desc: "A hand prothesis that allows the user to translate light signals into sound. The amount of light recognised by an LDR sensor, worn around the finger, is synthesised using an on-the-arm arduino and pre-existing audio libraries (Mozzi). The project was created in collaboration with Raum Zeit Piraten.",
            image: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp"
        },
        {
            name: "Mosque Fundraiser",
            desc: "ScruberJay is a digital solution aimed at reducing household food waste by streamlining grocery management. ",
            image: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp"
        },
        {
            name: "Electro-bug | Interactive Object",
            desc: "A hand prothesis that allows the user to translate light signals into sound. The amount of light recognised by an LDR sensor, worn around the finger, is synthesised using an on-the-arm arduino and pre-existing audio libraries (Mozzi). The project was created in collaboration with Raum Zeit Piraten.",
            image: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp"
        },
        {
            name: "The Ledbury | Menu Design",
            desc: "ScruberJay is a digital solution aimed at reducing household food waste by streamlining grocery management. The app syncs with supermarket chains to automatically track users' purchases, offering storage tips, expiry reminders, and quick meal suggestions using ingredients on hand",
            image: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp"
        },

        {
            name: "Darbār | Packaging Design",
            desc: "ScruberJay is a digital solution aimed at reducing household food waste by streamlining grocery management. The app syncs with supermarket chains to automatically track users' purchases, offering storage tips, expiry reminders, and quick meal suggestions using ingredients on hand",
            image: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp"
        },
        {
            name: "BuilD 1.0",
            desc: "ScruberJay is a digital solution aimed at reducing household food waste by streamlining grocery management. The app syncs with supermarket chains to automatically track users' purchases, offering storage tips, expiry reminders, and quick meal suggestions using ingredients on hand",
            image: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp"
        },
    ]

    // const memoizedProjects = useMemo(() => projects, [projects]);

    // useEffect(() => {
    //     if (dataCategory === "all") {
    //         setFilteredProjects(projects);
    //     } else {
    //         setFilteredProjects(projects.filter((pro) => pro.dataCategory === dataCategory));
    //     }
    // }, [memoizedProjects, dataCategory]);

    return (
        <div>
            <img src="/projectsGrid.svg" alt="" className="absolute -top-20 -z-30 w-full object-cover" />
            <Header />

            <div className="px-10" style={{ marginTop: "70px" }}>
                <div className="flex flex-col justify-between gap-14">
                    <h1 className="font-normal text-8xl font-regular-100">Projects</h1>
                    <div className="project-nav">
                        <ul className="flex flex-wrap gap-4 p-0 mb-0 ">
                            <li className={`font-medium-18 nav-item ${dataCategory === "all" && "bg-[--black] text-white"}`} data-category="all" onClick={() => {
                                setDataCategory("all")
                                setFilteredProjects(projects)
                            }
                            }>All</li>
                            <li className={`font-medium-18 nav-item ${dataCategory === "UI/UX" && "bg-[--black] text-white"}`} data-category="UI/UX" onClick={() => {
                                setDataCategory("UI/UX")
                                setFilteredProjects(projects.filter((pro) => pro.dataCategory === "UI/UX"))
                            }}>
                                UI/UX
                            </li>
                            <li className={`font-medium-18 nav-item ${dataCategory === "Media Arts" && "bg-[--black] text-white"}`} data-category="Media Arts" onClick={() => {
                                setDataCategory("Media Arts")
                                setFilteredProjects(projects.filter((pro) => pro.dataCategory === "Media Arts"))

                            }}>
                                Media Arts
                            </li>
                            <li className={`font-medium-18 nav-item ${dataCategory === "Graphic Design" && "bg-[--black] text-white"}`} data-category="Graphic Design" onClick={() => {
                                setDataCategory("Graphic Design")
                                setFilteredProjects(projects.filter((pro) => pro.dataCategory === "Graphic Design"))

                            }}>
                                Graphic Design
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="project-container">
                    {filteredProjects.map((project: any, i: number) => (
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" key={i} className="project-link">
                            <div className="w-full" data-category={project.dataCategory}>
                                <img className="w-full h-[300px] rounded-2xl overflow-hidden mb-0" src={project.image} alt={project.name} />
                                <div className="flex justify-between w-full gap-12 mt-8">
                                    <h2 className="font-medium-18 m-0 font-normal min-w-[200px]">{project.name}</h2>
                                    <p className="font-regular-18 m-0 font-light text-end text-[--primary-gray] max-w-[250px]">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="px-10 pb-10">
                <div className="section">
                    <div className="flex flex-col justify-between gap-14">
                        <h1 className="projects-title font-regular-90">The Sandbox</h1>
                    </div>
                    <p className="sandbox-description">
                        Passion projects, experiments and side gigs—some completed, some shelved, and others still taking shape
                    </p>
                </div>

                <div className="mt-10 flex justify-center items-center">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <img className="object-contain h-[300px] rounded-2xl mb-0 overflow-hidden" src={`/sandbox/${number + 1}.png`} alt="Councelopedia" />
                        <div className="ml-8 flex flex-col justify-center gap-5">
                            <h2 className="font-medium text-2xl">{sandbox[number].name}</h2>
                            <p className="w-[500px]">
                                {sandbox[number].desc}
                            </p>
                            <div className="flex justify-start items-center gap-2">
                                <img src="/chevron-left.svg" className="h-8 w-8 p-1 border border-[--black] cursor-pointer rounded-full" alt="" onClick={() => {
                                    if (number === 0) {
                                        setNumber(6)
                                    } else {
                                        setNumber(number - 1)
                                    }
                                }} />
                                <img src="/chevron-right.svg" className="h-8 w-8 p-1 border border-[--black] cursor-pointer rounded-full" alt="" onClick={() => {
                                    if (number === sandbox.length - 1) { setNumber(0) } else {
                                        setNumber(number + 1)
                                    }
                                }} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
            <img src="/footerGrid.svg" alt="" className="absolute bottom-0 -z-30 w-full object-cover" />

        </div>
    )
}
export default Projects