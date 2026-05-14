'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { PhotoCollage } from '@/components/photo-collage';

export function Hero() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="relative pt-28 pb-8 overflow-hidden min-h-[620px] md:min-h-[700px]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div
                        ref={ref}
                        className={`md:w-[42%] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                            UC Davis
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                            AI
                            <br />
                            <span className="relative inline-block gradient-text">Collective</span>
                        </h1>
                        <p className="text-base text-muted-foreground max-w-md mb-8 leading-relaxed">
                            Building a future of AI literacy for all through hands-on programs, sharp peers, and
                            industry-facing opportunities.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/about" className="gradient-btn text-sm">
                                Learn More
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <Link href="/initiatives" className="shine-btn text-sm">
                                Our Programs
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-[58%]">
                        <PhotoCollage />
                    </div>
                </div>
            </div>
        </section>
    );
}
