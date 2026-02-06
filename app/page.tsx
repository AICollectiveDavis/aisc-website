'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WhereWeveGone } from '@/components/companies';
import { ArrowRight, Users, Globe, Briefcase, Lightbulb } from 'lucide-react';

function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useScrollReveal();

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

const stats = [
    { value: 3000, suffix: '+', label: 'Students Impacted', icon: Users },
    { value: 5, suffix: '+', label: 'Global Chapters', icon: Globe },
    { value: 50, suffix: '+', label: 'Industry Events', icon: Briefcase },
    { value: 800, suffix: '+', label: 'Projects Completed', icon: Lightbulb },
];

const testimonials = [
    {
        quote: "AISC has helped me build my technical, leadership, and communication skills (landed me two internships!), but more importantly, helped me meet some of my closest friends. I think anyone who is looking for strong community and diverse experience should heavily consider joining!",
        name: 'Abhinav Tata',
        role: 'Computer Science + Statistics (ML)',
        year: "c/o 2026",
        accent: 'pink',
    },
    {
        quote: "Being part of AISC has connected me with amazing people who quickly became friends and mentors. The environment is welcoming, supportive, and full of people who genuinely want to help each other grow both academically and professionally. AISC has continuously pushed me to grow as a designer, making me feel supported every step of the way.",
        name: 'Tess Forstot',
        role: 'Data Science',
        year: 'c/o 2028',
        accent: 'cyan',
    },
];

const initiatives = [
    { title: 'Beginner Projects', desc: '6-week group projects for newcomers', href: '/initiatives#bp' },
    { title: 'Software Engineering', desc: 'Year-long technical projects', href: '/initiatives#swe' },
    { title: 'R&D', desc: 'Cutting-edge AI research', href: '/initiatives#research' },
    { title: 'Forge', desc: 'Community hackathons', href: '/initiatives#forge' },
];

