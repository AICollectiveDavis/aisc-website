'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { testimonials } from '@/lib/data/testimonials';

export function Testimonials() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-16 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
                            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                                Testimonials
                            </span>
                            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Members Say</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className={`section-panel p-5 rounded-2xl hover:bg-white/82 hover:border-primary/15 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div
                                    className={`w-6 h-0.5 rounded-full mb-4 ${t.accent === 'blue' ? 'bg-primary' : 'bg-secondary'}`}
                                />
                                <p className="text-foreground/78 text-sm leading-relaxed mb-5">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-9 h-9 rounded-full ${t.accent === 'blue' ? 'bg-primary/20' : 'bg-secondary/20'}`}
                                    />
                                    <div>
                                        <div className="font-medium text-sm">{t.name}</div>
                                        <div className="text-muted-foreground text-xs">
                                            {t.role}, {t.year}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
