const DesignServices = () => {
    const designServices = [
        {
            name: "Digital Product Design",
            desc: "Focusing on UI/UX design, from shaping user interfaces to designing complete digital experiences.Whether it's a SaaS platform, mobile app, or another digital tool, the goal is to create products that are not only functional but feel intuitive and natural to use."
        },
        {
            name: "Web Design",
            desc: "Designing websites that are both visually engaging and user- friendly, with a strong emphasis on responsive design. Whether it’s a simple landing page or a full - scale site, the aim is to combine great visuals with smooth, reliable performance across devices."
        },
        {
            name: "Visual Identity",
            desc: "Building cohesive and memorable brand identities is a big part of my work.From crafting logos to putting together full visual systems—like color palettes and typography—there’s always a focus on creating something that feels authentic and stands out."
        },
    ]

    return (
        <div className="relative">
            <div className="px-12" style={{ marginTop: "130px" }}>
                <div className="flex flex-col gap-8">
                    <h1 className="text-[3.75vw] font-normal text-[--black] font-regular-54">
                        Design Services
                    </h1>
                    <p className="font-normal text-xl w-[35%] text-[--black] font-regular-18">
                        Although my schedule is limited, I&apos;m always open to exploring projects
                        that spark my interest.
                    </p>
                </div>
                <div className="design-content-container">
                    <div className="design-content">
                        {designServices.map((designService, i) => (
                            <div key={i} className="flex gap-16">
                                <h2 className="text-4xl font-medium min-w-[335px] text-[--black] font-medium-24">{designService.name}</h2>
                                <p className="text-lg font-normal text-[--black] font-regular-18">
                                    {designService.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default DesignServices