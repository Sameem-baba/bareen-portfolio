import Image from "next/image"

const Hero = () => {
    return (
        <div className="flex  justify-between items-center mt-10 sm:h-screen h-fit">
            <div className="flex max-w-7xl justify-center items-stretch mx-auto pl-[5%] w-full h-full">
                <Image src="/spotlight.png" fill={true} className="object-contain z-10 absolute h-screen -mt-10 max-h-[800px] -top-10 right-0" alt="" />
                <div className="flex flex-col mt-20 max-h-[70vh] z-20 justify-between w-full">
                    <div className="text-4xl z-50 font-normal text-[--black] my-0">
                        <div className="z-50">
                            <h1 className="text-7xl font-normal text-[--black]">Hi, I am <span className="text-[--hightlight-yello] font-medium">Bareen</span></h1>
                        </div>
                    </div>
                    <div className="about-container">
                        <div className="flex">
                            <div className="text-[1.85vw] font-normal text-[--black] md:w-[645px] font-regular-24" style={{ lineHeight: "43px !important" }}>
                                <span className="font-regular-24 w-fit h-fit p-1 relative mr-5" style={{ fontWeight: "500 !important" }}>
                                    <Image src="/group-mouse.svg" className="absolute top-[-14px] left-[-22px]  h-auto object-contain min-w-[200px] z-20 pointer-events-none" fill alt="" />
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