import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MainPage from "@/components/MainPage"

const data = {
    id: 5,
    title: "ScruberJay",
    studyLink: {
        type: "case-study", // can be "case-study" or "external"
        label: "Case Study",
        url: "/scruberjay/casestudy", // for case study, we'll append the ID
    },
    subHeading: "Household Food Waste Management Application",
    topImg: "/.webp/Scruberjay/MainPage/1.webp",
    timeline: "September 2021-December 2021",
    clientSupport: [
        "HPI School of Design Thinking",
        "Hasso Plattner Institute, Germany",
    ],

    team: [
        "Bareen Parvez",
        "Clara Grunwald",
        "Lars Massaneck",
        "Leaonard Paetzmann",
    ],
    roles: ["Research", "User Experience Design", "User Interface Design"],
    overview: {
        text: `ScruberJay is a digital solution aimed at reducing household food waste by streamlining grocery management. 
            The app syncs with supermarket chains to automatically track users' purchases, offering storage tips, expiry 
            reminders, and quick meal suggestions using ingredients on hand. By leveraging machine learning, ScruberJay predicts 
            the shelf life of perishable items and helps users make the most of their groceries before they spoil. This seamless 
            ecosystem connects supermarkets and consumers, making food management more efficient and sustainable.`,
        images: [
            "/Frame 112.png",
            "/Frame 205.png",
            "/iOS app dock.png",
        ],
    },

    functions: [
        {
            title: "Import purchased groceries with storage tips",
            description: `The application allows users to get their purchased groceries imported through a barcode that the 
                cashier scans at the supermarket checkout, suggesting storage ideas for the purchased perishable food. Alternatively, 
                the QR code/barcode scanner on the application allows the user to scan their receipt’s code in case they missed 
                getting it scanned at the counter.`,
            image: ["/Frame 206.png"],
        },
        {
            title: "Alerts when food is expiring with recommended recipes",
            description: `Throughout the week, ScruberJay reminds the user what to use up on which day and recommends dishes 
                built to their taste and dietary restraints with what is left in their pantry.`,
            image: ["/Frame 208.png"],
        },
        {
            title: "Dashboard with pantry status",
            description: `The dashboard has an overview of the remaining food in the pantry with recommended recipes to cook 
                with the available food.`,
            image: ["/Frame 200.png"],
        },
        {
            title: "Grocery recommendations for future shopping",
            description: `Based on saved recipes & dietary restraints logged in the application, the app recommends groceries 
                for future shopping rounds.`,
            image: ["/Frame 202.png"],
        },
    ],
}

const ScruberJay = () => {
    return (
        <div>
            <Header />
            <MainPage
                clientList={data.clientSupport}
                functions={data.functions}
                // impact={data.impact}
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
        </div>
    )
}
export default ScruberJay
