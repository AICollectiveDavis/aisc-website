import { Button } from '@/components/ui/button';

export default function CTASection() {
    return (
        <section className="py-12 relative z-30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-balance">
                    Ready to Join Us?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-pretty">
                    Whether you&#39;re an AI expert or just getting started,
                    there&#39;s a place for you in our community.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button className="gradient-btn">Join Us</Button>
                    <Button className="shine-btn">Contact Us</Button>
                </div>
            </div>
        </section>
    );
}
