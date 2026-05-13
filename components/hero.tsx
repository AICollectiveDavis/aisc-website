'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const HeroBlobs = (
    <div className="blur md:w-1/2 h-[400px] md:h-[500px] relative z-40">
        <div className="absolute inset-0 overflow-hidden">
            <div
                className="absolute w-[60%] h-[60%] top-[20%] left-[25%] animate-morph blur-edge-fade"
                style={{
                    background: 'linear-gradient(135deg, rgba(31, 87, 214, 0.48), rgba(86, 183, 255, 0.16))',
                    borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%',
                    filter: 'blur(50px)',
                    animationDuration: '20s',
                    transform: 'rotate(-5deg)',
                    boxShadow: '0 0 80px rgba(31, 87, 214, 0.24)',
                }}
            />
            <div
                className="absolute w-[50%] h-[50%] top-[30%] left-[40%] animate-morph animation-delay-1000 blur-edge-fade"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 107, 44, 0.52), rgba(255, 179, 71, 0.14))',
                    borderRadius: '50% 60% 40% 50% / 60% 40% 60% 40%',
                    filter: 'blur(40px)',
                    animationDuration: '25s',
                    transform: 'rotate(10deg)',
                    boxShadow: '0 0 60px rgba(255, 107, 44, 0.22)',
                }}
            />
            <div
                className="absolute w-[45%] h-[45%] top-[15%] left-[10%] animate-morph animation-delay-2000 blur-soft-edge"
                style={{
                    background: 'linear-gradient(135deg, rgba(31, 87, 214, 0.32), rgba(86, 183, 255, 0.08))',
                    borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
                    filter: 'blur(35px)',
                    animationDuration: '20s',
                    transform: 'rotate(-10deg)',
                    boxShadow: '0 0 40px rgba(31, 87, 214, 0.16)',
                }}
            />
            <div
                className="absolute w-[40%] h-[40%] top-[45%] left-[5%] animate-morph animation-delay-3000 blur-soft-edge"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 107, 44, 0.32), rgba(255, 179, 71, 0.08))',
                    borderRadius: '50% 30% 60% 40% / 30% 60% 40% 70%',
                    filter: 'blur(30px)',
                    animationDuration: '22s',
                    transform: 'rotate(15deg)',
                    boxShadow: '0 0 50px rgba(255, 107, 44, 0.16)',
                }}
            />
            <div
                className="absolute w-[20%] h-[20%] top-[20%] right-[15%] animate-float animation-delay-2500 blur-seamless"
                style={{
                    background: 'radial-gradient(circle, rgba(31, 87, 214, 0.34) 0%, rgba(31, 87, 214, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                }}
            />
            <div
                className="absolute w-[15%] h-[15%] bottom-[25%] right-[20%] animate-float animation-delay-1500 blur-seamless"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 107, 44, 0.34) 0%, rgba(255, 107, 44, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(18px)',
                }}
            />
            <div
                className="absolute w-[12%] h-[12%] bottom-[20%] left-[30%] animate-float animation-delay-3500 blur-seamless"
                style={{
                    background: 'radial-gradient(circle, rgba(86, 183, 255, 0.28) 0%, rgba(86, 183, 255, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(15px)',
                }}
            />
        </div>
    </div>
);

export function Hero() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="relative pt-28 pb-16 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(31,87,214,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(255,107,44,0.22),transparent_32%)]" />
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <div
                        ref={ref}
                        className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                            UC Davis
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                            AI
                            <br />
                            <span className="relative inline-block gradient-text">Collective</span>
                            <br />
                            <span className="relative inline-block text-foreground/65">
                                , UC Davis
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
                        <p className="text-base text-muted-foreground max-w-md mb-8 leading-relaxed">
                            Building a future of AI literacy for all through hands-on programs, sharp peers, and
                            industry-facing opportunities rooted at UC Davis.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-white text-sm font-semibold rounded-xl hover:bg-foreground/90 transition-all duration-300 group"
                            >
                                Learn More
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                href="/initiatives"
                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-white/55 text-foreground text-sm font-medium rounded-xl hover:border-primary/30 hover:bg-white/80 transition-all duration-300"
                            >
                                Our Programs
                            </Link>
                        </div>
                    </div>
                    {HeroBlobs}
                </div>
            </div>
        </section>
    );
}
