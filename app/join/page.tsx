import { Construction } from 'lucide-react';

export default function Join() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center max-w-xl mx-auto px-4">
                <div className="flex justify-center mb-4">
                    <Construction className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                    Work in Progress
                </h1>
                <p className="text-muted-foreground text-base">
                    We&apos;re working on this page! Check back soon for
                    information on how to join AI Collective, UC Davis.
                </p>
            </div>
        </div>
    );
}
