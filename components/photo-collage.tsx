'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog as RadixDialog } from 'radix-ui';
import { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTitle } from '@/components/ui/dialog';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';

const photos = [
    { src: '/pics/grad_25.jpg',        alt: 'AI Collective team photo', caption: "Class of '25 Grads!",                                rotate: '-1deg', scale: 1.02 },
    { src: '/pics/bp_wq_showcase.JPG', alt: 'AI Workshop',              caption: "WQ '25 Beginner Projects",                           rotate: '4deg',  scale: 1    },
    { src: '/pics/r&d.jpeg',           alt: 'R&D Team',                 caption: 'R&D winning Best Research Award at CSS Escape 2025!', rotate: '-3deg', scale: 1    },
    { src: '/pics/WomenInTech.jpg',    alt: 'Project Presentation',     caption: 'Annual Women in Tech Event',                         rotate: '-5deg', scale: 0.95 },
    { src: '/pics/winter_kickoff.PNG', alt: 'Winter 2025 Kickoff',      caption: 'Quarterly Kickoff Meeting',                          rotate: '6deg',  scale: 0.92 },
    { src: '/pics/tuff_ahh_merch.jpg', alt: 'Merch!',                   caption: 'Merch!',                                             rotate: '2deg',  scale: 1    },
    { src: '/pics/retreat.jpg',        alt: 'Yosemite Winter Retreat',  caption: 'Yosemite Winter Retreat!',                           rotate: '-4deg', scale: 1    },
    { src: '/pics/current_board.jpg',  alt: 'AI Collective',            caption: 'A-I-S-C',                                           rotate: '7deg',  scale: 1.1  },
];

