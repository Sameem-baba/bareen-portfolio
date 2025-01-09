import Link from "next/link"

const Header = () => {
    return (
        <div className="sticky top-10 mt-8 mx-[2%] z-50 flex justify-between items-center py-6 px-10 rounded-[72px] border-[1.25px] border-solid border-[rgba(255, 255, 255, 0.7)]  bg-gradient-to-l from-[rgba(73, 69, 60, 0.08) 4.9%] to-[rgba(250, 246, 238, 0.5)] shadow-lg backdrop-blur-xl w-[96%]">
            <div>
                <h5 className="title text-xl" >
                    <Link href="/">Bareen Parvez</Link>
                </h5>
            </div>

            <div className="flex items-center gap-6">
                <h5 className="title font-regular-16 md:block hidden"><Link className="text-[--black]" href="/">About</Link></h5>
                <h5 className="title font-regular-16 md:block hidden">
                    <Link href="/projects">Projects</Link>
                </h5>
                <h5 className="title font-regular-16 md:block hidden"><Link href="">Resume</Link></h5>
                <h5 className="title font-regular-16 md:block hidden"><Link href="">Contact</Link></h5>

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