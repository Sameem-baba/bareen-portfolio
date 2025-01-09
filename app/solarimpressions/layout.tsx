import type { Metadata } from "next";
import "../globals.css";
// import Image from "next/image";


export const metadata: Metadata = {
    title: "Solar Impressions",
    description: `"Solar Impressions" is a digital installation that turns real-time sunlight data into a visual experience intending to make the often overlooked aspects of nature, like sunlight, more tangible and relatable through art while drawing inspiration from the interrelated phenomena of solar flares and aurora borealis. The resulting data sculpture is a bridge between the digital and natural worlds, exploring how data visualization can be used to represent and reinterpret our relationship with sustainable energy. The visuals are programmed to respond to live sunlight data collected by a light-dependent resistor (LDR) sensor. As the LDR measures the intensity of light in its environment, this data feeds into the visual system, directly influencing the patterns and colours displayed on the screen. On bright, sunny days, the installation displays vibrant colours—deep reds, fiery oranges, and glowing yellows—reflecting the intensity and energy of the sunlight. As the light diminishes, the colours gradually shift to cooler blues and greys, representing the diminishing gradients of an aurora.`,
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