export default function HomePage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const heroReveal = useScrollReveal();
    const aboutReveal = useScrollReveal();
    const statsReveal = useScrollReveal();
    const initiativesReveal = useScrollReveal();
    const testimonialReveal = useScrollReveal();
    const ctaReveal = useScrollReveal();

    return (
        <div className="min-h-screen bg-[#121212] text-white">
            {/* Subtle grid pattern */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="relative pt-28 pb-16 overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            {/* Left - Text */}
                            <div
                                ref={heroReveal.ref}
                                className={`
                                    md:w-1/2 transition-all duration-1000
                                    ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                            >
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                    AI Student
                                    <br />
                                    <span className="relative inline-block">
                                        Collective
                                        <svg
                                            className="absolute -bottom-1 left-0 w-full h-2"
                                            viewBox="0 0 300 12"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0 6 Q 75 0, 150 6 T 300 6"
                                                stroke="url(#heroGradient)"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                            />
                                            <defs>
                                                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="var(--primary)" />
                                                    <stop offset="100%" stopColor="var(--secondary)" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </h1>

                                <p className="text-base text-white/50 max-w-md mb-8 leading-relaxed">
                                    Creating a future of AI literacy for all. A global network of students
                                    dedicated to making AI accessible through hands-on programs and industry connections.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href="/about"
                                        className="
                                            inline-flex items-center gap-2 px-5 py-2.5
                                            bg-white text-[#121212] text-sm font-semibold rounded-lg
                                            hover:bg-white/90 transition-all duration-300
                                            group
                                        "
                                    >
                                        Learn More
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                    <Link
                                        href="/initiatives"
                                        className="
                                            inline-flex items-center gap-2 px-5 py-2.5
                                            border border-white/20 text-white text-sm font-medium rounded-lg
                                            hover:border-white/40 hover:bg-white/5 transition-all duration-300
                                        "
                                    >
                                        Our Programs
                                    </Link>
                                </div>
                            </div>

                            {/* Right - Animated Blobs */}
        <div className="blur md:w-1/2 h-[400px] md:h-[500px] relative z-40">
                <div className="absolute inset-0 overflow-hidden">
                  {/* Primary blob - blue */}
                  <div
                    className="absolute w-[60%] h-[60%] top-[20%] left-[25%] animate-morph blur-edge-fade"
                    style={{
                      background: "linear-gradient(135deg, rgba(14, 165, 233, 0.6), rgba(14, 165, 233, 0.2))",
                      borderRadius: "60% 40% 50% 50% / 40% 50% 50% 60%",
                      filter: "blur(50px)",
                      animationDuration: "20s",
                      transform: "rotate(-5deg)",
                      boxShadow: "0 0 80px rgba(14, 165, 233, 0.3)",
                    }}
                  />

                  {/* Secondary blob - pink */}
                  <div
                    className="absolute w-[50%] h-[50%] top-[30%] left-[40%] animate-morph animation-delay-1000 blur-edge-fade"
                    style={{
                      background: "linear-gradient(135deg, rgba(249, 168, 212, 0.5), rgba(249, 168, 212, 0.15))",
                      borderRadius: "50% 60% 40% 50% / 60% 40% 60% 40%",
                      filter: "blur(40px)",
                      animationDuration: "25s",
                      transform: "rotate(10deg)",
                      boxShadow: "0 0 60px rgba(249, 168, 212, 0.25)",
                    }}
                  />

                  {/* Additional accent blobs */}
                  <div
                    className="absolute w-[45%] h-[45%] top-[15%] left-[10%] animate-morph animation-delay-2000 blur-soft-edge"
                    style={{
                      background: "linear-gradient(135deg, rgba(14, 165, 233, 0.4), rgba(14, 165, 233, 0.08))",
                      borderRadius: "40% 60% 70% 30% / 50% 60% 40% 50%",
                      filter: "blur(35px)",
                      animationDuration: "20s",
                      transform: "rotate(-10deg)",
                      boxShadow: "0 0 40px rgba(14, 165, 233, 0.2)",
                    }}
                  />

                  <div
                    className="absolute w-[40%] h-[40%] top-[45%] left-[5%] animate-morph animation-delay-3000 blur-soft-edge"
                    style={{
                      background: "linear-gradient(135deg, rgba(249, 168, 212, 0.45), rgba(249, 168, 212, 0.08))",
                      borderRadius: "50% 30% 60% 40% / 30% 60% 40% 70%",
                      filter: "blur(30px)",
                      animationDuration: "22s",
                      transform: "rotate(15deg)",
                      boxShadow: "0 0 50px rgba(249, 168, 212, 0.2)",
                    }}
                  />

                  {/* Small accent elements */}
                  <div
                    className="absolute w-[20%] h-[20%] top-[20%] right-[15%] animate-float animation-delay-2500 blur-seamless"
                    style={{
                      background: "radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0) 70%)",
                      borderRadius: "50%",
                      filter: "blur(20px)",
                    }}
                  />

                  <div
                    className="absolute w-[15%] h-[15%] bottom-[25%] right-[20%] animate-float animation-delay-1500 blur-seamless"
                    style={{
                      background: "radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(14, 165, 233, 0) 70%)",
                      borderRadius: "50%",
                      filter: "blur(18px)",
                    }}
                  />

                  <div
                    className="absolute w-[12%] h-[12%] bottom-[20%] left-[30%] animate-float animation-delay-3500 blur-seamless"
                    style={{
                      background: "radial-gradient(circle, rgba(249, 168, 212, 0.5) 0%, rgba(249, 168, 212, 0) 70%)",
                      borderRadius: "50%",
                      filter: "blur(15px)",
                    }}
                  />
                </div>
              </div>
                        </div>
                    </div>
                </section>

                {/* Board Image Section */}
                <section className="py-12 relative">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
                            <Image
                                src="/pics/aisc_board.jpg"
                                alt="AISC Board"
                                width={1200}
                                height={675}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            {/* Subtle gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/20 via-transparent to-transparent pointer-events-none" />
                        </div>
                        <p className="text-center text-white/40 text-sm tracking-wide mt-4">
                            2025–26 Board Members
                        </p>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16 relative">
                    <div className="max-w-6xl mx-auto px-4">
                        <div
                            ref={aboutReveal.ref}
                            className={`
                                grid md:grid-cols-2 gap-10 items-center
                                transition-all duration-700
                                ${aboutReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
                                    <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                                        About Us
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                    Building the
                                    <span className="text-white/40"> Future of AI</span>
                                </h2>

                                <p className="text-white/60 text-sm leading-relaxed mb-5">
                                    Since our launch in January 2023, we&apos;ve grown to serve over 3,000 students,
                                    offering opportunities in technical, creative, and business roles.
                                </p>

                                <ul className="space-y-2 mb-5">
                                    {[
                                        'High-impact events like symposiums and competitions',
                                        'Resume workshops, code-alongs, and corporate mixers',
                                        'Direct access to industry mentors and professionals',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                                            <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-300"
                                >
                                    Learn more about us
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                            {/* Stats Grid */}
                            <div ref={statsReveal.ref} className="grid grid-cols-2 gap-4">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className={`
                                            p-4 rounded-xl border border-white/5 bg-white/[0.02]
                                            hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300
                                            ${statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                        `}
                                        style={{ transitionDelay: `${i * 100}ms` }}
                                    >
                                        <stat.icon className={`w-5 h-5 mb-2 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
                                        <div className={`text-2xl font-bold mb-0.5 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                                            <CountUp end={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-white/40 text-xs">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where We've Gone */}
                <WhereWeveGone />

                {/* Initiatives Preview */}
                <section className="py-16 relative">
                    <div className="max-w-6xl mx-auto px-4">
                        <div
                            ref={initiativesReveal.ref}
                            className={`
                                transition-all duration-700
                                ${initiativesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-px w-10 bg-gradient-to-r from-secondary to-transparent" />
                                        <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                                            Programs
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                        Our Initiatives
                                    </h2>
                                </div>
                                <Link
                                    href="/initiatives"
                                    className="
                                        hidden md:inline-flex items-center gap-2 px-4 py-2
                                        border border-white/20 text-white text-sm font-medium rounded-lg
                                        hover:border-white/40 hover:bg-white/5 transition-all duration-300
                                    "
                                >
                                    View All
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                {initiatives.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className={`
                                            group p-4 rounded-xl border border-white/5 bg-white/[0.02]
                                            hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300
                                            ${initiativesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                        `}
                                        style={{ transitionDelay: `${i * 100}ms` }}
                                    >
                                        <div className={`text-xs tracking-[0.15em] uppercase mb-2 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                                            0{i + 1}
                                        </div>
                                        <h3 className="text-base font-semibold mb-1 group-hover:text-white transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/40 text-xs">{item.desc}</p>
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/initiatives"
                                className="
                                    md:hidden mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2
                                    border border-white/20 text-white text-sm font-medium rounded-lg
                                    hover:border-white/40 hover:bg-white/5 transition-all duration-300
                                "
                            >
                                View All Programs
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 relative">
                    <div className="max-w-6xl mx-auto px-4">
                        <div
                            ref={testimonialReveal.ref}
                            className={`
                                transition-all duration-700
                                ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                        >
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
                                    <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                                        Testimonials
                                    </span>
                                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                    What Members Say
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {testimonials.map((t, i) => (
                                    <div
                                        key={i}
                                        className={`
                                            p-5 rounded-xl border border-white/5 bg-white/[0.02]
                                            hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500
                                            ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                        `}
                                        style={{ transitionDelay: `${i * 150}ms` }}
                                    >
                                        <div className={`w-6 h-0.5 rounded-full mb-4 ${t.accent === 'cyan' ? 'bg-primary' : 'bg-secondary'}`} />
                                        <p className="text-white/70 text-sm leading-relaxed mb-5">
                                            &ldquo;{t.quote}&rdquo;
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-full ${t.accent === 'cyan' ? 'bg-primary/20' : 'bg-secondary/20'}`} />
                                            <div>
                                                <div className="font-medium text-sm">{t.name}</div>
                                                <div className="text-white/40 text-xs">{t.role}, {t.year}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 relative border-t border-white/5">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <div
                            ref={ctaReveal.ref}
                            className={`
                                transition-all duration-700
                                ${ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Ready to Join?
                            </h2>
                            <p className="text-base text-white/50 mb-8 max-w-md mx-auto">
                                Whether you&apos;re an AI expert or just getting started,
                                there&apos;s a place for you in our community.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Link
                                    href="/join"
                                    className="gradient-btn"
                                >
                                    Join AISC
                                </Link>
                                <Link
                                    href="/contact"
                                    className="shine-btn"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
