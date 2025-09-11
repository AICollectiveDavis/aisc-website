"use client"
import { Navigation } from "@/components/navigation"
import { TypingEffect } from "@/components/typing-effect"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"


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
              <div className="md:w-1/2 md:pr-6 relative z-50">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                  <span>AI Student </span>
                  <span className="gradient-text">Collective</span>
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground mb-6 h-12">
                  <TypingEffect text="Creating a future of AI literacy for all." />
                </div>
                <p className="text-muted-foreground mb-8 max-w-lg text-pretty">
                  Join a community of students passionate about artificial intelligence. Learn through workshops,
                  collaborate on projects, and connect with industry experts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="gradient-btn">Learn More</Button>
                  <Button className="shine-btn">Upcoming Events</Button>
                </div>
              </div>

              {/* Right Column - Animated Blobs */}
              <div className="md:w-1/2 h-[400px] md:h-[500px] relative z-40">
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
        <section className="py-16 bg-card relative z-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-balance">About Our Collective</h2>
                <p className="text-muted-foreground mb-4 text-pretty">
                  The AI Student Collective at UC Davis was founded by students passionate about artificial intelligence
                  and its potential to solve complex problems.
                </p>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Our mission is to create an inclusive environment where students can learn, collaborate, and innovate
                  in the field of AI, regardless of their background or experience level.
                </p>
                <Button variant="outline" className="shine-btn bg-transparent">
                  Learn More About Us
                </Button>
              </div>
              <div className="md:w-1/2">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">By the Numbers</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">200+</div>
                        <div className="text-muted-foreground">Active Members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                        <div className="text-muted-foreground">Workshops Per Year</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">20+</div>
                        <div className="text-muted-foreground">Industry Events</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                        <div className="text-muted-foreground">Projects Completed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 relative z-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-balance">What Our Members Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 text-pretty">
                    "Joining the AI Student Collective has been one of the best decisions of my academic career. The
                    workshops and mentorship helped me land an internship at a leading AI company."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full mr-3" />
                    <div>
                      <div className="font-medium">Abhinav Tata</div>
                      <div className="text-sm text-muted-foreground">Computer Science, Class of 2026</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 text-pretty">
                    "As someone from a non-technical background, I was intimidated by AI. This collective created such a
                    welcoming environment that I was able to learn and contribute to projects despite my initial lack of
                    experience."
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
        <section className="py-16 bg-card relative z-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Ready to Join Us?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-pretty">
              Whether you're an AI expert or just getting started, there's a place for you in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="gradient-btn">Become a Member</Button>
              <Button className="shine-btn">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
