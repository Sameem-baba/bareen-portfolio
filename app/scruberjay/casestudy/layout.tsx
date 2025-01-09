import type { Metadata } from "next";
import "../../globals.css";
// import Image from "next/image";


export const metadata: Metadata = {
    title: "ScruberJay - Case Study",
    description: " The project was an introductory part of the design thinking program at HPI School of Design Thinking where the ides were created by a multidisciplinary team of students.Each tem member was required to work largely equally on every aspect of the development of the final product and learn the process involved in solving a problem using design thinking through a practical challenge.",
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
            </body>
        </html>
    );
}
