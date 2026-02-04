'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { PersonStanding, LibraryBig, Globe, ArrowRight } from 'lucide-react';

function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

const values = [
    {
        title: 'Accessibility',
        description: 'Promoting AI accessibility for all by breaking down the barriers to knowledge and opportunity.',
        icon: PersonStanding,
    },
    {
        title: 'Literacy',
        description: 'Empowering students with enriching resources and experiences to shape the future.',
        icon: LibraryBig,
    },
    {
        title: 'Diversity',
        description: 'Celebrating diversity in AI, fostering innovation through varied perspectives.',
        icon: Globe,
    },
];

export default function About() {
    const missionReveal = useScrollReveal();
    const valuesReveal = useScrollReveal();
    const ctaReveal = useScrollReveal();

    return (
        <main className="min-h-screen bg-[#121212]">
            {/* Subtle grid pattern */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Photo Collage Section - KEPT AS IS */}
            <section className="py-16 bg-muted/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-pink-400/5 rounded-full blur-[80px]"></div>

                <div className="container relative z-10 mx-auto px-4">
                    <div className="container relative z-10 mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold my-6 text-balance">
                                About Our Club
                            </h1>
                            <p className="text-muted-foreground text-lg text-pretty">
                                Building the next generation of AI leaders and
                                innovators at UC Davis
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[600px] md:h-[700px] max-w-6xl mx-auto mt-8">
                        {/* Main center photo */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55%] md:w-[45%] z-10 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                            <div
                                style={{
                                    transform: `rotate(-1deg) scale(1.02)`,
                                }}
                                className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="relative aspect-video overflow-hidden rounded bg-muted">
                                    <Image
                                        src="/pics/grad_25.jpg"
                                        alt="AISC Team Photo"
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted text-sm pt-2 px-1 font-medium">
                                    Class of &#39;25 Grads!
                                </p>
                            </div>
                        </div>

                        {/* Top left photo */}
                        <div className="absolute left-[5%] md:left-[8%] top-[5%] w-[40%] md:w-[28%] z-20 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                            <div
                                style={{ transform: `rotate(4deg) scale(1)` }}
                                className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="relative aspect-video overflow-hidden rounded bg-muted">
                                    <Image
                                        src="/pics/bp_wq_showcase.JPG"
                                        alt="AI Workshop"
                                        width={250}
                                        height={250}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted text-sm pt-2 px-1 font-medium">
                                    WQ &#39;25 Beginner Projects
                                </p>
                            </div>
                        </div>

                        {/* Bottom right photo */}
                        <div className="absolute right-[5%] md:right-[8%] bottom-[5%] w-[38%] md:w-[26%] z-30 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                            <div
                                style={{ transform: `rotate(-3deg) scale(1)` }}
                                className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="relative aspect-square overflow-hidden rounded bg-muted">
                                    <Image
                                        src="/pics/r&d.jpeg"
                                        alt="R&D Team"
                                        width={250}
                                        height={250}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted text-sm pt-2 px-1 font-medium">
                                    R&D winning Best Research Award at CSS Escape 2025!
                                </p>
                            </div>
                        </div>

                        {/* Top right photo */}
                        <div className="absolute right-[12%] md:right-[15%] top-[15%] w-[35%] md:w-[24%] z-15 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                            <div
                                style={{
                                    transform: `rotate(-5deg) scale(0.95)`,
                                }}
                                className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded bg-muted">
                                    <Image
                                        src="/pics/WomenInTech.jpg"
                                        alt="Project Presentation"
                                        width={250}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted text-sm pt-2 px-1 font-medium">
                                    Annual Women in Tech Event
                                </p>
                            </div>
                        </div>

                        {/* Left middle photo */}
                        <div className="absolute left-[2%] md:left-[5%] top-[45%] w-[32%] md:w-[22%] z-25 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                            <div
                                style={{
                                    transform: `rotate(6deg) scale(0.92)`,
                                }}
                                className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="relative aspect-square overflow-hidden rounded bg-muted">
                                    <Image
                                        src="/pics/winter_kickoff.PNG"
                                        alt="Winter 2025 Kickoff"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted text-sm pt-2 px-1 font-medium">
                                    Quarterly Kickoff Meeting
                                </p>
                            </div>
                        </div>

                        {/* Bottom center photo */}
                        <div className="absolute left-[35%] md:left-[38%] bottom-[8%] w-[30%] md:w-[20%] z-35 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                            <div
                                style={{ transform: `rotate(2deg) scale(1)` }}
                                className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded bg-muted">
                                    <Image
                                        src="/pics/tuff_ahh_merch.jpg"
                                        alt="Merch!"
                                        width={200}
                                        height={250}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted text-sm pt-2 px-1 font-medium">
                                    Merch!
                                </p>
                            </div>
                        </div>

                        {/* Top center small photo */}
                        <div className="absolute left-[45%] md:left-[48%] top-[8%] w-[25%] md:w-[18%] z-40 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                            <div
                                style={{ transform: `rotate(-4deg)` }}
                                className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="relative overflow-hidden rounded bg-muted">
                                    <Image
                                        src="/pics/retreat.jpg"
                                        alt="Award Ceremony"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted text-sm pt-2 px-1 font-medium">
                                    Yosemite Winter Retreat!
                                </p>
                            </div>
                        </div>

                        {/* Right middle small photo */}
                        <div className="absolute right-[2%] md:right-[4%] top-[55%] w-[28%] md:w-[19%] z-45 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                            <div
                                style={{ transform: `rotate(7deg) scale(1.1)` }}
                                className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="relative overflow-hidden rounded bg-muted">
                                    <Image
                                        src="/pics/current_board.jpg"
                                        alt="Study Session"
                                        width={400}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted text-sm pt-2 px-1 font-medium">
                                    A-I-S-C
                                </p>
                            </div>
                        </div>
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
                                <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                                    Our Purpose
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                                Our Mission
                            </h2>

                            <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                                <p>
                                    The Artificial Intelligence Student Collective (AISC) at UC Davis exists to foster
                                    a community of students passionate about artificial intelligence and its applications.
                                    We aim to bridge the gap between theoretical classroom learning and practical AI implementation.
                                </p>
                                <p>
                                    Through workshops, projects, hackathons, and industry connections, we provide students
                                    with the resources and support needed to thrive in the rapidly evolving field of AI.
                                    Our goal is to make AI education accessible to students from all disciplines and backgrounds.
                                </p>
                                <p>
                                    We believe in learning by doing, collaborating across disciplines, and exploring the
                                    ethical dimensions of AI technology.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl opacity-50"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src="/pics/aisc.jpg"
                                    alt="AISC members collaborating on a project"
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
                                <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                                    What We Stand For
                                </span>
                                <div className="h-px w-10 bg-gradient-to-l from-transparent to-secondary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                                Our Values
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {values.map((value, i) => (
                                <div
                                    key={i}
                                    className={`
                                        group p-6 rounded-xl border border-white/5 bg-white/[0.02]
                                        hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300
                                        ${valuesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                    `}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <div className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-4
                                        ${i % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}
                                    `}>
                                        <value.icon className={`w-6 h-6 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 relative z-10 border-t border-white/5">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div
                        ref={ctaReveal.ref}
                        className={`
                            transition-all duration-700
                            ${ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                            Join Our Community
                        </h2>
                        <p className="text-base text-white/50 mb-8 max-w-md mx-auto">
                            Ready to be part of our story? Connect with fellow AI enthusiasts,
                            learn cutting-edge skills, and build the future together.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/join" className="gradient-btn">
                                Become a Member
                            </Link>
                            <Link href="/teams" className="shine-btn">
                                Meet Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
