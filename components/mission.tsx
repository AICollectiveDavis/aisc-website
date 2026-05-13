'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function MissionSection() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-16 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div
                    ref={ref}
                    className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
                                AI Collective, UC Davis exists to foster a community of students passionate about
                                artificial intelligence and its applications. We aim to bridge the gap between
                                theoretical classroom learning and practical AI implementation.
                            </p>
                            <p>
                                Through workshops, projects, hackathons, and industry connections, we provide
                                students with the resources and support needed to thrive in the rapidly evolving
                                field of AI. Our goal is to make AI education accessible to students from all
                                disciplines and backgrounds.
                            </p>
                            <p>
                                We believe in learning by doing, collaborating across disciplines, and exploring
                                the ethical dimensions of AI technology.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl opacity-50" />
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
    );
}
