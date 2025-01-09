/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const CaseStudy = () => {
    return (
        <div className="relative">
            <Header />
            <div className="mb-16 px-12 flex gap-12 flex-row-reverse min-h-fit border justify-center items-center border-[--light-gray] pb-16">
                <div className="scruber-container flex h-full md:h-[500px] rounded-2xl overflow-hidden w-[60%]">
                    <img className="rounded-2xl h-full w-full object-cover" src="/.webp/Councelpedia/Mainpage/Find a counselor 1.webp" alt="" />
                </div>
                <div className="scrubber container-leftside">
                    <div className="scruber-about">
                        <div className="scruber-flex">
                            <h1 className="scruber-title  font-regular-90">Councelopedia</h1>
                            <div className="scruber-details">
                                <h1 className="first-line  font-medium-30">
                                    Digital Tool for Young Migrants in Germany
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="project-details">
                        <div className="timeline ">
                            <h4 className="font-medium-16" style={{
                                fontSize: "1rem !important",
                                fontWeight: "500 !important",
                                lineHeight: "1.375rem !important"
                            }}>
                                Project Timeline
                            </h4>
                            <p className="font-regular-16">December 2021- March 2022</p>
                        </div>

                        <div className="clientSupport ">
                            <h4 className="font-medium-16" style={{
                                fontSize: "1rem !important",
                                fontWeight: "500 !important",
                                lineHeight: "1.375rem !important"
                            }}>
                                Client/Support
                            </h4>
                            <div className="font-regular-16">
                                <p>Hasso Plattner Institute</p>
                                <p>Judenmigrationdientse, Germany</p>
                            </div>
                        </div>

                        <div className="team ">
                            <h4 className="font-medium-16" style={{
                                fontSize: "1rem !important",
                                fontWeight: "500 !important",
                                lineHeight: "1.375rem !important"
                            }}>
                                Team
                            </h4>
                            <div className="font-regular-16">
                                Bareen Parvez

                                <p>Bareen Parvez</p>
                                <p>Chris Bower</p>
                                <p>Deniz Calhan</p>
                                <p>Leon Bien</p>
                                <p>Marie Janda</p>
                            </div>
                        </div>

                        <div className="myRole ">
                            <h4 className="font-medium-16" style={{
                                fontSize: "1rem !important",
                                fontWeight: "500 !important",
                                lineHeight: "1.375rem !important"
                            }}>
                                My Roles
                            </h4>
                            <div className="font-regular-16">
                                <p>Reasearch</p>
                                <p>System Design</p>
                                <p>UI/UX Design</p>
                                <p>Illustrations</p>
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
                            <p className="p  font-regular-16">
                                This project used a design thinking approach to address challenges in youth migration counseling services in Germany. A collaborative, multidisciplinary team worked through research, empathy-building, ideation, prototyping, and testing to develop a user-centered solution. I contributed to all phases of the project, including interviewing JMD clients and employees, conducting research, and identifying key pain points. Leveraging my expertise in visual design and UI/UX, I focused on designing the digital tool, Councelopedia, its visual system, and illustrating storyboards to effectively communicate and refine our ideas.
                            </p>
                            <div className="info-card">
                                <h2 className="design-challenge  font-medium-16">
                                    Design Challenge
                                </h2>
                                <p className="quote  font-medium-16">
                                    &quot;Design a digital tool for a youth migration service counseling so that young people & employees seeking
                                    to support them
                                    can digitally access them in the context of language barriers, limited resources & analog-centered
                                    workspaces&quot;
                                </p>
                            </div>
                        </div>
                        <img className="problem-img " src="/.webp/Councelpedia/Case study/process.png" alt="" />
                    </div>
                </div>

                <div className="research">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Research & Findings</h1>
                    </aside>
                    <div className="research-content">
                        <div>
                            <div className="reasearch-first-div">
                                <div>
                                    <p className="p  font-regular-16">
                                        As Eric von Hippel noted, 70% to 80% of new product
                                        development that fails does so not for lack of advanced
                                        technology, but because of a failure to understand users’
                                        needs.
                                    </p>
                                    <p className="p  font-regular-16">
                                        This highlights the necessity of thorough research into JMD&apos;s
                                        challenges and users
                                    </p>
                                </div>
                                <h2 className="Background  font-regular-24">Methodology</h2>
                                <ul style={{ listStyleType: "square" }} className="font-regular-16">
                                    <li className="observe-list ">
                                        <span>Keyword Analysis:</span> In approaching the design
                                        challenge, we conducted a keyword analysis to clarify the core
                                        terms and constraints tied to the problem. Key terms such as
                                        &quot;youth migration service&quot;, &quot;language barriers&quot;, &quot;limited
                                        resources,&quot; and &quot;analog-centered workspaces&quot; were explored to
                                        understand the complexities around each factor. This helped in
                                        identifying critical elements to prioritize, such as improving
                                        communication channels, making the tool user-friendly across
                                        languages, and designing for a seamless experience despite
                                        resource constraints.
                                    </li>
                                </ul>
                            </div>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/1.webp" alt="" />
                            <ul style={{ listStyleType: "square" }} className="font-regular-16">
                                <li className="observe-list ">
                                    <span>Desktop Research:</span> Conducted initial internet
                                    searches and reviewed JMD&apos;s provided materials to gain a broad
                                    understanding of youth migration and JMD&apos;s operations.
                                </li>
                                <li className="observe-list ">
                                    <span>Context & Stakeholder Mapping:</span> We identified and
                                    mapped the primary stakeholders, including young migrants,
                                    counselors, administrative staff, and external partners involved
                                    in youth migration support services. This mapping allowed us to
                                    explore each group&apos;s needs, expectations, and interactions with
                                    one another, providing a holistic view of the current context.
                                    By understanding the operational and communicational gaps in the
                                    existing setup, we could more effectively tailor our solution to
                                    the realities faced by JMD and its diverse user base.
                                </li>
                            </ul>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/2.webp" alt="" />
                            <ul style={{ listStyleType: "square" }} className="font-regular-16">
                                <li className="observe-list ">
                                    <span>Observational Studies:</span> Conducted two in-person
                                    observations of JMD&apos;s offices to understand internal workflows
                                    and dynamics.
                                </li>
                            </ul>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/3.webp" alt="" />
                            <ul style={{ listStyleType: "square" }} className="font-regular-16">
                                <li className="observe-list ">
                                    <span>User Immersion:</span> The team participated in five
                                    immersive sessions, performing tasks as users to understand
                                    their experiences better. This included testing JMD’s services
                                    via phone and internet, testing their website and simulating a
                                    relocation process.
                                </li>
                            </ul>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/4.webp" alt="" />
                            <ul style={{ listStyleType: "square" }} className="font-regular-16">
                                <li className="observe-list ">
                                    <span>Interviews:</span> Conducted eight semi-structured
                                    interviews with JMD employees and clients to gather detailed
                                    insights.
                                </li>
                            </ul>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/5.webp" alt="" />
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/6.webp" alt="" />
                        </div>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">Main findings</h2>
                                <div>
                                    <p className="p  font-regular-16">
                                        JMD provided extensive data to help us understand client and
                                        employee profiles. Key insights included:
                                    </p>

                                    <ul style={{ listStyleType: "square" }} className="font-regular-16">
                                        <li className="observe-list ">
                                            <span>Demographic composition:</span> The majority of JMD&apos;s
                                            clients are from Syria (36%) and Afghanistan (11%),
                                            highlighting a significant demographic focus.
                                        </li>
                                        <li className="observe-list ">
                                            <span>Diverse client profiles:</span> Clients have varied
                                            backgrounds, and many requests are highly personal, which
                                            limits the potential for standardization and automation of
                                            services.
                                        </li>
                                        <li className="observe-list ">
                                            <span>Language barriers:</span> A major challenge is the
                                            language barrier; clients who do not speak German or English
                                            struggle to find suitable advisors.
                                        </li>
                                        <li className="observe-list ">
                                            <span>Access limitations:</span> Clients may be unable to
                                            access local services due to language constraints, forcing
                                            them to rely on JMD’s digital counseling options or
                                            necessitating the learning of German first.
                                        </li>
                                        <li className="observe-list ">
                                            <span>Translation issues:</span> The translations on JMD’s
                                            website are only partially functional, leading to further
                                            communication challenges.
                                        </li>
                                        <li className="observe-list ">
                                            <span>Ineffective appointment system:</span> Both clients
                                            and employees express dissatisfaction with the current
                                            appointment system, which often results in lengthy wait
                                            times for urgent appointments.
                                        </li>
                                        <li className="observe-list ">
                                            <span>Value of face-to-face interaction:</span> Clients and
                                            employees emphasize the importance of in-person meetings for
                                            establishing trusting relationships, viewing them as more
                                            effective than digital alternatives.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    Synthesis/ sense-making
                                </h2>
                                <div>
                                    <p className="p  font-regular-16">
                                        During the research phase, we were inspired to discover
                                        various pain points within different areas of JMD&apos;s current
                                        structure and how it functions. Making a sense of these
                                        observations helped us further in identifying the key problem
                                        areas within the organisation & move forward with the problem
                                        that needed an immediate attention to address the concerns
                                        surrounding digital counseling
                                    </p>
                                </div>
                                <div>
                                    <p className="p  font-regular-16">
                                        Insights in summary & their interpretations:
                                    </p>
                                </div>
                            </div>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/7.webp" alt="" />
                        </div>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    Narrowing down solution focus areas
                                </h2>
                                <div>
                                    <p className="p  font-regular-16">
                                        To narrow down the focus areas from our extensive research, we employed a rapid voting method within our
                                        team. Each
                                        member identified and prioritized issues based on their relevance to the design challenge, alignment
                                        with the scope of
                                        digital counseling, and feasibility within our project’s timeline and resources. We reflected on the
                                        data gathered,
                                        considering what was most pressing for both clients and employees and what could realistically be
                                        addressed through a
                                        digital solution.
                                        This approach ensured that our focus was both user-centered and actionable, helping us concentrate on
                                        areas with the
                                        highest potential impact while staying aligned with the overarching goal of enhancing accessibility and
                                        workflow
                                        efficiency.
                                        With this process complete, we identified three key focus areas:

                                    </p>
                                    <ul className="ul  font-medium-18" style={{
                                        listStyleType: "none",
                                        marginTop: "24px",
                                        paddingInline: "0px"
                                    }}>
                                        <li>
                                            <p>First Contact Improvement:</p>
                                            <p>
                                                Facilitating easier initial contact and maintaining
                                                communication between clients and JMD emerged as a key
                                                area for improvement. This includes refining the existing
                                                counseling methods in both online and offline contexts to
                                                avoid making them feel like additional burdens.
                                            </p>
                                        </li>
                                        <li style={{ marginTop: "30px" }}>
                                            <p>Employee Workflow:</p>
                                            <p>
                                                While improvements are needed to enhance employee
                                                workflows and better integrate digital tools, client
                                                interviews revealed a high level of satisfaction with
                                                JMD&apos;s services. Clients appreciated the individualized
                                                assistance provided by their counselors during their
                                                migration and integration processes in Germany.
                                            </p>
                                        </li>
                                        <li style={{ marginTop: "30px" }}>
                                            <p>Service Quality vs. Accessibility:</p>
                                            <p>
                                                The findings indicated that the quality of counseling
                                                services and methods were not the primary issues; instead,
                                                the focus should be on increasing the visibility and
                                                accessibility of these services for potential clients.
                                                Ensuring that enhanced accessibility does not overwhelm
                                                employees is crucial.
                                            </p>
                                        </li>
                                        <li style={{ marginTop: "30px" }}>
                                            <p>
                                                Based on these insights, we focused on designing a
                                                solution that prioritizes the client&apos;s perspective, making
                                                the initial contact with JMD more accessible and
                                                streamlined, while also visualizing how the solution might
                                                function from the employees’ end.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    After reflecting on our findings, we identified key problem
                                    areas that require immediate attention for potential clients of
                                    JMD:
                                </p>
                                <p className="p ">
                                    This important step allowed us to proceed in our process and try
                                    and  create a Point of View. This POV describes the problem we
                                    are facing  through the eyes of a real person.
                                </p>

                                <img className="problem-img " src="/.webp/Councelpedia/Case Study/8.webp" alt="" />

                                <h2 className="Background  font-regular-24">
                                    Who are we designing a solution for?
                                </h2>
                                <p className="p1  font-regular-16">
                                    To frame our insights in a user-centered manner, we developed
                                    two point of views, Rashed & Stephanie, to represent the typical
                                    user group we aim to design for, i.e JMD’s client & the
                                    employee.
                                </p>
                            </div>
                            <p className="p1  font-regular-16">Meet Rashed & Stephanie:</p>

                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/9.webp" alt="" />
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/10.webp" alt="" />
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    Narrowing down solution focus areas
                                </h2>
                                <div>
                                    <ul className="ul  font-medium-18" style={{
                                        listStyleType: "none",
                                        marginTop: "24px",
                                        paddingInline: "0px"
                                    }}>
                                        <li>
                                            <p>Demographic Representation:</p>
                                            <p>
                                                While the majority of JMD&apos;s clients are from Syria or
                                                neighboring countries and often have some knowledge of
                                                German, we decided to design for a persona with a
                                                different and more challenging background
                                            </p>
                                        </li>
                                        <li style={{ marginTop: "30px" }}>
                                            <p>Rationale?</p>
                                            <p>
                                                Focusing on a more complex case, like Rashed&apos;s, addresses
                                                the accessibility of JMD&apos;s services for clients who face
                                                significant barriers in their migration journey. By
                                                solving for Rashed, we aim to create a solution that can
                                                also benefit typical clients who experience fewer
                                                challenges.
                                            </p>
                                        </li>
                                        <li style={{ marginTop: "30px" }}>
                                            <p>Broader Impact?</p>
                                            <p>
                                                This approach may enhance the diversity and reach of JMD&apos;s
                                                client base, enabling the organization to assist a wider
                                                range of migrants in their integration process.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <p className="p ">
                                    This important step allowed us to proceed in our process and try
                                    and  create a Point of View. This POV describes the problem we
                                    are facing  through the eyes of a real person.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ideation">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Ideation</h1>
                    </aside>
                    <div className="ideation-content">
                        <div>
                            <p className="p  font-regular-16">
                                The ideation phase in our Design Thinking process aimed to define
                                the problem clearly, brainstorm potential solutions, and select a
                                solution for further development. This phase builds on the user
                                profile of Rashed, insights from previous steps and feedback from
                                the mamagement of the JMD to fill any gaps in our understanding of
                                the functioning of the organisation.
                            </p>
                            <div className="reasearch-first-div">
                                <div>
                                    <h2 className="Background  font-regular-24">
                                        1. Problem Specification
                                    </h2>
                                    <p className="p  font-regular-16">
                                        In defining our focus, we considered the main challenges faced
                                        by clients like Rashed. Our process used &quot;How might we...&quot;
                                        (HMW) questions to frame each problem.
                                    </p>
                                </div>
                            </div>

                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/11.webp" alt="" />
                        </div>
                        <div>
                            <div className="reasearch-first-div">
                                <div>
                                    <p className="p  font-regular-16">
                                        After categorizing various HMW questions by their thematic
                                        challenges, we selected:
                                    </p>
                                    <div className="info-card">
                                        <p className="quote  font-medium-16">
                                            “How might we help Rashed to get and stay in touch with
                                            JMD?”
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="Background  font-regular-24">
                                    2. Collecting Ideas
                                </h2>
                                <p className="p  font-regular-16">
                                    Various brainstorming techniques were used, including silent
                                    brainstorming, hot potato brainstorming, and idea shopping.
                                    These techniques fostered a free-flowing, unjudged idea
                                    collection. Ideas were later refined and categorized.
                                </p>
                                <p className="p  font-regular-16">Brainstorming methods</p>
                                <ul style={{ listStyleType: "none", paddingInline: "0px" }} className="font-regular-16">
                                    <li className="observe-list ">
                                        <span>Silent Brainstorming:</span> Encouraged independent idea generation.
                                    </li>
                                    <li className="observe-list ">
                                        <span>Hot Potato Brainstorming:</span> Added pressure to generate creative ideas quickly.
                                    </li>
                                    <li className="observe-list ">
                                        <span>Idea Shopping:</span> Inspired by reviewing ideas from other projects.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/12.webp" alt="" />

                        <div>
                            <div>


                                <p className="p  font-regular-16">Brainstormed Ideas</p>
                                <p className="p  font-regular-16">The initial list was categorized into various themes. Noteworthy ideas
                                    included:</p>
                            </div>
                        </div>
                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/13.webp" alt="" />
                        <div>
                            <div>
                                <h2 className="Background  font-regular-24">
                                    3. Idea Selection
                                </h2>
                                <p className="p  font-regular-16">
                                    The idea funnel method was used to assess ideas based on value, feasibility, and radicality. Ideas that
                                    did not pass each criterion were gradually filtered out.
                                </p>
                                <p className="p  font-regular-16">3 filtration questions helped us to narrow down out choice:</p>
                                <ul style={{ listStyleType: "circle" }} className="font-regular-16">
                                    <li className="observe-list ">
                                        <span>Is it delightful? </span>
                                    </li>
                                    <li className="observe-list ">
                                        <span>If so - is it feasible? </span>
                                    </li>
                                    <li className="observe-list ">
                                        <span>And lastly - is it radical for JMD? </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/14.webp" alt="" />
                        <div className="reasearch-first-div">
                            <p>Selected Final Ideas</p>
                            <div>

                                <p>Rebrand JMD and Run a Marketing Campaign</p>
                                <ul style={{ listStyle: "none", padding: "0px" }}>

                                    <li>✅ Value: Centralizing JMD’s services allows clients to access the organization as a unified entity,
                                        enabling them to connect with counselors by language, availability, or expertise.</li>
                                    <li>✅ Feasibility: Marketing campaigns are a standard practice, making this approach realistic.</li>
                                    <li>✅ Radicality: Improving JMD&apos;s public image through distinct branding could significantly enhance
                                        client recognition and engagement.</li>
                                </ul>
                            </div>
                            <div>

                                <p>Make JMD Work as One Entity</p>
                                <ul style={{ listStyle: "none", padding: "0px" }}>
                                    <li>✅ Value: Centralizing JMD’s services allows clients to access the organization as a unified entity,
                                        enabling them to connect with counselors by language, availability, or expertise.</li>
                                    <li>✅ Feasibility: Organizational silo-breaking is well-researched and manageable, making this feasible
                                        for JMD.</li>
                                    <li>✅ Radicality: Shifting from isolated offices to a unified approach would represent a fundamental
                                        change in JMD’s operational culture, transforming client interactions and internal collaboration.</li>
                                </ul>
                            </div>
                            <p>Final Decision:</p>

                        </div>
                        <div className="info-card">
                            <p className="quote  font-medium-16">
                                Making JMD work as one Entity: Unifying JMD’s offices and their digital presence for a seamless user
                                experience.
                            </p>
                        </div>
                        <p>
                            We chose to pursue the idea of making JMD work as a unified entity. This was prioritized over rebranding
                            because centralizing JMD’s functions could address clients’ main issues by improving counseling access,
                            multilingual support, and digital service consistency across locations.
                        </p>
                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/image1.png" alt="" />
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
                                <div className="info-card">
                                    <p className="quote  font-medium-16">
                                        How can we empower JMD clients, like Rashed, with a streamlined digital experience that allows them to
                                        connect with counselors effortlessly, overcoming language and location barriers, and providing them with
                                        a personalized, accessible support network? </p>
                                </div>
                                <p className="p1  font-regular-16">
                                    Making JMD Work as One Entity restructures JMD to operate as a unified organization, enhancing
                                    accessibility for clients like Rashed. Key changes include
                                </p>

                                <div>
                                    <p>Centralized Client Contact</p>
                                    <p className="p1  font-regular-16">
                                        A digital platform allows clients to connect with any JMD counselor nationwide, matching them based on
                                        language, expertise, or availability. </p>
                                </div>
                                <div>
                                    <p>Unified Digital Interface </p>
                                    <p className="p1  font-regular-16">
                                        A single dashboard for clients to manage appointments, access resources, and maintain contact with
                                        counselors.
                                    </p>
                                </div>
                                <div>
                                    <p>Pooled Counselor Resources</p>
                                    <p className="p1  font-regular-16">
                                        Incoming requests are distributed across the counselor network, ensuring prompt, relevant support
                                        regardless of location.
                                    </p>
                                </div>
                                <div>
                                    <p>Enhanced Language Accessibility</p>
                                    <p className="p1  font-regular-16">
                                        Clients can select counselors by language, reducing language barriers, and can also access the website
                                        in the language they understand.
                                    </p>
                                </div>
                                <img className="problem-img " src="/.webp/Councelpedia/Case Study/15.webp" alt="" />
                            </div>

                        </div>
                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    Storyboard & user journal
                                </h2>
                                <p className="p1  font-regular-16">
                                    The storyboard outlines Rashed’s journey using the JMD tool, covering his first contact to his ongoing
                                    engagement.
                                    The user journey map illustrates the step-by-step interaction of the client, Rashed, with the JMD digital
                                    tool, alongside the blueprint for the employee&apos;s experience. The project’s current scope focuses on
                                    enhancing Rashed’s client experience, but the employee journey has been mapped as a future development
                                    area for seamless integration.
                                </p>
                            </div>

                            <p className="p1  font-regular-16">
                                Client
                            </p>

                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/image.png" alt="" />

                            <span className="italic ">The corresponding storyboard explaining how the user would
                                ideally interact with ScruberJay</span>

                            <img src="/.webp/Councelpedia/Case Study/16.webp" alt="" />
                            <span className="italic ">User journey map</span>
                            <div>
                                <p className="p1  font-regular-16">
                                    Employee
                                </p>
                                <p>
                                    Although the scope of our solution was limited to designing keeping in view the needs and problems if the
                                    client of JMD i.e., the migrant, we have also imagined how the idea would roughly look like on the
                                    employee’s end for their internal product team to implement the solution in their existing digtal
                                    counceling interface for employees i.e JMD4U
                                </p>
                            </div>

                            <img src="/.webp/Councelpedia/Case Study/17.webp" alt="" />
                            <span className="italic ">Employee’s journey map</span>

                            <div>
                                <h2 className="Background  font-regular-24">
                                    First prototype: Critical functions
                                </h2>

                                <ol className="font-regular-16">
                                    <li className="observe-list ">
                                        <h4>Counselor matching and multi-language support</h4>
                                        <p>The core function allows users to search and be matched with counselors based on language,
                                            availability, and expertise. This feature minimizes barriers, ensuring users quickly find support
                                            tailored to their unique needs, and providing personalized notifications for ongoing communication.
                                        </p>
                                    </li>
                                    <li className="observe-list ">
                                        <h4>Centralized user dashboard</h4>
                                        <p>The dashboard offers users a personal space to track appointments, access resources, and view
                                            messages from JMD counselors. This dashboard becomes the user&apos;s central hub, keeping all resources and
                                            communication accessible in one place and enhancing the continuity of their integration journey.</p>
                                    </li>

                                </ol>
                            </div>
                            <img src="/.webp/Councelpedia/Case Study/18.webp" alt="" />
                            <span className="italic ">First prototype with critical functions of the tool</span>

                        </div>
                    </div>
                </div>

                <div className="mockups">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">User testing & iterations</h1>
                    </aside>
                    <div className="mockup-content">
                        <p className="p1 ">
                            After developing the first prototype, we conducted testing to evaluate whether our solution effectively
                            addressed the primary problem: enabling clients to seamlessly connect with JMD counselors. Feedback from
                            external testers helped validate assumptions, gain fresh insights, and iterate on the prototype.
                        </p>
                        <h4>Who did we test with?</h4>
                        <p>We tested with JMD’s existing clients, employees, HPI Basic Track students and coaches, and individuals with
                            migration backgrounds. Testers reviewed the prototype through an online Figma mockup and shared impressions
                            and improvement suggestions.</p>
                        <h4>Testing methods</h4>
                        <ul>
                            <li>First click tests</li>
                            <li>Walkthrough sessions with stakeholders</li>
                        </ul>

                        <div>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    1st Testing Round
                                </h2>
                                <div>
                                    <ul style={{ listStyle: "none", padding: "0px" }}>
                                        <p>Feedback summary</p>
                                        <li>❓Critical function unclear to some users.</li>
                                        <li>❓Some users interested in connecting with other migrants & Germans</li>
                                        <li>❓No clear heirarchy between contact & services</li>
                                    </ul>
                                </div>
                            </div>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/19.webp" alt="" />
                            <span className="italic ">Feedback from 1st testing round</span>
                            <p>1st iterations</p>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/20.webp" alt="" />
                            <span className="italic ">Iterations following 1st testing round</span>

                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    JMD4You
                                </h2>

                                <p>During the testing and iteration phase, we digged deeper into JMD’s existing platform, JMD4You, for
                                    digital counseling. Through calls with JMD’s internal team, we learned that JMD Intern (Employee facing
                                    interface) is often seen as an added task by employees due to its complexity and limited
                                    user-friendliness, despite annual training. As most employees focus on in-office appointments, the digital
                                    tool is rarely utilized, especially since language barriers require additional time with translation
                                    tools, slowing down operations. Furthermore, we found that the platform’s design catered primarily to the
                                    social work aspect, focusing on counselor tasks rather than the client’s needs.</p>

                                <div className="info-card">

                                    <p className="quote  font-medium-16">
                                        JMD Intern catered primarily to the social work aspect, focusing on counselor tasks rather than the
                                        client’s needs.
                                    </p>
                                </div>

                                <p>These insights informed our approach, leading us to incorporate JMD4U’s relevant functions, combining
                                    features from both the client (JMD4You) and employee (JMD Intern) perspectives. This formed the basis for
                                    creating a more client-centered tool that addressed both the accessibility of language and the streamlined
                                    distribution of client requests. For instance, the client dashboard and language support were core
                                    features that became central to our prototype, ensuring client needs were prioritized but not at the
                                    expense of the counselors.</p>
                            </div>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/21.webp" alt="" />
                            <span className="italic ">Insights fromHMD&apos;s existing digitals tools&apos; trials for clients & employees</span>

                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    2nd Testing Round
                                </h2>
                                <div>
                                    <ul style={{ listStyle: "none", padding: "0px" }}>
                                        <p>Feedback summary</p>
                                        <li>❓Desire for a streamlined dashboard and fewer navigation steps</li>
                                        <li>❓Some questioned the purpose of a JMD networking forum, preferring established social platforms.
                                        </li>
                                        <li>❓Concerns about document security within chat.</li>
                                        <li>❓Introductory text felt lengthy for many users.</li>

                                    </ul>
                                </div>
                            </div>

                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/22.webp" alt="" />
                            <span className="italic ">Feedback from 2nd testing round</span>
                            <p>2nd iterations</p>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/23.webp" alt="" />
                            <span className="italic ">
                                Iterations following 2nd testing round
                            </span>
                            <div className="reasearch-first-div">
                                <h2 className="Background  font-regular-24">
                                    Wireframes
                                </h2>

                                <p>The final high-fidelity prototypes were designed to integrate insights from our testing, including the
                                    challenges with JMD4U. Our proposed solution merges useful elements of JMD4U (client’s end) and JMD Intern
                                    (employee’s end) into one comprehensive platform. To present our results and validate the potential and
                                    feasibility of implementing this solution, we also developed a showreel to pitch the concept to JMD’s
                                    management during our interim presentation. This helped us gather critical feedback, especially on the
                                    scope of restructuring JMD’s resource pooling.</p>


                            </div>

                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/24.webp" alt="" />
                            <span className="italic ">Main functions of the application</span>

                            <p>Feedback from JMD’s leadership and stakeholders confirmed the project&apos;s high value and potential, as shown
                                through the high-fidelity prototypes leading to its integration into JMD’s service strategy. Once my program
                                term concluded, we handed over the project and PRD to JMD’s internal product team to further develop the
                                foundation we established.</p>
                            <p>In addition to the user-oriented design, we developed a detailed Implementation Guide, outlining the
                                solution’s use cases and a step-by-step plan for integration. Though the prototypes primarily focused on the
                                user side, we included a blueprint in the PRD for how the interface should appear from the employee’s
                                perspective, supporting JMD’s future developments.</p>
                            <img className="problem-img " src="/.webp/Councelpedia/Case Study/24.webp" alt="" />
                            <span className="italic ">Final presentation Video</span>
                        </div>
                    </div>
                </div>

                <div className="testing">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Visual design system</h1>
                    </aside>

                    <div className="testing-content">
                        <p className="p1  font-regular-16">
                            In reworking the UI and UX for Councelopedia, I aimed to create a scalable visual design system due to the
                            anticipated expansion of the platform’s functionality. Originally, the prototype was based solely on the
                            specific features developed during our initial project phase, which focused on user-facing needs. However,
                            with the expansion of new counselors being onboarded across the country—a high-friction, operations-intensive
                            activity—the design needed to evolve.
                        </p>
                        <p className="p1  font-regular-16">
                            A scalable design system became essential for JMD’s internal product team to maintain consistency while
                            translating the user-facing prototype into a fully cohesive employee interface. This updated design approach
                            would simplify onboarding for new counselors, reduce operational friction, and ensure a unified experience
                            across all touchpoints on the platform. </p>
                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/25.webp" alt="" />

                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/26.webp" alt="" />

                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/27.webp" alt="" />

                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/28.webp" alt="" />

                        <img className="problem-img " src="/.webp/Councelpedia/Case Study/29.webp" alt="" />
                    </div>
                </div>

                <div className="final-thoughts">
                    <aside className="problemAsid ">
                        <h1 className="asideTitle font-medium-30">Learnings & reflections</h1>
                    </aside>
                    <div className="final-thoughts-content ">
                        <p>
                            Our journey on this project was shaped by key enablers, challenges, risks, and lessons that left us with
                            invaluable
                            insights: <br /> <br />

                            <b>What moved us forward</b> <br /> <br />
                            Trusting the process and our coaches&apos; guidance helped us navigate through uncertainties. We
                            embraced letting go of unworkable ideas, staying prepared with clear agendas, and leveraging critical
                            questioning within the team to refine our approach. <br /> <br />

                            <b>What held us back</b> <br /> <br />
                            At times, over-discussing ideas, stress over deadlines, and distractions
                            hindered progress.
                            We
                            occasionally strayed off course, which underscored the importance of focus and balance. <br /> <br />

                            <b>Potential risks</b> <br /> <br />
                            Risks like misalignment, reluctance to let go of beloved ideas, losing focus
                            on tasks, and hesitations in communication reminded us of the value of adaptability and open dialogue. <br />
                            <br />

                            <b>Lessons learned</b> <br /> <br />Regular team check-ins, energy level assessments, clear role assignments, and
                            mindful
                            communication were
                            key preventive measures that emerged as strategies to maintain alignment and efficiency.<br /> <br />

                            <b>What made it memorable</b><br /> <br />Humour and camaraderie were the heart of this project. From sharing
                            memes and Denis&apos;
                            kindness to
                            Nadine&apos;s optimism and shared laughter during a rehearsal gone wrong, these moments reminded us to enjoy the
                            journey
                            alongside the work. <br /> <br />
                        </p>

                        <img src="/.webp/Councelpedia/Case Study/l&r.svg" alt="" />

                    </div>
                </div>
                <Footer />


            </div>
            <img src="/footerGrid.svg" alt="" className="absolute -bottom-5 -z-30 w-full object-cover" />

        </div>
    )
}


export default CaseStudy