const layout = [
    { pos: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', w: 'w-[72%] md:w-[64%]', z: 'z-10', aspect: 'aspect-video'  },
    { pos: 'left-[0%] top-[3%]',                                  w: 'w-[50%] md:w-[40%]', z: 'z-20', aspect: 'aspect-video'  },
    { pos: 'left-[18%] bottom-[4%]',                              w: 'w-[44%] md:w-[34%]', z: 'z-30', aspect: 'aspect-square' },
    { pos: 'right-[8%] top-[8%]',                                 w: 'w-[44%] md:w-[34%]', z: 'z-15', aspect: 'aspect-[4/3]' },
    { pos: 'left-[0%] top-[44%]',                                 w: 'w-[42%] md:w-[32%]', z: 'z-25', aspect: 'aspect-square' },
    { pos: 'left-[32%] bottom-[2%]',                              w: 'w-[40%] md:w-[30%]', z: 'z-35', aspect: 'aspect-[3/4]' },
    { pos: 'left-[42%] top-[2%]',                                 w: 'w-[36%] md:w-[27%]', z: 'z-40', aspect: 'aspect-square' },
    { pos: 'right-[0%] top-[50%]',                                w: 'w-[50%] md:w-[38%]', z: 'z-45', aspect: 'aspect-[4/3]' },
];

// ── Carousel slide area — no built-in nav buttons, controlled by PhotoLightbox ─
function PhotoCarousel({
    startIndex,
    setApi,
}: {
    startIndex: number;
    setApi: (api: CarouselApi) => void;
}) {
    const [internalApi, setInternalApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(startIndex);

    useEffect(() => {
        if (!internalApi) return;
        setApi(internalApi);
        internalApi.scrollTo(startIndex, true);
    }, [internalApi, startIndex, setApi]);

    useEffect(() => {
        if (!internalApi) return;
        const onSelect = () => setCurrent(internalApi.selectedScrollSnap());
        internalApi.on('select', onSelect);
        return () => { internalApi.off('select', onSelect); };
    }, [internalApi]);

    return (
        <div className="w-full max-w-3xl">
            <Carousel setApi={setInternalApi} opts={{ loop: true }}>
                <CarouselContent>
                    {photos.map((photo) => (
                        <CarouselItem key={photo.src}>
                            <div className="flex flex-col items-center">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={1400}
                                    height={900}
                                    className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-md drop-shadow-2xl"
                                    priority
                                />
                                <p className="text-white/90 text-base font-medium mt-4">{photo.caption}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-center text-white/40 text-xs mt-3 tracking-widest">
                {current + 1} / {photos.length}
            </p>
        </div>
    );
}

// ── Lightbox — nav buttons live on the dialog shell, clear of the image ───────
function PhotoLightbox({ startIndex, onClose }: { startIndex: number; onClose: () => void }) {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <Dialog open onOpenChange={open => !open && onClose()}>
            <DialogPortal>
                <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
                <RadixDialog.Content
                    className="fixed inset-0 z-50 flex items-center justify-center outline-none"
                >
                    <DialogTitle className="sr-only">Photo Gallery</DialogTitle>

                    <DialogClose className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10">
                        <X className="w-5 h-5" />
                        <span className="sr-only">Close</span>
                    </DialogClose>

                    <button
                        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 z-10"
                        onClick={() => api?.scrollPrev()}
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </button>

                    <PhotoCarousel startIndex={startIndex} setApi={setApi} />

                    <button
                        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 z-10"
                        onClick={() => api?.scrollNext()}
                    >
                        <ChevronRight className="w-7 h-7" />
                    </button>
                </RadixDialog.Content>
            </DialogPortal>
        </Dialog>
    );
}

// ── Polaroid collage grid ──────────────────────────────────────────────────────
export function PhotoCollage() {
    const [openIndex, setOpenIndex]     = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [exploded, setExploded]       = useState(false);
    const [visible, setVisible]         = useState(false);
    const [settled, setSettled]         = useState(false);
    const [offsets, setOffsets]         = useState<{ dx: number; dy: number }[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);

    // Measure each card's center relative to the container center — runs once before paint.
    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const cRect   = container.getBoundingClientRect();
        const centerX = cRect.left + cRect.width  / 2;
        const centerY = cRect.top  + cRect.height / 2;

        setOffsets(
            cardRefs.current.map((card) => {
                if (!card) return { dx: 0, dy: 0 };
                const r = card.getBoundingClientRect();
                return {
                    dx: centerX - (r.left + r.width  / 2),
                    dy: centerY - (r.top  + r.height / 2),
                };
            })
        );
    }, []);

    // Trigger explosion when the collage scrolls into view; reset when it leaves.
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let settledTimer: ReturnType<typeof setTimeout>;
        let rafId: number;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    rafId = requestAnimationFrame(() => {
                        setExploded(true);
                        // switch to hover-friendly transition after all cards finish
                        settledTimer = setTimeout(() => setSettled(true), 1200);
                    });
                } else {
                    clearTimeout(settledTimer);
                    cancelAnimationFrame(rafId);
                    setExploded(false);
                    setVisible(false);
                    setSettled(false);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(container);
        return () => {
            observer.disconnect();
            clearTimeout(settledTimer);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className="relative h-[440px] md:h-[560px] w-full">
                {photos.map((photo, i) => {
                    const l        = layout[i];
                    const isHovered = hoveredIndex === i;
                    const zClass   = isHovered ? 'z-50' : l.z;
                    const scale    = isHovered && exploded ? photo.scale * 1.05 : photo.scale;
                    const offset   = offsets[i] ?? { dx: 0, dy: 0 };

                    const innerTransform = exploded
                        ? `rotate(${photo.rotate}) scale(${scale})`
                        : `translate(${offset.dx}px, ${offset.dy}px) rotate(0deg) scale(0.15)`;

                    const innerTransition = settled
                        ? 'transform 0.3s ease-out'
                        : exploded
                            ? `transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 55}ms`
                            : 'none';

                    return (
                        <div
                            key={photo.src}
                            ref={el => { cardRefs.current[i] = el; }}
                            className={`absolute ${l.pos} ${l.w} ${zClass} cursor-pointer`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setOpenIndex(i)}
                        >
                            <div
                                style={{
                                    transform: innerTransform,
                                    transition: innerTransition,
                                    visibility: visible ? 'visible' : 'hidden',
                                }}
                                className={`bg-white p-3 rounded-lg border ${isHovered ? 'shadow-2xl' : 'shadow-xl'}`}
                            >
                                <div className={`relative ${l.aspect} overflow-hidden rounded bg-muted`}>
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 70vw, 40vw"
                                    />
                                </div>
                                <p className="text-foreground/70 text-sm pt-2 px-1 font-medium">{photo.caption}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {openIndex !== null && (
                <PhotoLightbox startIndex={openIndex} onClose={() => setOpenIndex(null)} />
            )}
        </>
    );
}
