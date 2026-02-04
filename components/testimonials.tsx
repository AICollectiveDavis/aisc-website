import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
    return (
        <section className="pb-12 bg-background relative z-30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <h2 className="text-3xl font-bold mb-8 text-center text-balance">What Our Members Say</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="glass-card">
                        <CardContent className="px-6">
                            <p className="text-muted-foreground mb-4 text-pretty">
                                AISC has helped me build my technical,
                                leadership, and communication skills (landed me
                                two internships!), but more importantly, helped
                                me meet some of my closest friends. I think
                                anyone who is looking for strong community and
                                diverse experience should heavily consider
                                joining!
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary rounded-full mr-3" />
                                <div>
                                    <div className="font-medium">
                                        Abhinav Tata
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Computer Science + Statistics (ML)
                                        <br />
                                        c/o 2026
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardContent className="px-6">
                            <p className="text-muted-foreground mb-4 text-pretty">
                                &quot;Being part of AISC has connected me with amazing people who quickly became friends and mentors. The environment is welcoming, supportive, and full of people who genuinely want to help each other grow both academically and professionally. AISC has continuously pushed me to grow as a designer, making me feel supported every step of the way.&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-secondary rounded-full mr-3" />
                                <div>
                                    <div className="font-medium">
                                        Tess Forstot
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Data Science, Class of 2028
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
