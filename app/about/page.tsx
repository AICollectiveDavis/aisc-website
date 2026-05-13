'use client';

import Image from 'next/image';
import { PersonStanding, LibraryBig, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { CTASection } from '@/components/cta';

const values = [
    {
        title: 'Accessibility',
        description:
            'Promoting AI accessibility for all by breaking down the barriers to knowledge and opportunity.',
        icon: PersonStanding,
    },
    {
        title: 'Literacy',
        description:
            'Empowering students with enriching resources and experiences to shape the future.',
        icon: LibraryBig,
    },
    {
        title: 'Diversity',
        description:
            'Celebrating diversity in AI, fostering innovation through varied perspectives.',
        icon: Globe,
    },
];

export default function About() {
    const missionReveal = useScrollReveal();
    const valuesReveal = useScrollReveal();

    return (
        <main className="page-shell">
            <div className="page-grid fixed inset-0 pointer-events-none opacity-70 z-0" />

            <section className="pt-28 pb-12 relative">
                <div className="container relative z-10 mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold my-6 text-balance">
                            About Our Club
                        </h1>
                        <p className="text-muted-foreground text-lg text-pretty">
                            Building the next generation of AI leaders and innovators at UC Davis
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
                            <Image
                                src="/pics/aisc_board.jpg"
                                alt="AI Collective board"
                                width={1200}
                                height={675}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                        <p className="text-center text-muted-foreground text-sm tracking-wide mt-4">
                            2025–26 Board Members
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section - Redesigned */}
            <section className="py-16 relative z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div
                        ref={missionReveal.ref}
                        className={`
                            grid md:grid-cols-2 gap-10 items-center
                            transition-all duration-700
                            ${missionReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
                                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                                    Our Purpose
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground">
                                Our Mission
                            </h2>

                            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                                <p>
                                    AI Collective, UC Davis exists to foster a
                                    community of students passionate about
                                    artificial intelligence and its
                                    applications. We aim to bridge the gap
                                    between theoretical classroom learning and
                                    practical AI implementation.
                                </p>
                                <p>
                                    Through workshops, projects, hackathons, and
                                    industry connections, we provide students
                                    with the resources and support needed to
                                    thrive in the rapidly evolving field of AI.
                                    Our goal is to make AI education accessible
                                    to students from all disciplines and
                                    backgrounds.
                                </p>
                                <p>
                                    We believe in learning by doing,
                                    collaborating across disciplines, and
                                    exploring the ethical dimensions of AI
                                    technology.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl opacity-50"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-border/80">
                                <Image
                                    src="/pics/aisc.jpg"
                                    alt="AI Collective members collaborating on a project"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section - Redesigned */}
            <section className="py-16 relative z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div
                        ref={valuesReveal.ref}
                        className={`
                            transition-all duration-700
                            ${valuesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
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
                                    className={`
                                        group section-panel p-6 rounded-2xl
                                        hover:bg-white/82 hover:border-primary/15 transition-all duration-300
                                        ${valuesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                    `}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <div
                                        className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-4
                                        ${i % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}
                                    `}
                                    >
                                        <value.icon
                                            className={`w-6 h-6 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}
                                        />
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

            <CTASection
                title="Join Our Community"
                body="Ready to be part of our story? Connect with fellow AI enthusiasts, learn cutting-edge skills, and build the future together."
                primaryHref="/join"
                primaryLabel="Become a Member"
                secondaryHref="/teams"
                secondaryLabel="Meet Our Team"
            />
        </main>
    );
}
