'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface CTASectionProps {
    title: string;
    body: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref?: string;
    secondaryLabel?: string;
}

export function CTASection({
    title,
    body,
    primaryHref,
    primaryLabel,
    secondaryHref,
    secondaryLabel,
}: CTASectionProps) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-16 relative border-t border-border/70">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{title}</h2>
                    <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">{body}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href={primaryHref} className="gradient-btn">
                            {primaryLabel}
                        </Link>
                        {secondaryHref && secondaryLabel && (
                            <Link href={secondaryHref} className="shine-btn">
                                {secondaryLabel}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
