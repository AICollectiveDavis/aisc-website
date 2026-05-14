'use client';

import { useState, useEffect, useRef } from 'react';
import { companies } from '@/lib/data/companies';

export function WhereWeveGone() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragScrollLeft, setDragScrollLeft] = useState(0);

    const duplicatedLogos = [...companies, ...companies, ...companies];

    useEffect(() => {
        const imagePromises = companies.map((company) => {
            return new Promise((resolve, reject) => {
                const img = new window.Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = company.logo || '/placeholder.svg';
            });
        });

        Promise.all(imagePromises)
            .then(() => setImagesLoaded(true))
            .catch(() => setImagesLoaded(true));
    }, []);

    // Auto-scroll effect
    useEffect(() => {
        if (!imagesLoaded || isPaused || isDragging) return;

        const el = scrollRef.current;
        if (!el) return;

        const scrollSpeed = 1;
        let animationId: number;

        const scroll = () => {
            if (el.scrollLeft >= el.scrollWidth / 3) {
                el.scrollLeft = 0;
            }
            el.scrollLeft += scrollSpeed;
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, [imagesLoaded, isPaused, isDragging]);

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setDragScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = dragScrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsPaused(false);
    };

    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => setIsPaused(false);

    return (
        <section className="pb-8 relative z-20">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground py-8">
                        Where We&#39;ve Gone
                    </h2>
                </div>

                <div
                    className={`relative transition-opacity duration-500 ${
                        imagesLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-2 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 bottom-2 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto overflow-y-visible scrollbar-hide cursor-grab active:cursor-grabbing pb-2"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={handleMouseLeave}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {duplicatedLogos.map((company, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[140px] h-16 mx-3 flex-shrink-0 select-none overflow-hidden"
                            >
                                <div
                                    className="logo-glow w-28 h-12 bg-white pointer-events-none"
                                    style={{
                                        maskImage: `url(${company.logo})`,
                                        WebkitMaskImage: `url(${company.logo})`,
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center',
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
