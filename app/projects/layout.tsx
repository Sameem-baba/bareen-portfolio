import type { Metadata } from "next";
import "../globals.css";
// import Image from "next/image";


export const metadata: Metadata = {
    title: "Projects",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const width = screen.width
    return (
        <html lang="en">
            <body
                className={` w-screen relative`}
            >
                {children}
                {/* <Image src="/footerGrid.svg" alt="" className="absolute -bottom-20 -z-30 " height={400} width={1800} objectFit="contain" /> */}
            </body>
        </html>
    );
}
