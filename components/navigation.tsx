'use client';

import Link from 'next/link';
import Logo from '../public/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative h-10 w-8 mr-5 transform transition-all duration-300 group-hover:scale-105">
                            <Image
                                src={Logo}
                                alt="AI Student Collective Logo"
                                fill
                                priority
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'left',
                                }}
                                className="brightness-110 drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(14,165,233,0.7)]"
                            />
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-4">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white">
                                        Initiatives
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <div className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                                                        href="/initiatives"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            Our Initiatives
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Explore our various
                                                            programs and
                                                            projects designed to
                                                            advance AI literacy.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </div>

                                            {/* BEGINNER PROJECTS BLOCK */}
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/initiatives/#bp"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                                                >
                                                    <div className="text-sm font-medium leading-none">
                                                        Beginner Projects
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        New to AI/ML? Start here
                                                        with 6-week long group
                                                        projects.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>

                                            {/* SOFTWARE ENGINEERING BLOCK */}
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/initiatives/#swe"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                                                >
                                                    <div className="text-sm font-medium leading-none">
                                                        Software Engineering
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Learn industry practices
                                                        while developing a
                                                        year-long project.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>

                                            {/* R&D BLOCK */}
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/initiatives/#research"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                                                >
                                                    <div className="text-sm font-medium leading-none">
                                                        R&D
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Collaborate on
                                                        cutting-edge AI research
                                                        initiatives.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white">
                                        Teams
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <div className="row-span-4">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                                                        href="/teams"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            Our Teams
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Explore our
                                                            leadership and
                                                            branches and find
                                                            your fit.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </div>
                                            {/* INNOVATION */}
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/teams/#innovation"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                                                >
                                                    <div className="text-sm font-medium leading-none">
                                                        Innovation
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Everything technical.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>

                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/teams/#member-development"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                                                >
                                                    <div className="text-sm font-medium leading-none">
                                                        Member Development
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Skill building,
                                                        leadership, and
                                                        community.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>

                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/teams/#operations"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium leading-none">
                                                        Operations
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        The gears that keep us
                                                        running.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/about"
                                            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                        >
                                            About Us
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                            </NavigationMenuList>
                        </NavigationMenu>

                        <Button className="gradient-btn">
                            <Link href="/join">Join Us</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border/50">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/initiatives"
                                className="text-muted-foreground hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white transition-colors rounded-md px-2 py-1"
                            >
                                Initiatives
                            </Link>
                            <Link
                                href="/teams"
                                className="text-muted-foreground hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white transition-colors rounded-md px-2 py-1"
                            >
                                Teams
                            </Link>
                            <Link
                                href="/about"
                                className="text-muted-foreground hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white transition-colors rounded-md px-2 py-1"
                            >
                                About Us
                            </Link>
                            <Button className="gradient-btn w-fit">
                                Join Us
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
