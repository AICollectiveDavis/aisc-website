import type React from 'react';
import type { Metadata } from 'next';
// import { GeistSans } from "geist/font/sans"
import { GeistMono } from 'geist/font/mono';
import { Manrope } from 'next/font/google';
// import { Analytics } from "@vercel/analytics/next"
import { Suspense } from 'react';
import { Navigation } from '@/components/navigation';
import Footer from '@/components/footer';
import './globals.css';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
    weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
    title: 'AI Student Collective | UC Davis',
    description: 'AI literacy for all.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`font-sans ${manrope.variable} ${GeistMono.variable} antialiased`}
            >
                <Navigation />
                <Suspense fallback={null}>{children}</Suspense>
                {/* <Analytics /> */}
                <Footer />
            </body>
        </html>
    );
}
