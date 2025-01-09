'use-client'

import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
    return (
        <div className="py-10">
            <div className="sliding-container">
                <div className="slide">
                    {/* <!-- First set of content --> */}
                    <div className="slide-content">
                        <h1 className="getInTouch-title font-regular-54">Get In touch</h1>
                        <img className="first-slideimg" src="/socials/d11.png" alt="" />
                        <h1 className="getInTouch-title font-regular-54">Get In touch</h1>
                        <img className="first-slideimg" src="/socials/pencil.png" alt="" />
                        <h1 className="getInTouch-title font-regular-54">Get In touch</h1>
                        <img className="first-slideimg" src="/socials/d11.png" alt="" />
                    </div>
                    {/* <!-- Duplicate content for seamless loop --> */}
                    <div className="slide-content">
                        <h1 className="getInTouch-title font-regular-54">Get In touch</h1>
                        <img className="first-slideimg" src="/socials/pencil.png" alt="" />
                        <h1 className="getInTouch-title font-regular-54">Get In touch</h1>
                        <img className="first-slideimg" src="/socials/d11.png" alt="" />
                        <h1 className="getInTouch-title font-regular-54">Get In touch</h1>
                        <img className="first-slideimg" src="/socials/pencil.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="flex items-end justify-between px-7  pt-7">
                <div className="rights-section">
                    <p className="rights">
                        Bareen Parvez. All rights reserved. Built by abc.com
                    </p>
                </div>

                <div className="w-[30%] flex items-start justify-between">
                    <div className="l-subfoot">
                        <h5 className="socials font-medium-18">Socials</h5>
                        <div className="flex  items-center gap-3">
                            <Link href="https://www.linkedin.com/in/bareen-parvez-74b473163/">
                                <img className="linkedin-logo" src="/socials/linkedin.svg" alt="" />
                            </Link>
                            <Link href="https://dribbble.com/bareenparvez">
                                <img className="dribble-logo" src="/socials/dribble.svg" alt="" />
                            </Link>
                            <Link href="https://www.behance.net/bareenparvez">
                                <img className="behance-logo" src="/socials/behance.svg" alt="" />
                            </Link>
                            <Link href="https://www.instagram.com/grapheendesigns/">
                                <img
                                    className="instagram-logo"
                                    alt=""
                                    src="/socials/instagram.svg"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="r-subfoot">
                        <h5 className="resume font-medium-18">Resume</h5>
                        <a href="https://drive.google.com/file/d/1FVviKrMvNl-J6jXqNPcktM7Cjwligpqh/view?usp=drive_link" className="download">
                            <h5>Download</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer