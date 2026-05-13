'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { CountUp } from '@/components/count-up';
import { stats } from '@/lib/data/stats';

export function AboutSection() {
    const aboutReveal = useScrollReveal();
    const statsReveal = useScrollReveal();

    return (
        <section className="py-16 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div
                    ref={aboutReveal.ref}
                    className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${aboutReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
                            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                                About Us
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
                            Building the
                            <span className="text-foreground/50"> Future of AI</span>
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                            Since our launch in January 2023, we&apos;ve grown to serve over 3,000 students, offering
                            opportunities in technical, creative, and business roles.
                        </p>
                        <ul className="space-y-2 mb-5">
                            {[
                                'High-impact events like symposiums and competitions',
                                'Resume workshops, code-alongs, and corporate mixers',
                                'Direct access to industry mentors and professionals',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
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

                    <div ref={statsReveal.ref} className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`section-panel p-4 rounded-2xl hover:border-primary/15 hover:bg-white/75 transition-all duration-300 ${statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <stat.icon
                                    className={`w-5 h-5 mb-2 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}
                                />
                                <div className={`text-2xl font-bold mb-0.5 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                                    <CountUp end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-muted-foreground text-xs">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
