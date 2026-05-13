'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { initiatives, Initiative } from '@/lib/data/initiatives';

function InitiativeCard({
    initiative,
    index,
}: {
    initiative: Initiative;
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 },
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const isEven = index % 2 === 0;
    const accentColor =
        initiative.accent === 'blue' ? 'var(--primary)' : 'var(--secondary)';

    return (
        <div
            ref={cardRef}
            className={`
                group relative
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Large index number */}
            <div
                className={`
                    absolute -top-8 ${isEven ? '-left-4 md:-left-8' : '-right-4 md:-right-8'}
                    text-[120px] md:text-[180px] font-black leading-none
                    pointer-events-none select-none z-0
                    transition-all duration-500 group-hover:scale-110
                `}
                style={{
                    color: 'transparent',
                    WebkitTextStroke: `1px rgba(18,35,56,0.1)`,
                    fontFamily: 'system-ui',
                }}
            >
                {String(index + 1).padStart(2, '0')}
            </div>

            <div
                className={`
                    relative z-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                    bg-white/68 backdrop-blur-sm
                    border border-border/80 rounded-2xl overflow-hidden
                    transition-all duration-500
                    hover:border-primary/20 hover:bg-white/82
                    group-hover:shadow-2xl
                `}
                style={{
                    boxShadow: `0 0 0 0 ${accentColor}`,
                }}
            >
                {/* Image Section */}
                <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <Image
                        src={initiative.image}
                        alt={initiative.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {/* Gradient overlay */}
                    <div
                        className={`
                            absolute inset-0
                            ${
                                isEven
                                    ? 'bg-gradient-to-r from-transparent via-transparent to-white'
                                    : 'bg-gradient-to-l from-transparent via-transparent to-white'
                            }
                            opacity-60 md:opacity-100
                        `}
                    />
                    {/* Accent line */}
                    <div
                        className={`
                            absolute ${isEven ? 'right-0' : 'left-0'} top-0 bottom-0 w-1
                            transition-all duration-500
                            group-hover:w-2
                        `}
                        style={{ backgroundColor: accentColor }}
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    {/* Subtitle */}
                    <span
                        className="text-xs tracking-[0.3em] uppercase mb-3 font-medium"
                        style={{ color: accentColor }}
                    >
                        {initiative.subtitle}
                    </span>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                        {initiative.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {initiative.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {initiative.details.map((detail, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                            >
                                <span
                                    className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                                    style={{ backgroundColor: accentColor }}
                                />
                                {detail}
                            </div>
                        ))}
                    </div>

                    {/* Hover reveal arrow */}
                    <div
                        className="
                            mt-6 flex items-center gap-2 text-sm font-medium
                            opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0
                            transition-all duration-300
                        "
                        style={{ color: accentColor }}
                    >
                        <span>Explore program</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="transition-transform group-hover:translate-x-1"
                        >
                            <path
                                d="M3 8H13M13 8L9 4M13 8L9 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

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

            {/* Floating accent shapes */}
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

            {/* Header Section */}
            <header className="relative pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Decorative line */}
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
                            {/* Underline accent */}
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3"
                                viewBox="0 0 300 12"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 6 Q 75 0, 150 6 T 300 6"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="gradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="var(--primary)"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="var(--secondary)"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Discover our core programs designed to advance AI
                        literacy, technical skills, and community. Find your
                        path with AI Collective.
                    </p>
                </div>
            </header>

            {/* Initiatives List */}
            <main className="relative px-4 pb-32">
                <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
                    {initiatives.map((initiative, index) => (
                        <InitiativeCard
                            key={initiative.id}
                            initiative={initiative}
                            index={index}
                        />
                    ))}
                </div>
            </main>

            {/* Bottom CTA */}
            <section className="relative py-24 px-4 border-t border-border/70">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Ready to get involved?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Join our community and start your journey in AI. No
                        experience required—just curiosity and enthusiasm.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/join"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white font-semibold rounded-xl hover:bg-foreground/90 transition-all duration-300 hover:shadow-[0_18px_38px_rgba(31,87,214,0.18)]"
                        >
                            Join AI Collective
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M3 8H13M13 8L9 4M13 8L9 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="/calendar"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-white/55 text-foreground font-semibold rounded-xl hover:border-primary/30 hover:bg-white/80 transition-all duration-300"
                        >
                            View Events
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
