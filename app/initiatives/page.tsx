'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const initiatives = [
    {
        id: 'bp',
        title: 'Beginner Projects',
        subtitle: 'Start Your Journey',
        description:
            'New to AI/ML? Start here with 6-week long group projects. Foundational learning and hands-on experience for all backgrounds.',
        details: [
            '6-week cycles with group mentorship',
            'No experience required',
            'Project-based learning with peers',
            'Showcase at end of cycle',
        ],
        image: '/pics/bp_wq_showcase.JPG',
        accent: 'cyan',
    },
    {
        id: 'swe',
        title: 'Software Engineering',
        subtitle: 'Build Real Products',
        description:
            'Learn industry practices while developing a year-long project. Collaborate in teams, use GitHub, and ship real software.',
        details: [
            'Year-long technical projects',
            'Agile, code reviews, and CI/CD',
            'Portfolio and resume building',
            'Present at club events',
        ],
        image: '/pics/bp_wq_showcase.JPG',
        accent: 'pink',
    },
    {
        id: 'research',
        title: 'R&D',
        subtitle: 'Push Boundaries',
        description:
            'Collaborate on cutting-edge AI research initiatives. Paper reading, faculty mentorship, and original research projects.',
        details: [
            'Paper reading groups',
            'Faculty and grad student mentorship',
            'Research methods training',
            'Opportunities for publication',
        ],
        image: '/pics/r&d.jpeg',
        accent: 'cyan',
    },
    // {
    //     id: 'forge',
    //     title: 'Forge',
    //     subtitle: 'Compete & Create',
    //     description:
    //         'Participate in local community hackathons. Build, learn, and network in a fast-paced, supportive environment.',
    //     details: [
    //         'Community hackathons',
    //         'Team-based rapid prototyping',
    //         'Workshops and prep sessions',
    //         'All skill levels welcome',
    //     ],
    //     image: '/pics/retreat.jpg',
    //     accent: 'pink',
    // },
    // {
    //     id: 'uxr',
    //     title: 'UX Research',
    //     subtitle: 'Shape the Future',
    //     description:
    //         'Collect and analyze data to improve internal functions. Help shape the club\'s direction and impact.',
    //     details: [
    //         'Surveys and interviews',
    //         'Data-driven improvements',
    //         'Present findings to leadership',
    //         'Make a real impact',
    //     ],
    //     image: '/pics/friendsgiving.JPG',
    //     accent: 'cyan',
    // },
];

function InitiativeCard({ initiative, index }: { initiative: typeof initiatives[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const isEven = index % 2 === 0;
    const accentColor = initiative.accent === 'cyan' ? 'var(--primary)' : 'var(--secondary)';

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
                    WebkitTextStroke: `1px rgba(255,255,255,0.08)`,
                    fontFamily: 'system-ui',
                }}
            >
                {String(index + 1).padStart(2, '0')}
            </div>

            <div
                className={`
                    relative z-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                    bg-[#1a1a1a]/60 backdrop-blur-sm
                    border border-white/5 rounded-2xl overflow-hidden
                    transition-all duration-500
                    hover:border-white/10 hover:bg-[#1a1a1a]/80
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
                            ${isEven
                                ? 'bg-gradient-to-r from-transparent via-transparent to-[#1a1a1a]'
                                : 'bg-gradient-to-l from-transparent via-transparent to-[#1a1a1a]'
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        {initiative.title}
                    </h2>

                    {/* Description */}
                    <p className="text-white/60 mb-6 leading-relaxed">
                        {initiative.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {initiative.details.map((detail, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300"
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
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Initiatives() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#121212] relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Floating accent shapes */}
            <div
                className="fixed top-20 right-[10%] w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
                    transform: `translateY(${scrollY * 0.1}px)`,
                }}
            />
            <div
                className="fixed bottom-20 left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(249,168,212,0.06) 0%, transparent 70%)',
                    transform: `translateY(${scrollY * -0.05}px)`,
                }}
            />

            {/* Header Section */}
            <header className="relative pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Decorative line */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
                        <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
                            Programs & Verticals
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                        Our
                        <br />
                        <span className="relative inline-block">
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
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="var(--primary)" />
                                        <stop offset="100%" stopColor="var(--secondary)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
                        Discover our core programs designed to advance AI literacy,
                        technical skills, and community. Find your path with AISC.
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
            <section className="relative py-24 px-4 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to get involved?
                    </h2>
                    <p className="text-white/50 mb-8 max-w-xl mx-auto">
                        Join our community and start your journey in AI.
                        No experience required—just curiosity and enthusiasm.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/join"
                            className="
                                inline-flex items-center gap-2 px-8 py-4
                                bg-white text-[#121212] font-semibold rounded-lg
                                hover:bg-white/90 transition-all duration-300
                                hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                            "
                        >
                            Join AISC
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a
                            href="/calendar"
                            className="
                                inline-flex items-center gap-2 px-8 py-4
                                border border-white/20 text-white font-semibold rounded-lg
                                hover:border-white/40 hover:bg-white/5 transition-all duration-300
                            "
                        >
                            View Events
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
