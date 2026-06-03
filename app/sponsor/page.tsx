export const metadata = {
    title: 'Sponsor Us | AI Collective @ UC Davis',
    description:
        'Partner with AI Collective @ UC Davis. View our Sponsorship & Partnership Prospectus.',
};

export default function Sponsor() {
    return (
        <main className="page-shell pt-24">
            <div className="container mx-auto px-4 pb-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Sponsorship &amp; Partnership
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Partner with UC Davis&apos;s premier AI community. Explore our prospectus below to learn how we can grow together.
                    </p>
                </div>

                <div
                    className="relative z-10 rounded-xl overflow-hidden border border-border shadow-sm mx-auto bg-white max-w-4xl"
                    style={{ height: '65vh', minHeight: '500px', colorScheme: 'light' }}
                >
                    <iframe
                        src="https://aicdavis.notion.site/ebd//36dfc85df3bb80c2a632c30727901b2c"
                        width="100%"
                        height="100%"
                        frameBorder={0}
                        allowFullScreen
                        title="Sponsorship & Partnership Prospectus"
                        style={{ colorScheme: 'light' }}
                    />
                </div>
            </div>
        </main>
    );
}
