'use client';

import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface CountUpProps {
    end: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export function CountUp({ end, suffix = '', duration = 2000, className }: CountUpProps) {
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useScrollReveal();

    useEffect(() => {
        if (!isVisible) return;
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <span ref={ref} className={className}>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}
