import type React from 'react';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { Manrope } from 'next/font/google';
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
    title: 'AI Collective, UC Davis',
    description: 'AI literacy for all.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`font-sans ${manrope.variable} ${GeistMono.variable} antialiased`}
            >
                <div className="page-grid fixed inset-0 pointer-events-none opacity-50 z-0" />
                <Navigation />
                <Suspense fallback={null}>{children}</Suspense>
                <Footer />
            </body>
        </html>
    );
}
