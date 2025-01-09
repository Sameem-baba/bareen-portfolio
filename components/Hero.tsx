/* eslint-disable @next/next/no-img-element */
// import Image from "next/image"

const Hero = () => {
    return (
        <div className="flex justify-center md:mt-20 max-w-[90rem] mx-auto sm:h-screen h-fit">
            <div className="flex  justify-center mx-auto w-full h-full">
                <img src="/spotlight.png" className="object-contain z-10 absolute h-screen -mt-10 max-h-[800px] -top-10 right-0" alt="" />
                <div className="flex flex-col justify-between h-[70vh] z-20 w-full">
                    <div className="text-4xl z-50 font-normal text-[--black] my-0">
                        <div className="z-50">
                            <h1 className="text-[7.55vw] font-normal text-[--black]">Hi, I am <span className="text-[--hightlight-yello] font-medium">Bareen</span></h1>
                        </div>
                    </div>
                    <div className="about-container">
                        <div className="flex">
                            <div className="text-[1.85vw] font-normal text-[--black] md:w-[645px] font-regular-24" style={{ lineHeight: "43px !important" }}>
                                <span className="font-regular-24 w-fit h-fit p-2 relative mr-5" style={{ fontWeight: "500 !important" }}>
                                    <img src="/group-mouse.svg" className="absolute items-center top-[-5px] object-contain w-full min-w-[200px] z-20 pointer-events-none" alt="" />
                                    A multidisciplinary designer
                                </span>
                                working at the intersection of visual arts and human-computer
                                interaction.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero