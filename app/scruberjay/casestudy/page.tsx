/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const CaseStudy = () => {
    return (
        <div>
            <Header />

            <div className="top-container">
                <div className="scruber-container ">
                    <img src="/newScruber.png" alt="" />
                </div>
                <div className="scrubber container-leftside">
                    <div className="scruber-about">
                        <div className="scruber-flex">
                            <h1 className="scruber-title font-regular-90">ScruberJay</h1>
                            <div className="scruber-details">
                                <h1 className="first-line  font-medium-30">
                                    Household Food Waste Management Application
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="project-details">
                        <div className="timeline ">
                            <h4
                                className="font-medium-16"
                                style={{
                                    fontSize: "1rem !important",
                                    fontWeight: "500 !important",
                                    lineHeight: "1.375rem !important"
                                }}
                            >
                                Project Timeline
                            </h4>
                            <p className="font-regular-16">September 2021-December 2021</p>
                        </div>

                        <div className="clientSupport ">
                            <h4
                                className="font-medium-16"
                                style={{
                                    fontSize: "1rem !important",
                                    fontWeight: "500 !important",
                                    lineHeight: "1.375rem !important"
                                }}
                            >
                                Client/Support
                            </h4>
                            <div className="font-regular-16">
                                <p>HPI School of Design Thinking</p>
                                <p>Hasso Plattner Institute, Germany</p>
                            </div>
                        </div>

                        <div className="team ">
                            <h4
                                className="font-medium-16"
                                style={{
                                    fontSize: "1rem !important",
                                    fontWeight: "500 !important",
                                    lineHeight: "1.375rem !important"
                                }}
                            >
                                Team
                            </h4>
                            <div className="font-regular-16">
                                <p>Bareen Parvez</p>
                                <p>Clara Grunwald</p>
                                <p>Lars Massaneck</p>
                                <p>Leaonard Paetzmann</p>
                            </div>
                        </div>

                        <div className="myRole ">
                            <h4
                                className="font-medium-16"
                                style={{
                                    fontSize: "1rem !important",
                                    fontWeight: "500 !important",
                                    lineHeight: "1.375rem !important"
                                }}
                            >
                                My Roles
                            </h4>
                            <div className="font-regular-16">
                                <p>Reasearch</p>
                                <p>User Experience Design</p>
                                <p>User Interface Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-body">
                <div className="problem-statement">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Problem Statement</h1>
                    </aside>
                    <div className="problem-content">
                        <div>
                            <h2 className="Background  font-regular-24">Background</h2>
                            <p className="p font-regular-16">
                                The project was an introductory part of the design thinking
                                program at HPI School of Design Thinking where the ides were
                                created by a multidisciplinary team of students. Each tem member
                                was required to work largely equally on every aspect of the
                                development of the final product and learn the process involved in
                                solving a problem using design thinking through a practical
                                challenge.
                            </p>
                            <div className=" px-4 py-6 bg-[--hightlight-light-green] border-l-4 border-solid  border-[--hightlight-green] ">
                                <h2 className="design-challenge text-[--light-gray]  font-medium-16">
                                    Design Challenge
                                </h2>
                                <p className="quote font-medium-16 text-[--black]">
                                    &apos;Redesign household food waste practices in a world with
                                    different eating habits and  dietary constraints.&apos;
                                </p>
                            </div>
                        </div>
                        <img
                            className="problem-img "
                            src="/problem-img.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className="research">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Research & Findings</h1>
                    </aside>
                    <div className="research-content">
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">Understand</h2>
                                <div>
                                    <p className="p  font-regular-16">
                                        After receiving our challenge we deconstructed it and came to
                                        a shared understanding of what each component of the challenge
                                        meant to us . Based on our findings we  wrote down all of the
                                        different stakeholders and people we thought would
                                        be interesting to talk into the context of household food-
                                        waste. Having identified households of different sizes and
                                        varying cultural background, we then identified topics of
                                        interest to explore with them during the interviews.
                                        Approximately a thousand internet articles, Podcasts, YouTube
                                        videos and social  media posts later, we ended our desktop
                                        research and triangulate it down to the following facts:
                                    </p>
                                    <ul
                                        className=" font-medium-18"
                                        style={{ listStyleType: "square", marginTop: "24px" }}
                                    >
                                        <li>
                                            Over 1 ⁄3 of all food produced around the world goes to
                                            waste
                                        </li>
                                        <li>
                                            The annual value of food wasted globally estimates one
                                            trillion Dollars
                                        </li>
                                        <li>
                                            An area larger than china is used to grow food that is never
                                            eaten every day
                                        </li>
                                        <li>
                                            25 percent of the worlds fresh water supply is used to grow
                                            the food that is never eaten
                                        </li>
                                        <li>
                                            With only one quarter of the food that is wasted only in
                                            Europe we could feed all starving people in the world
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <img
                                className="problem-img "
                                src="/research-img.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">Observations</h2>
                                <div>
                                    <p className="p  font-regular-16">
                                        Once we’ve gotten an understanding that food waste is one of
                                        the many issues at the  crossroads of climate change and
                                        social injustices, we had to see it with our own eyes.
                                    </p>

                                    <ul style={{ listStyleType: "square" }} className="font-regular-16">
                                        <li className="observe-list ">
                                            <span>Observe:</span> The team watched people while shopping
                                            at a generic grocery store,  took a closer look at the
                                            amount of food that people leave on their plates eating  out
                                            and spied out a Kashmiri mother preparing the family dinner.
                                        </li>
                                        <li className="observe-list ">
                                            <span>Immerse:</span> But in order to really get an overview
                                            we had to go out into the world ourselves. Not only have we
                                            fought our way through the jungle of already  existing food
                                            waste management applications, but also have spared no cost
                                            and effort to immerse in a local zero waste shop. Also
                                            nothing has stopped us to check out a supermarket dumpster.
                                            Last but not least we have rolled up our  sleeves and
                                            assisted in an upcoming Kashmiri family feast.
                                        </li>
                                        <li className="observe-list ">
                                            <span>Interview:</span> To ultimately round off this
                                            process, the team pulled out pen and  paper and talked the
                                            various household sizes and cultural backgrounds as
                                            identified in the previous step. Among them a multi-
                                            generational family in Kashmir, Margot, who is a stay- at-
                                            home mom from Brussels, then a climate activist and mother
                                            of two and from Bonn and the one and only Annette, who  is
                                            Lars’ Mom from good old Ahrweiler and used to organizing a
                                            big household  on the countryside.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <img
                                className="problem-img "
                                src="/observe-img.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    Synthesis/ sense-making
                                </h2>
                                <div>
                                    <p className="p  font-regular-16">
                                        By methodically analyzing individual aspects of the
                                        experience, we figured out what stood out and what the most
                                        important learnings from each  of our research activities
                                        were. But even after this first filtration, we still had to
                                        narrow down the information in order to get to the root of the
                                        problem that we were trying to solve. This process is all
                                        about avoiding  potentially misleading routes and prioritizing
                                        information.
                                    </p>

                                    <p className="p1  font-regular-16">
                                        Our research was narrowed down to three key aspects :
                                    </p>
                                    <ul
                                        className="ul  font-medium-18"
                                        style={{ listStyleType: "square", marginTop: "24px" }}
                                    >
                                        <li>Food waste as an educational problem</li>
                                        <li>
                                            How long will my food last and how do I store it right?
                                        </li>
                                        <li>
                                            Paradigm change in cooking: From ‘the recipe you plan to
                                            cook’ to ‘the ingredients you like/ want to consume.’
                                        </li>
                                    </ul>
                                </div>

                                <p className="p ">
                                    This important step allowed us to proceed in our process and try
                                    and  create a Point of View. This POV describes the problem we
                                    are facing  through the eyes of a real person.
                                </p>
                                <br />

                                <h2 className="Background  font-regular-24">
                                    Who is our target audience?
                                </h2>
                                <p className="p1  font-regular-16">
                                    Our user persona/ point of view is
                                    <span className="font-medium-16"
                                    >Linash, a 29 year old woman living in Germany with a full
                                        time job.</span>
                                    She needs a way to know the shelf life & storage tips for her
                                    perishable groceries because she lacks information about food
                                    management and learning more about it is not a priority for her
                                    right now.
                                </p>
                            </div>

                            <img
                                className="problem-img "
                                src="/target-img1.png"
                                alt=""
                            />
                            <img
                                className="problem-img "
                                src="/target-img2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="ideation">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Ideation</h1>
                    </aside>
                    <div className="ideation-content">
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    How Might We’s & the ‘Hot Potato’
                                </h2>
                                <div>
                                    <p className="p  font-regular-16">
                                        In Design Thinking, stepping into the Ideation Phase is a
                                        giant leap into an entirely different work- mode. Fortunately,
                                        we had a  great set of tools that would guide us throughout
                                        the day. It all started with a skinny- dip into  the How-
                                        Might- We- Pool where we challenged ourselves to pose problem
                                        related questions  that would help us further process our POV.
                                        We then decided on the two most important  HMWs, that we would
                                        save from the troubled water:
                                    </p>
                                    <ol className=" font-medium-18">
                                        <li>
                                            How might we provide Linash with better ways to monitor her
                                            fresh produce?
                                        </li>
                                        <li>
                                            How might we transfer knowledge about food management in a
                                            fun and interesting way?
                                        </li>
                                    </ol>
                                </div>
                                <p className="p1  font-regular-16">
                                    These questions could then be used for an ultrasonic game of hot
                                    potato: Whenever the digital  hot potato hits your avatar, you
                                    have to shout out the first idea that comes to your mind  before
                                    you throw the burning hot idea-machine towards one of your
                                    teammates. After 8 Minutes of pure stress and with throats sore
                                    from laughter, we were confronted with a lot of ideas in
                                    desperate need of filtration.
                                </p>
                            </div>
                            <img
                                className="problem-img "
                                src="/ideation-img1.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    The ideation funnel
                                </h2>
                                <div>
                                    <p className="p  font-regular-16">
                                        The necessary filtration came in the shape of the &apos;Ideation
                                        funnel Funnel&apos; that would help us find the ideas with the
                                        biggest potential.
                                    </p>

                                    <p className="p  font-regular-16">
                                        3 filtration questions helped us to narrow down out choice:
                                    </p>

                                    <ul
                                        className=" font-medium-18"
                                        style={{ listStyleType: "square", marginTop: "24px" }}
                                    >
                                        <li>Is  it delightful?</li>
                                        <li>If so - is it feasible?</li>
                                        <li>And lastly - is it radical?</li>
                                    </ul>
                                </div>
                                <p className="p1  font-regular-16">
                                    Only two ideas had proven to be  strong enough to go through all
                                    three filters While the &quot;State of Food Indicator 3000&quot; was a
                                    system focused on detecting fruits and  vegetables about to go
                                    bad using chemical indicators the &quot;Effortless Food Management
                                    System 1000&quot; later finalised as ScruberJay was thought to be an
                                    ecosystem that integrates data about the food you bought and
                                    how  long it lasts. In short brainstorms we thought both ideas
                                    through, creating dashboards that would indicate the essence of
                                    our ideas, potential users, and its relevance in the real world.
                                </p>
                            </div>
                            <img
                                className="problem-img "
                                src="/ideation-img2.png"
                                alt=""
                            />
                            <img
                                className="problem-img "
                                src="/ideation-img3.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="prototype">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Prototype</h1>
                    </aside>
                    <div className="mockup-content">
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">The goal?</h2>
                                <p className="p1  font-regular-16">
                                    How can we give our users an experience so that they are really
                                    ready to be foodwaste heroes without worrying about what data
                                    they share with us and actually be happy about happy receiving
                                    the notifications?
                                </p>
                            </div>
                            <img src="/prot1.png" alt="" />
                            <span className="italic  font-regular-16"
                            >The hybrid prototyping heaven</span>
                        </div>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    Storyboard & user journal
                                </h2>
                                <p className="p1  font-regular-16">
                                    To map out how the user would interact with the application &
                                    what features should be added to ScruberJay, we started off by
                                    driving our the user journey and the corresponding storyboard
                                    for the user
                                </p>
                            </div>

                            <img className="problem-img " src="/prot2.png" alt="" />

                            <span className="italic "
                            >The corresponding storyboard explaining how the user would
                                ideally interact with ScruberJay</span>

                            <img src="/prot3.png" alt="" />
                            <span className="italic ">User journey map</span>

                            <img className="problem-img " src="/prot4.png" alt="" />
                            <span className="italic ">High fidelity prototypes</span>
                        </div>
                    </div>
                </div>

                <div className="mockups">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Application Mockups</h1>
                    </aside>
                    <div className="mockup-content">
                        <p className="p1 ">
                            As such the now called &quot;ScruberJay&quot; aims to minimize food waste
                            by gathering data on its users&apos; groceries at the supermarket to then
                            organize  them better from the shelf to the meal. With just one
                            click you get an  overview of everything you have bought and
                            ScruberJay then advises users  how to store their food and sends
                            reminders when food is about to expire. To complete the whole
                            framework, ScruberJay also helps you to conjure up small, quick
                            dishes with exactly the food you have not yet used up.
                        </p>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    Critical functions
                                </h2>
                                <div>
                                    <p className="p1 ">
                                        1. Gives information about what the user buys and the expiry
                                        dates of the food at the supermarket checkout. And provides
                                        storage guidelines for what has been bought.
                                    </p>

                                    <p className="p1 ">
                                        2. Throughout the week Scruberjay reminds the user what to use
                                        up on which day and recommends dishes built to their taste and
                                        dietary restraints with what is left in their pantry
                                    </p>
                                </div>
                            </div>
                            <img
                                className="problem-img "
                                src="/mockup-img1.png"
                                alt=""
                            />
                            <span className="italic ">Main functions of the application</span>

                            <img
                                className="problem-img "
                                src="/mockup-img2.png"
                                alt=""
                            />
                            <span className="italic "
                            >Import purchased groceries with storage tips</span>

                            <img
                                className="problem-img "
                                src="/mockup-img3.png"
                                alt=""
                            />
                            <span className="italic ">Alerts when food is expiring with recommended recipies</span>

                            <img
                                className="problem-img "
                                src="/mockup-img4.png"
                                alt=""
                            />
                            <span className="italic "
                            >Dashboard with pantry status and recipies with purchased
                                groceries
                            </span>
                        </div>
                    </div>
                </div>

                <div className="testing">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">User Testing</h1>
                    </aside>

                    <div className="testing-content">
                        <p className="p1  font-regular-16">
                            The prototype we developed was then tried out by our stakeholders
                            (aka friends and family to be honest) and put through its paces. In
                            this way, the previously made assumptions and solution  approaches
                            were checked for their correctness. Through this process, we learned
                            very important  aspects of the problem to be solved, and through
                            reflection, we were able to improve our prototype  even further.
                        </p>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    How we tested our prototype?
                                </h2>
                                <p className="p1 ">
                                    Due to the COVID crisis, and owing to the time constraints of
                                    the program, we tested our application mockup in an online
                                    meeting setup, where the testers were asked to interact with
                                    the  application and walk us through their experience of
                                    interacting with the application. In addition to it,
                                    <span className="font-medium-16">
                                        to test the &apos;food expiry alert&apos; function of the application,
                                        the testers were sent SMS alerts to their personal phone
                                        numbers
                                    </span>
                                    (we had a peek into their fridges beforehand) in the middle of
                                    the  interview. This was done to understand if they liked the
                                    functionality and how often would they be  comfortable with
                                    getting reminded of their food expiring & other recipe
                                    recommendations
                                </p>
                            </div>
                            <img
                                className="problem-img "
                                src="/testing-img1.png"
                                alt=""
                            />
                            <img
                                className="problem-img "
                                src="/testing-img2.png"
                                alt=""
                            />
                        </div>

                        <p className="p1 ">
                            Although the critical function of our prototype suited well with our
                            testers, we improvised our  application mockup and added the
                            additional features as suggested in the interviews like, being able
                            to add favourite recipies manually, a data security assurance,
                            multiple recipe recommendations &  future grocery suggestions
                        </p>

                        <img
                            className="problem-img "
                            src="/testing-img3.png"
                            alt=""
                        />
                        <span className="italic "
                        >Additional features added after user testing: data security
                            assurance; add recipes manually; grocery recommendations
                        </span>
                    </div>
                </div>

                <div className="final-thoughts">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Final Thoughts</h1>
                    </aside>
                    <div className="final-thoughts-content ">
                        <p className="p1 font-regular-16">
                            With only 8 weeks to work on the final solution, the focus was on
                            building a Minimum Viable Product and testing key functions with the
                            target audience, rather than completing a fully functional app. The
                            process reinforced the idea of &quot;failing fast and failing forward&quot;,
                            pushing for rapid iteration and returning to the drawing board when
                            necessary to rethink a new solution.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    )
}


export default CaseStudy