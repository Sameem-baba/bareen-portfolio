import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MainPage from "@/components/MainPage"

const data = {
    title: "Councelopedia",
    studyLink: {
        type: "case-study",
        label: "Case Study",
        url: "/councelopedia/casestudy",
    },
    subHeading: "Digital Tool for Young Migrants in Germany",
    topImg: "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp",
    timeline: "December 2021- March 2022",
    clientSupport: [
        "Hasso Plattner Institute, Germany",
        "Judenmigrationdientse, Germany",
    ],
    team: [
        "Bareen Parvez",
        "Chris Bower",
        "Deniz Calhan",
        "Leon Bien",
        "Marie Janda",
    ],
    roles: ["Research", "User Experience Design", "User Interface Design"],
    overview: {
        text: `The Jugend Migration Dienste (JMD), an organization that supports young migrants in their integration process in Germany, faces significant challenges in delivering effective counseling services. Language barriers and geographical distances between counselors and clients hinder the process, making it difficult to provide timely and personalized support. While digitalization presents a potential solution, the path to implementing it remains unclear. JMD is in need of a fresh approach to digitize its counseling services and better support young migrants in settling down in Germany. Councelopedia is a digital platform designed to streamline the connection between migrants and the most suitable counselor for their specific needs. By virtually integrating all of JMD's offices, Councelopedia expands the pool of available counselors, allowing clients to find experts based on language proficiency, specialized knowledge, or availability. Additionally, the platform facilitates connections with external advisors beyond JMD. The prototype focuses on optimizing the client’s experience, ensuring that migrants can quickly and easily get in touch with the right counselor. Target audience: Clients of JMD | migrants | between 12-27 years old | in need of support to integrate in Germany`,
        images: ["/.webp/Councelpedia/Mainpage/Onboarding-1.webp"],
    },

    functions: [
        {
            title: "Onboarding",
            description: `After choosing the preferred language, the client can click through explanatory slides which show what JMD offers, what JMD is and what the web application can be used for. Since the service is only for young adults from 12 to 27 years of age, the homepage provides an external link to the services for people above 27.`,
            image: [
                "/.webp/Councelpedia/Mainpage/Onboarding-1.webp",
                "/.webp/Councelpedia/Mainpage/Onboarding-2.webp",
            ],
        },
        {
            title: "Find a counselor",
            description: `The user gets the option to fill in a form which helps to find their perfect counselor match. They will then in the next step be provided with a list of counselors from all over Germany speaking their language and are able to choose and contact one. The list can be sorted for instance by how close the counselors are. This function relies on the internal changes JMD has to  make: pooling their resources and having a shared data basis of all  their counselors. The clients have various contact options: they can call  the counselor directly via a browser call, write them an email or make  an appointment. Here again, they can choose between an appointment  for a call, video call or on- site. After verifying with their email  address or phone number, they get a confirmation of their appointment on the website as well as per email / SMS.`,
            image: [
                "/.webp/Councelpedia/Mainpage/Find a counselor 1.webp",
                "/.webp/Councelpedia/Mainpage/Find a counselor 2.webp",
                "/.webp/Councelpedia/Mainpage/Find a counselor 3.webp",
                "/.webp/Councelpedia/Mainpage/Find a counselor 4.webp",
            ],
        },
        {
            title: "Personal dashboard",
            description: `Once the user creates an account, they get access to a dashboard which  shows all important information at a glance with special focus on the key data about upcoming appointments`,
            image: [
                "/.webp/Councelpedia/Mainpage/Personal-dashboard-1.webp",
                "/.webp/Councelpedia/Mainpage/Personal-dashboard2.webp",
            ],
        },
        {
            title: "Forums & connections",
            description: `The forums page offers clients to get information from the wider community of JMD clients without having to contact a counsellor.`,
            image: [
                "/.webp/Councelpedia/Mainpage/Forums & connections 1.webp",
                "/.webp/Councelpedia/Mainpage/Forums & connections 2.webp",
            ],
        },
    ],
    impact: {
        sections: [
            {
                heading: "Quicker access to counseling ",
                body: "Clients can connect with a suitable counselor faster by pooled JMD offices, reducing delays and making it easier to find someone with the right language skills and expertise across their database.",
            },
            {
                heading: "Language flexibility",
                body: "Clients can choose their preferred language from the start to access the tool, or communicate with the counselor, ensuring effective communication and reducing misunderstandings.",
            },
            {
                heading: "Efficient workload management",
                body: "The platform allows for better distribution of counseling tasks between multiple JMD offices, enabling the organisation to hire more counselors and balance workloads, which improves service quality.",
            },
            {
                heading: "Multiple services in one place",
                body: "Counselopedia combines counseling, forums, language course searches, and more into a single platform, reducing the need for clients to use multiple tools.",
            },

            {
                heading: "Multilingual support",
                body: "From the outset, users can select their native language to access the platform, making them feel comfortable and eliminating language barriers from the start.",
            },
            {
                heading: "",
                body: "Feedback from JMD’s leadership and stakeholders confirmed the project's high value and potential, as shown through the high-fidelity prototypes leading to its integration into JMD’s service strategy. Once my program term concluded, we handed over the project and PRD to JMD’s internal product team to further develop the foundation we established.",
            },
            {
                heading: "",
                body: "In addition to the user-oriented design, we developed a detailed Implementation Guide, outlining the solution’s use cases and a step-by-step plan for integration. Though the prototypes primarily focused on the user side, we included a blueprint in the PRD for how the interface should appear from the employee’s perspective, supporting JMD’s future developments.`,",
            },
        ],
    },
}

const Coucelopedia = () => {
    return (
        <div>
            <Header />
            <MainPage
                clientList={data.clientSupport}
                functions={data.functions}
                impact={data.impact}
                overview={data.overview}
                roles={data.roles}
                // scopesOfProject={[]}
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
export default Coucelopedia
