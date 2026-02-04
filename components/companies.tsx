'use client';

import { useState, useEffect, useRef } from 'react';

const techCompanies = [
    { name: 'Amazon', logo: '/logos/amazon.svg' },
    { name: 'Microsoft', logo: '/logos/microsoft-cropped.svg' },
    { name: 'Apple', logo: '/logos/apple.svg' },
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'AMD', logo: '/logos/amd.svg' },
    { name: 'LinkedIn', logo: '/logos/linkedin.svg' },
    { name: 'Visa', logo: '/logos/visa-cropped.svg' },
    { name: 'IBM', logo: '/logos/IBM.svg' },
    { name: 'Tesla', logo: '/logos/tesla.png'},
    { name: 'Salesforce', logo: '/logos/salesforce.svg' },
    { name: 'CME Group', logo: '/logos/cme.svg' },
    { name: 'Mercedes-Benz', logo: '/logos/benz.svg' },
    { name: 'CVS', logo: '/logos/cvs.svg' },
    { name: 'Marvell Technology', logo: '/logos/marvell.svg' },
    { name: 'Oracle', logo: '/logos/oracle-cropped.svg' },
    { name: 'Hewlett-Packard Enterprise', logo: '/logos/hpe.svg' },
    { name: 'Siemens', logo: '/logos/siemens-cropped.svg' },
    { name: 'Walmart', logo: '/logos/walmart.svg' },
    { name: 'Freewheel', logo: '/logos/freewheel.svg' },
    { name: 'Keysight Technologies', logo: '/logos/keysight.svg' },
    { name: 'Blackhawk Network', logo: '/logos/bhn.svg' },
    { name: 'Kaiser Permanenente', logo: '/logos/kp.svg' },
    { name: 'Veeco', logo: '/logos/veeco.svg' },
    { name: 'Deloitte.', logo: '/logos/deloitte.svg' },
];

export function WhereWeveGone() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const duplicatedLogos = [...techCompanies, ...techCompanies, ...techCompanies];

    useEffect(() => {
        const imagePromises = techCompanies.map((company) => {
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
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsPaused(false);
    };

    // Touch handlers for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <section className="pb-8 bg-background relative z-20">
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
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
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
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {duplicatedLogos.map((company, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[140px] h-16 mx-3 flex-shrink-0 select-none"
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
