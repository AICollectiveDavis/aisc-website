import Image from 'next/image';
import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about';
import { WhereWeveGone } from '@/components/companies';
import { InitiativesPreview } from '@/components/initiatives-preview';
import { Testimonials } from '@/components/testimonials';
import { CTASection } from '@/components/cta';

export default function HomePage() {
    return (
        <div className="page-shell">
            <div className="page-grid fixed inset-0 pointer-events-none opacity-70 z-0" />

            <main className="relative z-10">
                <Hero />

                <section className="py-12 relative">
                    <div className="max-w-5xl mx-auto px-4">
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
                </section>

                <AboutSection />
                <WhereWeveGone />
                <InitiativesPreview />
                <Testimonials />

                <CTASection
                    title="Ready to Join?"
                    body="Whether you're an AI expert or just getting started, there's a place for you in our community."
                    primaryHref="/join"
                    primaryLabel="Join AI Collective"
                />
            </main>
        </div>
    );
}
