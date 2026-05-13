'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { values } from '@/lib/data/values';

export function ValuesSection() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-16 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="h-px w-10 bg-gradient-to-r from-transparent to-secondary" />
                            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                                What We Stand For
                            </span>
                            <div className="h-px w-10 bg-gradient-to-l from-transparent to-secondary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Our Values
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className={`group section-panel p-6 rounded-2xl hover:bg-white/82 hover:border-primary/15 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${i % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                                    <value.icon className={`w-6 h-6 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
