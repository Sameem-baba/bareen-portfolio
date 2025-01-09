/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MainPage from "@/components/MainPage"

const data = {
    title: "Silence",
    studyLink: {
        type: "external",
        label: "Read Documentation",
        url: "https://example.com/documentation", // external URL
    },
    subHeading: "Associations from the Valley of Kashmir",
    topImg: "/.webp/Silence/Cover.webp",
    timeline: "October 2023 - January 2024",
    clientSupport: ["Bauhaus University Weimar"],
    team: ["Bareen Parvez"],
    roles: ["Interface design", "Physical computing", "Installation design"],
    overview: {
        text: `The project "Silence: Associations from the Valley of Kashmir" explores the  emotions and narratives associated within the concept of self-expression in Kashmir, where silence, though often imposed, has emerged as a crucial mechanism for survival and security. At its core, the installation uses vernacular Kashmiri script, serving as a conduit for the complex emotions and narratives surrounding silence in the region. Through an interplay of light and sound, the installation responds dynamically to its environment, where in the absence of sound, the words 'ċhọpü kạrzi' ('stay silent' in Kashmiri) fade into darkness, echoing the prevailing notion that silence is often synonymous with safety. Within the socio-political landscape of Indian-occupied Kashmir, where dissent is met with suppression and censorship, the imperative to remain silent often emanates from a genuine fear for personal safety.
      Read documentation`,
        images: ["/.webp/Silence/1.webp"],
    },
}

const UniLaundry = () => {
    return (
        <div className="relative">
            <Header />
            <MainPage
                clientList={data.clientSupport}
                // functions={data.functions}
                // impact={data.impact}
                overview={data.overview}
                roles={data.roles}
                // scopesOfProject={data.scopeOfProject}
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
export default UniLaundry
