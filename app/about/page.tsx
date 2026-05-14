import { BoardPicture } from '@/components/board-picture';
import { MissionSection } from '@/components/mission';
import { ValuesSection } from '@/components/values';
import { CTASection } from '@/components/cta';

export default function About() {
    return (
        <main className="page-shell">
            <BoardPicture />
            <MissionSection />
            <ValuesSection />
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
