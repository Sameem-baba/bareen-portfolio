/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MainPage from "@/components/MainPage"

const data = {
    title: "Trend Report ‘23",
    studyLink: {
        type: "external",
        label: "Read Documentation",
        url: "https://example.com/documentation", // external URL
    },
    subHeading: "Annual Graphic Design Trend Report",
    topImg: "/.webp/TrendReport/1.webp",
    timeline: "January 2023",
    clientSupport: ["Jumpinggoose Design Activists, Bengaluru, India"],
    team: ["Bareen Parvez"],
    scopeOfProject: ["Trend research", "Content writing", "Editorial design"],
    overview: {
        text: `"The 2023 Graphic Design Trend Report offers a detailed look into the current visual communication landscape, highlighting how technological growth and a celebration of individuality are shaping design. As the lead designer on this solo project, I was responsible for overseeing the entire development of the studio’s first edition of the report. This included conducting in-depth trend research, content writing and establishing the visual identity of the publication. The final report serves both as an internal guide for the agency and a source of inspiration for the broader design community. `,
        images: [
            "/.webp/TrendReport/2.webp",
            "/.webp/TrendReport/3.webp",
            // "/.webp/TrendReport/.webp",
        ],
    },
}

const TrendReport2023 = () => {
    return (
        <div className="relative">
            <Header />
            <MainPage
                clientList={data.clientSupport}
                // functions={data.functions}
                // impact={data.impact}
                overview={data.overview}
                // roles={data.roles}
                scopesOfProject={data.scopeOfProject}
                subHeading={data.subHeading}
                team={data.team}
                timeline={data.timeline}
                title={data.title}
                topImage={data.topImg}
                studyLink={data.studyLink}
            />
            <Footer />
            <img src="/footerGrid.svg" alt="" className="absolute bottom-0 -z-30 w-full object-cover" />
        </div>
    )
}
export default TrendReport2023
