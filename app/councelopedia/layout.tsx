import type { Metadata } from "next";
import "../globals.css";
// import Image from "next/image";


export const metadata: Metadata = {
    title: "Coucelopedia",
    description: "The Jugend Migration Dienste (JMD), an organization that supports young migrants in their integration process in Germany, faces significant challenges in delivering effective counseling services. Language barriers and geographical distances between counselors and clients hinder the process, making it difficult to provide timely and personalized support. While digitalization presents a potential solution, the path to implementing it remains unclear. JMD is in need of a fresh approach to digitize its counseling services and better support young migrants in settling down in Germany. Councelopedia is a digital platform designed to streamline the connection between migrants and the most suitable counselor for their specific needs. By virtually integrating all of JMD's offices, Councelopedia expands the pool of available counselors, allowing clients to find experts based on language proficiency, specialized knowledge, or availability. Additionally, the platform facilitates connections with external advisors beyond JMD. The prototype focuses on optimizing the client’s experience, ensuring that migrants can quickly and easily get in touch with the right counselor. Target audience: Clients of JMD | migrants | between 12-27 years old | in need of support to integrate in Germany",
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
