"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const Header = () => {
    const router = useRouter()
    return (
        <div className="sticky header-bg top-10 mt-8 mx-[2%] z-50 flex justify-between items-center py-6 px-10 rounded-[72px] border-[1.25px] border-solid border-[rgba(255, 255, 255, 0.7)]  bg-gradient-to-l from-[rgba(73, 69, 60, 0.08) 4.9%] to-[rgba(250, 246, 238, 0.5)] shadow-lg backdrop-blur-xl w-[96%]">
            <div>
                <div className="title text-xl" >
                    <div onClick={() => router.push('/')} className="cursor-pointer">Bareen Parvez</div>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="title font-regular-16 transitions hover:text-[--hightlight-green] cursor-pointer md:block hidden"><Link className="text-[--black]" href="/">About</Link></div>
                <div onClick={() => router.push('/projects')} className="title font-regular-16 transitions cursor-pointer md:block hidden">
                    Projects
                </div>
                <div className="title font-regular-16 transitions md:block hidden"><Link href="https://drive.google.com/file/d/1FVviKrMvNl-J6jXqNPcktM7Cjwligpqh/view?usp=drive_link" replace>Resume</Link></div>
                <div className="title font-regular-16 transitions md:block hidden"><Link href="mailto:neerabparvez1@gmail.com">Contact</Link></div>

                <svg className="md:hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path fillRule="evenodd"
                        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}
export default Header