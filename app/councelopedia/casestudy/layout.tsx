import type { Metadata } from "next";
import "../../globals.css";
// import Image from "next/image";


export const metadata: Metadata = {
    title: "Coucelopedia - Case Study",
    description: "This project used a design thinking approach to address challenges in youth migration counseling services in Germany. A collaborative, multidisciplinary team worked through research, empathy-building, ideation, prototyping, and testing to develop a user-centered solution. I contributed to all phases of the project, including interviewing JMD clients and employees, conducting research, and identifying key pain points. Leveraging my expertise in visual design and UI/UX, I focused on designing the digital tool, Councelopedia, its visual system, and illustrating storyboards to effectively communicate and refine our ideas.",
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
