'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { Initiative } from '@/lib/data/initiatives';

export function InitiativeCard({ initiative, index }: { initiative: Initiative; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.15 },
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    const isEven = index % 2 === 0;
    const accentColor = initiative.accent === 'blue' ? 'var(--primary)' : 'var(--secondary)';

    return (
        <div
            ref={cardRef}
            className={`group relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div
                className={`absolute -top-8 ${isEven ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} text-[120px] md:text-[180px] font-black leading-none pointer-events-none select-none z-0 transition-all duration-500 group-hover:scale-110`}
                style={{ color: 'transparent', WebkitTextStroke: '1px rgba(18,35,56,0.1)', fontFamily: 'system-ui' }}
            >
                {String(index + 1).padStart(2, '0')}
            </div>

            <div
                className={`relative z-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white/68 backdrop-blur-sm border border-border/80 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/20 hover:bg-white/82 group-hover:shadow-2xl`}
                style={{ boxShadow: `0 0 0 0 ${accentColor}` }}
            >
                <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <Image
                        src={initiative.image}
                        alt={initiative.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ objectPosition: initiative.objectPosition ?? 'center' }}
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div
                        className={`absolute ${isEven ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-2`}
                        style={{ backgroundColor: accentColor }}
                    />
                </div>

                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-xs tracking-[0.3em] uppercase mb-3 font-medium" style={{ color: accentColor }}>
                        {initiative.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                        {initiative.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {initiative.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        {initiative.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: accentColor }} />
                                {detail}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: accentColor }}>
                        <span>Explore program</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
