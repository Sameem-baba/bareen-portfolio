import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MainPage from "@/components/MainPage"

const data = {
    title: "Solar Impressions",
    studyLink: {
        type: "external",
        label: "Read Documentation",
        url: "https://example.com/documentation", // external URL
    },
    subHeading: "Energy Harvesting & Data Visualisation",
    topImg: "/.webp/SolarImpressions/SolarImpressions.webp",
    timeline: "April 2024 - July 2024",
    clientSupport: ["Bauhaus University Weimar"],
    team: ["Bareen Parvez"],
    scopeOfProject: [
        "Data visualisation",
        "Physical computing",
        "Installation design",
    ],
    overview: {
        text: `"Solar Impressions" is a digital installation that turns real-time sunlight data into a visual experience intending to make the often overlooked aspects of nature, like sunlight, more tangible and relatable through art while drawing inspiration from the interrelated phenomena of solar flares and aurora borealis. The resulting data sculpture is a bridge between the digital and natural worlds, exploring how data visualization can be used to represent and reinterpret our relationship with sustainable energy. The visuals are programmed to respond to live sunlight data collected by a light-dependent resistor (LDR) sensor. As the LDR measures the intensity of light in its environment, this data feeds into the visual system, directly influencing the patterns and colours displayed on the screen. On bright, sunny days, the installation displays vibrant colours—deep reds, fiery oranges, and glowing yellows—reflecting the intensity and energy of the sunlight. As the light diminishes, the colours gradually shift to cooler blues and greys, representing the diminishing gradients of an aurora.
`,
        images: [
            "/.webp/SolarImpressions/1.webp",
            "/.webp/SolarImpressions/2.webp",
            "/.webp/SolarImpressions/3.webp",
            "/.webp/SolarImpressions/4.webp",
        ],
    },
}

const UniLaundry = () => {
    return (
        <div>
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
        </div>
    )
}
export default UniLaundry
