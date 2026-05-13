'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { initiatives } from '@/lib/data/initiatives';
import { InitiativeCard } from '@/components/initiative-card';

export default function Initiatives() {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (pageRef.current) {
                pageRef.current.style.setProperty('--scroll-y', `${window.scrollY}px`);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={pageRef} className="page-shell relative overflow-hidden">
            <div className="page-grid fixed inset-0 pointer-events-none opacity-70" />

            <div
                className="fixed top-20 right-[10%] w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(31,87,214,0.1) 0%, transparent 70%)',
                    transform: 'translateY(calc(var(--scroll-y, 0px) * 0.1))',
                }}
            />
            <div
                className="fixed bottom-20 left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(255,107,44,0.1) 0%, transparent 70%)',
                    transform: 'translateY(calc(var(--scroll-y, 0px) * -0.05))',
                }}
            />

            <header className="relative pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
                        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
                            Programs & Verticals
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
                        Our
                        <br />
                        <span className="relative inline-block gradient-text">
                            Initiatives
                            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" preserveAspectRatio="none">
                                <path d="M0 6 Q 75 0, 150 6 T 300 6" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="var(--primary)" />
                                        <stop offset="100%" stopColor="var(--secondary)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Discover our core programs designed to advance AI literacy, technical skills, and community.
                        Find your path with AI Collective.
                    </p>
                </div>
            </header>

            <main className="relative px-4 pb-32">
                <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
                    {initiatives.map((initiative, index) => (
                        <InitiativeCard key={initiative.id} initiative={initiative} index={index} />
                    ))}
                </div>
            </main>

            <section className="relative py-24 px-4 border-t border-border/70">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Ready to get involved?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Join our community and start your journey in AI. No experience required—just curiosity and enthusiasm.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/join" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white font-semibold rounded-xl hover:bg-foreground/90 transition-all duration-300 hover:shadow-[0_18px_38px_rgba(31,87,214,0.18)]">
                            Join AI Collective
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="/calendar" className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-white/55 text-foreground font-semibold rounded-xl hover:border-primary/30 hover:bg-white/80 transition-all duration-300">
                            View Events
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
