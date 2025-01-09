import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MainPage from "@/components/MainPage"

const data = {
    title: "UNILaundry",
    studyLink: {
        type: "external",
        label: "Read Documentation",
        url: "https://example.com/documentation", // external URL
    },
    subHeading: "Student Dormitory Laundry Companion",
    topImg: "/.webp/UNILaundry/UNILaundry.webp",
    timeline: "August 2024",
    clientSupport: ["Bauhaus Summer School 2024"],
    team: ["Bareen Parvez"],
    scopeOfProject: [
        "Visual design",
        "User Experience Design",
        "Interface Design",
        "Variable type",
        "Animation",
        "Coding",
    ],
    overview: {
        text: `UNILaundry is a mobile application aimed at simplifying dormitory laundry management for students. The app notifies users when their laundry is done and provides real-time updates on the availability of washing machines and dryers. It’s a manual solution that relies on students diligently updating their machine usage, helping to schedule and manage laundry tasks more efficiently. The app doesn’t control or reserve the machines, as it was designed within the limitations of the existing laundry setup, where machine mechanisms cannot be altered. The app was designed incorporating Bauhaus-inspired design elements in the user interface—drawing on the works of Bauhaus Masters and students to create a modular and functional interface. Additionally, I explored basic animations with variable type using CSS for a more engaging & delightful user experience.`,
        images: [
            "/.webp/UNILaundry/1.webp",
            "/.webp/UNILaundry/2.webp",
            "/.webp/UNILaundry/3.webp",
        ],
    },

    functions: [
        {
            title: "Live update on laundry availability",
            description: `The app provides real-time updates on the availability of washing machines and dryers in the dormitory laundry hall. Users can quickly check which machines are in use and which are free, helping them plan their laundry trips more efficiently. This manual update system depends on students marking machines as in use or available, ensuring a smoother laundry experience for everyone.`,
            image: ["/.webp/UNILaundry/8.webp"],
        },
        {
            title: "In-app timer",
            description: `The app features a built-in timer that allows users to track the progress of their laundry cycles. Once a user starts a machine, they can set a timer to receive a notification when their load is done, ensuring they pick up their laundry promptly. To enhance the user experience, the app offers Dynamic Island notification options (for iOS), keeping users informed without needing to check the app constantly. This helps users manage their time effectively and prevents machine hogging in busy dorms.`,
            image: ["/.webp/UNILaundry/9.webp"],
        },
        {
            title: "Notifications when laundry is done or is available to use",
            description: `The app sends notifications to alert users when their laundry is finished, ensuring they pick it up on time. Additionally, for machine availability, users can enable a one-time notification feature for any occupied machine. This feature sends a reminder when that specific machine becomes available, helping users plan their laundry better. Once the notification is triggered, it disables automatically, ensuring a smooth and non-intrusive experience.`,
            image: [
                "/.webp/UNILaundry/10.webp",
                "/.webp/UNILaundry/11.webp",
            ],
        },
    ],
}

const UniLaundry = () => {
    return (
        <div className="relative">
            <Header />
            <MainPage
                clientList={data.clientSupport}
                functions={data.functions}
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
export default UniLaundry
