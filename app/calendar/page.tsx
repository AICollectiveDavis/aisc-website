"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  lumaLink: string
  tags: string[]
}

const events: Event[] = [
  {
    id: "1",
    title: "AI Symposium",
    date: "November 5, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "Teaching and Learning Complex, 1020",
    description: "The AI Student Collective and NeuroTech invite you to the 4th Annual AI Symposium, an evening dedicated to exploring how artificial intelligence is transforming the world as we know it. From groundbreaking research to real-world applications, this event brings together visionaries from academia and industry who are shaping the future of AI across disciplines.",
    image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=300,height=300/event-covers/so/5f747d5a-ac52-4af5-9100-a74d344ebe6e.png",
    lumaLink: "https://luma.com/ewt69hf3",
    tags: ["Machine Learning", "Neuroscience", "Data Ethics"]
  },
]

const pastEvents: Event[] = [
  {
    id: "p1",
    title: "3rd Annual Tech Mixer",
    date: "Tuesday, September 30, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Teaching and Learning Complex, 1020",
    description: "​The AI Student Collective (AISC) and AggieWorks are thrilled to welcome you to the 3rd Annual Tech Mixer on Tuesday, September 30th, from 7:00–10:00pm @ TLC 1020. ​This event connects you with the vibrant tech community on campus. Get ready for an evening filled with lightning pitches from 25+ tech organizations, a keynote from an industry-leading speaker, Kent Williams from Retro, networking with student leaders and peers, free food, drinks, and professional headshots!",
    image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=300,height=300/event-covers/qn/e2426584-51f6-4117-99e7-caa04880f65f.png",
    lumaLink: "https://luma.com/lnzd5z27?tk=8ZA3uN",
    tags: ["Student Organizations", "Community", "Networking"]
  },
]

export default function CalendarPage() {
  const [showPastEvents, setShowPastEvents] = useState(false)
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none z-0" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <div
          className="absolute top-20 right-20 w-96 h-96 rounded-full filter blur-2xl animate-float blur-seamless"
          style={{
            backgroundColor: "rgba(14, 165, 233, 0.3)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full filter blur-2xl animate-float animation-delay-2000 blur-seamless"
          style={{
            backgroundColor: "rgba(249, 168, 212, 0.3)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl mb-6 font-bold gradient-text">
              Upcoming Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Join us for workshops, panels, showcases, and social events. Connect with the AI community, 
              learn new skills, and build lasting friendships.
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-2 p-1 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[400px] max-h-[400px] aspect-square">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full rounded-xl"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 p-4 md:p-6 flex flex-col justify-between">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                          {event.title}
                        </h2>

                        {/* Event Details */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-5 w-5 mr-3 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-5 w-5 mr-3 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-5 w-5 mr-3 text-primary" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {event.description}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="flex gap-4">
                        <Button asChild className="gradient-btn flex-1 md:flex-initial">
                          <a 
                            href={event.lumaLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2"
                          >
                            RSVP on Luma
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

                    {/* Past Events Section */}
          <div className="mt-12 hover:bg-muted/30 transition-colors">
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setShowPastEvents(!showPastEvents)}
                  className="w-full p-3 md:p-4 flex items-center justify-between transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-lg font-bold mb-0.5">Past Events</h3>
                    <p className="text-xs text-muted-foreground">
                      View our previous workshops, socials, and community gatherings
                    </p>
                  </div>
                  {showPastEvents ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
                  )}
                </button>

                {showPastEvents && (
                  <div className="border-t border-border/50 p-3 md:p-4 space-y-4 animate-in fade-in duration-300">
                    {pastEvents.map((event) => (
                      <Card 
                        key={event.id} 
                        className="glass-card overflow-hidden hover:bg-muted/30 transition-all duration-300"
                      >
                        <CardContent className="p-0">
                          <div className="grid md:grid-cols-5 gap-0">
                            {/* Image Section */}
                            <div className="md:col-span-2 p-1 flex items-center justify-center">
                              <div className="relative w-full h-full max-w-[400px] max-h-[400px] aspect-square">
                                <Image
                                  src={event.image}
                                  alt={event.title}
                                  width={400}
                                  height={400}
                                  className="object-cover w-full h-full opacity-70 rounded-xl"
                                  sizes="(max-width: 768px) 100vw, 40vw"
                                />
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="md:col-span-3 p-3 md:p-4 flex flex-col justify-between">
                              <div>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-2">
                                  {event.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 bg-muted/50 text-muted-foreground text-xs font-medium rounded-full border border-border/50"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">
                                  {event.title}
                                </h3>

                                {/* Event Details */}
                                <div className="space-y-1 mb-2">
                                  <div className="flex items-center text-muted-foreground">
                                    <Calendar className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                                    <span className="text-xs">{event.date}</span>
                                  </div>
                                  <div className="flex items-center text-muted-foreground">
                                    <Clock className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                                    <span className="text-xs">{event.time}</span>
                                  </div>
                                  <div className="flex items-center text-muted-foreground">
                                    <MapPin className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                                    <span className="text-xs">{event.location}</span>
                                  </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Empty State / Call to Action */}
          <div className="mt-12 text-center">
            <Card className="glass-card">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3">Don&apos;t Miss Out!</h3>
                <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
                  Stay updated on all our events by following us on social media and joining our community. 
                  New events are added regularly!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button asChild size="sm">
                    <Link href="/join" className="gradient-btn">
                      Join Our Community
                    </Link>
                  </Button>
                  <Button className="shine-btn">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>

                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  )
}
