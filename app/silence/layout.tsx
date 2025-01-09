import type { Metadata } from "next";
import "../globals.css";
// import Image from "next/image";


export const metadata: Metadata = {
    title: "Silence",
    description: "The project 'Silence: Associations from the Valley of Kashmir' explores the  emotions and narratives associated within the concept of self-expression in Kashmir, where silence, though often imposed, has emerged as a crucial mechanism for survival and security. At its core, the installation uses vernacular Kashmiri script, serving as a conduit for the complex emotions and narratives surrounding silence in the region. Through an interplay of light and sound, the installation responds dynamically to its environment, where in the absence of sound, the words 'ċhọpü kạrzi' ('stay silent' in Kashmiri) fade into darkness, echoing the prevailing notion that silence is often synonymous with safety. Within the socio-political landscape of Indian-occupied Kashmir, where dissent is met with suppression and censorship, the imperative to remain silent often emanates from a genuine fear for personal safety. Read documentation",
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
