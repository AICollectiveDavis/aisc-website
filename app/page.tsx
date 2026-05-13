import { Hero } from '@/components/hero';
import { PhotoCollage } from '@/components/photo-collage';
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
                <PhotoCollage />
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
