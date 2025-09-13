"use client"
import { Navigation } from "@/components/navigation"
import { TypingEffect } from "@/components/typing-effect"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { WhereWeveGone } from "@/components/companies"
import { AboutSection } from "@/components/about"
import CTASection from "@/components/cta"


export default function HomePage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    innovation: true,
    development: false,
    operations: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="relative">
        {/* Background patterns and effects */}
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none z-0" />

        {/* Animated background orbs - moved to lower z-index */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          <div
            className="absolute top-20 left-20 w-64 h-64 rounded-full filter blur-2xl animate-float blur-seamless"
            style={{
              backgroundColor: "rgba(14, 165, 233, 0.4)",
              boxShadow: "0 0 40px rgba(14, 165, 233, 0.2)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute top-40 right-20 w-96 h-96 rounded-full filter blur-2xl animate-float animation-delay-2000 blur-seamless"
            style={{
              backgroundColor: "rgba(249, 168, 212, 0.4)",
              boxShadow: "0 0 40px rgba(249, 168, 212, 0.2)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="absolute inset-0 mesh-pattern opacity-30 pointer-events-none z-10" />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden z-30">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          <div className="container relative z-40 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
              {/* Left Column - Text Content */}
              <div className="ml-12 md:w-1/2 md:pr-12 relative z-50">
                <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                  <span>AI Student <br /> Collective</span>
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground mb-6 h-12">
                  <TypingEffect text="Creating a future of AI literacy for all." />
                </div>
                <p className="text-muted-foreground mb-8 max-w-lg text-pretty">
                  A global network of student organizations dedicated to making AI literacy accessible for everyone. Through pre-professional programs, hands-on events, and industry connections, we’re building a more informed, diverse, and equitable future in AI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link className="gradient-btn" href="/about">Learn More</Link>
                  </Button>
                  <Button asChild>
                    <Link className="shine-btn" href="/calendar">Upcoming Events</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Animated Blobs */}
              <div className="blur md:w-1/2 h-[400px] md:h-[500px] relative z-40">
                <div className="absolute inset-0 overflow-hidden">
                  {/* Primary blob - blue */}
                  <div
                    className="absolute w-[60%] h-[60%] top-[20%] left-[25%] animate-morph blur-edge-fade"
                    style={{
                      background: "linear-gradient(135deg, rgba(14, 165, 233, 0.6), rgba(14, 165, 233, 0.2))",
                      borderRadius: "60% 40% 50% 50% / 40% 50% 50% 60%",
                      filter: "blur(50px)",
                      animationDuration: "20s",
                      transform: "rotate(-5deg)",
                      boxShadow: "0 0 80px rgba(14, 165, 233, 0.3)",
                    }}
                  />

                  {/* Secondary blob - pink */}
                  <div
                    className="absolute w-[50%] h-[50%] top-[30%] left-[40%] animate-morph animation-delay-1000 blur-edge-fade"
                    style={{
                      background: "linear-gradient(135deg, rgba(249, 168, 212, 0.5), rgba(249, 168, 212, 0.15))",
                      borderRadius: "50% 60% 40% 50% / 60% 40% 60% 40%",
                      filter: "blur(40px)",
                      animationDuration: "25s",
                      transform: "rotate(10deg)",
                      boxShadow: "0 0 60px rgba(249, 168, 212, 0.25)",
                    }}
                  />

                  {/* Additional accent blobs */}
                  <div
                    className="absolute w-[45%] h-[45%] top-[15%] left-[10%] animate-morph animation-delay-2000 blur-soft-edge"
                    style={{
                      background: "linear-gradient(135deg, rgba(14, 165, 233, 0.4), rgba(14, 165, 233, 0.08))",
                      borderRadius: "40% 60% 70% 30% / 50% 60% 40% 50%",
                      filter: "blur(35px)",
                      animationDuration: "20s",
                      transform: "rotate(-10deg)",
                      boxShadow: "0 0 40px rgba(14, 165, 233, 0.2)",
                    }}
                  />

                  <div
                    className="absolute w-[40%] h-[40%] top-[45%] left-[5%] animate-morph animation-delay-3000 blur-soft-edge"
                    style={{
                      background: "linear-gradient(135deg, rgba(249, 168, 212, 0.45), rgba(249, 168, 212, 0.08))",
                      borderRadius: "50% 30% 60% 40% / 30% 60% 40% 70%",
                      filter: "blur(30px)",
                      animationDuration: "22s",
                      transform: "rotate(15deg)",
                      boxShadow: "0 0 50px rgba(249, 168, 212, 0.2)",
                    }}
                  />

                  {/* Small accent elements */}
                  <div
                    className="absolute w-[20%] h-[20%] top-[20%] right-[15%] animate-float animation-delay-2500 blur-seamless"
                    style={{
                      background: "radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0) 70%)",
                      borderRadius: "50%",
                      filter: "blur(20px)",
                    }}
                  />

                  <div
                    className="absolute w-[15%] h-[15%] bottom-[25%] right-[20%] animate-float animation-delay-1500 blur-seamless"
                    style={{
                      background: "radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(14, 165, 233, 0) 70%)",
                      borderRadius: "50%",
                      filter: "blur(18px)",
                    }}
                  />

                  <div
                    className="absolute w-[12%] h-[12%] bottom-[20%] left-[30%] animate-float animation-delay-3500 blur-seamless"
                    style={{
                      background: "radial-gradient(circle, rgba(249, 168, 212, 0.5) 0%, rgba(249, 168, 212, 0) 70%)",
                      borderRadius: "50%",
                      filter: "blur(15px)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Where We've Gone Section */}
        <WhereWeveGone/>

        {/* Testimonials */}
        <section className="pb-12 bg-background relative z-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* <h2 className="text-3xl font-bold mb-8 text-center text-balance">What Our Members Say</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardContent className="px-6">
                  <p className="text-muted-foreground mb-4 text-pretty">
                    AISC has helped me build my technical, leadership, and communication skills (landed me two internships!), but more importantly, helped me meet some of my closest friends. I think anywone who is looking for strong community and diverse experience should heavily consider joining!
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full mr-3" />
                    <div>
                      <div className="font-medium">Abhinav Tata</div>
                      <div className="text-sm text-muted-foreground">Computer Science + Statistics (ML)<br />c/o 2026</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="px-6">
                  <p className="text-muted-foreground mb-4 text-pretty">
                    &quot;As someone from a non-technical background, I was intimidated by AI. This collective created such a
                    welcoming environment that I was able to learn and contribute to projects despite my initial lack of
                    experience.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary rounded-full mr-3" />
                    <div>
                      <div className="font-medium">Morgan Johnson</div>
                      <div className="text-sm text-muted-foreground">Cognitive Science, Class of 2024</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  )
}
