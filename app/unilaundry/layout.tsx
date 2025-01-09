import type { Metadata } from "next";
import "../globals.css";
// import Image from "next/image";


export const metadata: Metadata = {
    title: "UNILaundry",
    description: `UNILaundry is a mobile application aimed at simplifying dormitory laundry management for students. The app notifies users when their laundry is done and provides real-time updates on the availability of washing machines and dryers. It’s a manual solution that relies on students diligently updating their machine usage, helping to schedule and manage laundry tasks more efficiently. The app doesn’t control or reserve the machines, as it was designed within the limitations of the existing laundry setup, where machine mechanisms cannot be altered. The app was designed incorporating Bauhaus-inspired design elements in the user interface—drawing on the works of Bauhaus Masters and students to create a modular and functional interface. Additionally, I explored basic animations with variable type using CSS for a more engaging & delightful user experience.`,
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
