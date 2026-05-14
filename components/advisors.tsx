'use client';

import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const advisors = [
    {
        name: 'Raissa D\'Souza',
        title: 'Associate Dean of Research, College of Engineering',
        image: '/pics/dsouza.png',
        linkedin: 'https://www.linkedin.com/in/jadetree/',
        email: 'rmdsouza@ucdavis.edu',
        website: 'https://engineering.ucdavis.edu/people/raissa-dsouza',
    },
    {
        name: 'Dipak Ghosal',
        title: 'Professor and Chair, Department of Computer Science',
        image: '/pics/ghosal.png',
        linkedin: 'https://www.linkedin.com/in/dipak-ghosal-9373a7/',
        email: 'dghosal@ucdavis.edu',
        website: null,
    },
    {
        name: 'Oleg Kaganovich',
        title: 'Founder @ Sustineri Ventures · Venture Advisor',
        image: '/pics/oleg.png',
        linkedin: 'https://www.linkedin.com/in/kaganovich/',
        email: 'oleg@sustineriventures.com',
        website: null,
    },
];

export function AdvisorsSection() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-8 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
                        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                            Faculty &amp; Industry
                        </span>
                        <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        Our Advisors
                    </h2>
                </div>

                <div
                    ref={ref}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {advisors.map((advisor) => (
                        <div
                            key={advisor.name}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="group relative w-44 h-44 mb-5 rounded-2xl overflow-hidden border border-border/60 shadow-lg ring-1 ring-primary/10 transition-all duration-300 hover:ring-primary/30 hover:shadow-primary/10">
                                <Image
                                    src={advisor.image}
                                    alt={advisor.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="font-semibold text-foreground text-base leading-snug">
                                {advisor.name}
                            </h3>
                            <p className="text-muted-foreground text-xs mt-1 mb-4 max-w-[200px] leading-relaxed">
                                {advisor.title}
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href={advisor.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${advisor.name} on LinkedIn`}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href={`mailto:${advisor.email}`}
                                    aria-label={`Email ${advisor.name}`}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* On-Campus Partner */}
                <div className="mt-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
                        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                            On-Campus Partner
                        </span>
                        <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
                    </div>
                    <a
                        href="https://engineering.ucdavis.edu/artificial-intelligence"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col items-center gap-4 mt-4 bg-white rounded-2xl px-10 py-6 select-none transition-opacity hover:opacity-80"
                    >
                        <div className="relative h-16 w-72">
                            <Image
                                src="/logos/coe.png"
                                alt="UC Davis College of Engineering"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-foreground font-bold text-xl tracking-tight">
                            UC Davis AI Center in Engineering
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
}
