'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { initiativePreviews } from '@/lib/data/initiatives';

export function InitiativesPreview() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-8 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-px w-10 bg-gradient-to-r from-secondary to-transparent" />
                                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                                    Programs
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Initiatives</h2>
                        </div>
                        <Link
                            href="/initiatives"
                            className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-border bg-white/55 text-foreground text-sm font-medium rounded-xl hover:border-primary/30 hover:bg-white/80 transition-all duration-300"
                        >
                            View All
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {initiativePreviews.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className={`group section-panel p-4 rounded-2xl hover:bg-white/80 hover:border-primary/15 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className={`text-xs tracking-[0.15em] uppercase mb-2 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                                    0{i + 1}
                                </div>
                                <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-xs">{item.desc}</p>
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/initiatives"
                        className="md:hidden mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-border bg-white/55 text-foreground text-sm font-medium rounded-xl hover:border-primary/30 hover:bg-white/80 transition-all duration-300"
                    >
                        View All Programs
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
