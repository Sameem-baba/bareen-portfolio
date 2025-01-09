/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import PrevNextContainer from "./PrevNextContainer"

type MainPageProps = {
    topImage: string,
    title: string,
    subHeading: string,
    timeline: string,
    clientList: string[],
    team: string[],
    roles?: string[],
    scopesOfProject?: string[]
    functions?: any,
    overview: any,
    impact?: any,
    studyLink: { label: string, url: string, type: string }

}
const MainPage = ({ topImage, title, subHeading, timeline, clientList, team, roles, scopesOfProject, functions, impact, overview, studyLink }: MainPageProps) => {
    return (
        <>
            <div className="pt-8 mb-16 px-12 flex gap-12 flex-row-reverse min-h-fit border border-[--light-gray] pb-16">
                <div className="scruber-container flex rounded-2xl overflow-hidden w-[68%]">
                    <img className="rounded-2xl" src={topImage} id="" />
                </div>
                <div className="scrubber container-leftside">
                    <div className="scruber-about">
                        <div className="scruber-flex">
                            <h1 className="scruber-title  font-regular-90">{title}</h1>
                            <div className="scruber-details">
                                <h1 className="first-line  font-medium-30">{subHeading}</h1>
                            </div>
                        </div>

                        {studyLink && (
                            <Link href={studyLink.url} target="_blank" rel="noopener noreferrer" className="case-study">
                                <img src="/case-study.svg" alt="" />
                                <span className="font-medium-18">{studyLink.label}</span>
                            </Link>
                        )}

                    </div>

                    <div className="project-details">
                        <div className="timeline">
                            <h4
                                className="font-medium-16"
                                style={{
                                    fontSize: "1rem !important",
                                    fontWeight: " 500 !important",
                                    lineHeight: "1.375rem !important"
                                }}

                            >
                                Project Timeline
                            </h4>
                            <p className="font-regular-16">{timeline}</p>
                        </div>

                        <div className="clientSupport">
                            <h4
                                className="font-medium-16"
                                style={{
                                    fontSize: "1rem !important",
                                    fontWeight: " 500 !important",
                                    lineHeight: "1.375rem !important"
                                }}
                            >
                                Client/Support
                            </h4>
                            <div className="client-list font-regular-16">{clientList.map((client: any, i: number) => (
                                <p style={{
                                    fontSize: "1rem !important",
                                    fontWeight: " 500 !important",
                                    lineHeight: "1.375rem !important"
                                }}
                                    key={i}
                                >{client}</p>
                            ))}</div>
                        </div>

                        <div className="team">
                            <h4
                                className="font-medium-16"
                                style={{
                                    fontSize: "1rem !important",
                                    fontWeight: " 500 !important",
                                    lineHeight: "1.375rem !important"
                                }}
                            >
                                Team
                            </h4>
                            <div
                                className="team-list font-regular-16"
                                style={{
                                    fontSize: "1rem !important",
                                    fontWeight: "400 !important",
                                    lineHeight: "1.375rem !important"
                                }}
                            >{team.map((member: any, i: number) => (
                                <p key={i} style={{
                                    fontSize: "1rem !important",
                                    fontWeight: "400 !important",
                                    lineHeight: "1.375rem !important"
                                }}>
                                    {member}
                                </p>
                            ))}</div>
                        </div>


                        {roles && (
                            <div className="myRole">
                                <h4
                                    className="font-medium-16"
                                    style={{
                                        fontSize: "1rem !important",
                                        fontWeight: " 500 !important",
                                        lineHeight: "1.375rem !important"
                                    }}
                                >
                                    My Roles
                                </h4>
                                <div className="role-list font-regular-16">
                                    {roles.map((role: any, i: number) => (
                                        <p key={i} style={{
                                            fontSize: "1rem !important",
                                            fontWeight: "400 !important",
                                            lineHeight: "1.375rem !important"
                                        }}>
                                            {role}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {scopesOfProject && (
                            <div className="myRole">
                                <h4
                                    className="font-medium-16"
                                    style={{
                                        fontSize: "1rem !important",
                                        fontWeight: " 500 !important",
                                        lineHeight: "1.375rem !important"
                                    }}
                                >
                                    Scope Of Project
                                </h4>
                                <div className="role-list font-regular-16">
                                    {scopesOfProject.map((role: any, i: number) => (
                                        <p key={i} style={{
                                            fontSize: "1rem !important",
                                            fontWeight: "400 !important",
                                            lineHeight: "1.375rem !important"
                                        }}>
                                            {role}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="project-body">
                <div className="overview">
                    <aside className="overviewAside">
                        <h1 className="overview-title font-medium-30">Overview</h1>
                    </aside>
                    <div className="overview-content">
                        <p className="font-regular-16">{overview.text}</p>
                        {overview.images.map((image: any, i: number) => (
                            <img className="overimg1" src={image} key={i} />
                        ))}
                    </div>
                </div>

                {functions && (
                    <div className="main-functions">
                        <aside className="functionAside">
                            <h1 className="functions-title font-medium-30">Main Functions</h1>
                        </aside>
                        <div className="functions-content">
                            {functions.map((func: any, i: number) => (
                                <div key={i} className="function-container">
                                    <h2 className="font-regular-24">{func.title}</h2>
                                    <p className="font-regular-16">{func.description}</p>
                                    {func.image?.map((imgSrc: any, index: number) =>
                                        <img src={imgSrc} alt={func.title} key={index} className="func-img" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {impact && (
                    <div className="impact">
                        <aside className="impact">
                            <h1 className="impact-title font-medium-30">Impact</h1>
                        </aside>
                        <div className="impact-content">
                            <div className="impact-sections">
                                {/* <!-- Impact sections will be dynamically inserted here --> */}
                                {impact.sections.map((section: any, i: number) => (
                                    <div key={i} className="impact-section">
                                        {section.heading && (<h2 className="font-medium-18">{section.heading}</h2>)}
                                        <p className="font-regular-16">{section.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <PrevNextContainer />
            </div>
        </>
    )
}
export default MainPage