'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

function CountUp({
    end,
    duration = 2000,
    plus = false,
    className = '',
}: {
    end: number;
    duration?: number;
    plus?: boolean;
    className?: string;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Linear animation
            const current = Math.floor(percentage * end);

            setCount(current);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <div className={className}>
            {count.toLocaleString()}
            {plus && '+'}
        </div>
    );
}

export function AboutSection() {
    return (
        <section className="py-16 relative z-30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="glass-card">
                        <CardContent className="p-6 min-h-full flex flex-col">
                            <h2 className="text-3xl font-bold mb-4 text-balance">
                                About Our Collective
                            </h2>
                            <p className="text-muted-foreground text-pretty">
                                Since our launch in January 2023, we&#39;e grown
                                to serve over 3,000 students, offering exciting
                                opportunities for involvement in technical,
                                creative, and business roles. We achieve this
                                through:
                            </p>
                            <ul className="text-muted-foreground mb-6 ml-6 list-disc [&>li]:mt-2 flex-grow">
                                <li>
                                    High-impact events like symposiums and
                                    product competitions
                                </li>
                                <li>
                                    Local opportunities: resume workshops,
                                    code-alongs, corporate mixers, tech
                                    conferences
                                </li>
                                <li>Access to industry mentors</li>
                            </ul>
                            <div className="mt-auto">
                                <Button asChild>
                                    <Link
                                        className="shine-btn bg-transparent"
                                        href="/about"
                                    >
                                        Learn More About Us
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardContent className="p-6 min-h-full flex flex-col">
                            <h2 className="text-3xl font-bold mb-4">
                                By the Numbers
                            </h2>
                            <div className="grid grid-cols-2 gap-9 flex-grow content-center">
                                <div className="text-center">
                                    <CountUp
                                        end={3000}
                                        className="text-6xl font-bold text-primary mb-2"
                                        plus
                                    />
                                    <div className="text-muted-foreground">
                                        Students Impacted
                                    </div>
                                </div>
                                <div className="text-center">
                                    <CountUp
                                        end={5}
                                        className="text-6xl font-bold text-secondary mb-2"
                                        plus
                                    />
                                    <div className="text-muted-foreground">
                                        Global Chapters
                                    </div>
                                </div>
                                <div className="text-center">
                                    <CountUp
                                        end={50}
                                        className="text-6xl font-bold text-primary mb-2"
                                        plus
                                    />
                                    <div className="text-muted-foreground">
                                        Industry Events
                                    </div>
                                </div>
                                <div className="text-center">
                                    <CountUp
                                        end={800}
                                        className="text-6xl font-bold text-secondary mb-2"
                                        plus
                                    />
                                    <div className="text-muted-foreground">
                                        Projects Completed
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
