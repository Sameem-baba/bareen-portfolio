import type { Metadata } from "next";
import "../globals.css";
// import Image from "next/image";


export const metadata: Metadata = {
    title: "ScruberJay",
    description: "ScruberJay is a digital solution aimed at reducing household food waste by streamlining grocery management. The app syncs with supermarket chains to automatically track users' purchases, offering storage tips, expiry reminders, and quick meal suggestions using ingredients on hand.By leveraging machine learning, ScruberJay predicts  the shelf life of perishable items and helps users make the most of their groceries before they spoil.This seamless ecosystem connects supermarkets and consumers, making food management more efficient and sustainable.",
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
