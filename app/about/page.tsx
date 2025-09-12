import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Users, Monitor, Shield, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About - AI Student Collective",
  description: "Learn about the AI Student Collective at UC Davis. Our mission, history, leadership team, and values.",
}

export default function About() {
  // Club values data with modern design
  const values = [
    {
      title: "Inclusive Learning",
      description:
        "We create an environment where students of all backgrounds and experience levels can learn AI concepts and skills.",
      icon: <Users className="w-10 h-10" />,
    },
    {
      title: "Hands-on Experience",
      description:
        "We emphasize practical, project-based learning that prepares students for real-world AI applications.",
      icon: <Monitor className="w-10 h-10" />,
    },
    {
      title: "Ethical Innovation",
      description:
        "We promote responsible AI development and consider the ethical implications of the technology we build.",
      icon: <Shield className="w-10 h-10" />,
    },
    {
      title: "Community Building",
      description:
        "We foster a collaborative community where members support each other and build lasting professional relationships.",
      icon: <Globe className="w-10 h-10" />,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-pink-400/10 rounded-full blur-[100px]"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Our Club</h1>
            <p className="text-muted-foreground text-lg mb-6 text-pretty">
              Building the next generation of AI leaders and innovators at UC Davis
            </p>
          </div>
        </div>
      </section>

      {/* Photo Collage - Community Section */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-pink-400/5 rounded-full blur-[80px]"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our collaborative AI journey at UC Davis
            </p>
          </div>

          <div className="relative h-[600px] md:h-[700px] max-w-6xl mx-auto my-12">
            {/* Main center photo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55%] md:w-[45%] z-10 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
              <div
                style={{ transform: `rotate(-1deg) scale(1.02)` }}
                className="bg-card p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-video overflow-hidden rounded bg-muted">
                  <Image
                    src="/ai-students-team-photo-at-uc-davis.jpg"
                    alt="AISC Team Photo"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground text-sm pt-2 px-1 font-medium">Team gathering at AI Summit</p>
              </div>
            </div>

            {/* Top left photo */}
            <div className="absolute left-[5%] md:left-[8%] top-[5%] w-[40%] md:w-[28%] z-20 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
              <div
                style={{ transform: `rotate(4deg) scale(0.98)` }}
                className="bg-card p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-square overflow-hidden rounded bg-muted">
                  <Image
                    src="/ai-workshop-students-coding.jpg"
                    alt="AI Workshop"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground text-sm pt-2 px-1 font-medium">Hands-on workshop</p>
              </div>
            </div>

            {/* Bottom right photo */}
            <div className="absolute right-[5%] md:right-[8%] bottom-[5%] w-[38%] md:w-[26%] z-30 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
              <div
                style={{ transform: `rotate(-3deg) scale(1)` }}
                className="bg-card p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-square overflow-hidden rounded bg-muted">
                  <Image
                    src="/hackathon-students-collaborating.jpg"
                    alt="Hackathon"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground text-sm pt-2 px-1 font-medium">Weekend hackathon</p>
              </div>
            </div>

            {/* Top right photo */}
            <div className="absolute right-[12%] md:right-[15%] top-[15%] w-[35%] md:w-[24%] z-15 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
              <div
                style={{ transform: `rotate(-5deg) scale(0.95)` }}
                className="bg-card p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-muted">
                  <Image
                    src="/ai-students-presenting-project.jpg"
                    alt="Project Presentation"
                    width={250}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground text-sm pt-2 px-1 font-medium">Project showcase</p>
              </div>
            </div>

            {/* Left middle photo */}
            <div className="absolute left-[2%] md:left-[5%] top-[45%] w-[32%] md:w-[22%] z-25 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
              <div
                style={{ transform: `rotate(6deg) scale(0.92)` }}
                className="bg-card p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-square overflow-hidden rounded bg-muted">
                  <Image
                    src="/ai-club-meeting-discussion.jpg"
                    alt="Club Meeting"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground text-sm pt-2 px-1 font-medium">Weekly meeting</p>
              </div>
            </div>

            {/* Bottom center photo */}
            <div className="absolute left-[35%] md:left-[38%] bottom-[8%] w-[30%] md:w-[20%] z-35 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
              <div
                style={{ transform: `rotate(2deg) scale(0.9)` }}
                className="bg-card p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded bg-muted">
                  <Image
                    src="/ai-students-networking-event.jpg"
                    alt="Networking Event"
                    width={200}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground text-sm pt-2 px-1 font-medium">Industry night</p>
              </div>
            </div>

            {/* Top center small photo */}
            <div className="absolute left-[45%] md:left-[48%] top-[8%] w-[25%] md:w-[18%] z-40 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
              <div
                style={{ transform: `rotate(-4deg) scale(0.88)` }}
                className="bg-card p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-square overflow-hidden rounded bg-muted">
                  <Image
                    src="/ai-club-award-ceremony.jpg"
                    alt="Award Ceremony"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground text-sm pt-2 px-1 font-medium">Awards night</p>
              </div>
            </div>

            {/* Right middle small photo */}
            <div className="absolute right-[2%] md:right-[4%] top-[55%] w-[28%] md:w-[19%] z-45 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
              <div
                style={{ transform: `rotate(7deg) scale(0.85)` }}
                className="bg-card p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded bg-muted">
                  <Image
                    src="/ai-students-studying-together.jpg"
                    alt="Study Session"
                    width={160}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground text-sm pt-2 px-1 font-medium">Study group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="h-1 w-16 bg-primary mb-8"></div>
              <p className="text-muted-foreground mb-6">
                The Artificial Intelligence Student Club (AISC) at UC Davis exists to foster a community of students
                passionate about artificial intelligence and its applications. We aim to bridge the gap between
                theoretical classroom learning and practical AI implementation.
              </p>
              <p className="text-muted-foreground mb-6">
                Through workshops, projects, hackathons, and industry connections, we provide students with the
                resources and support needed to thrive in the rapidly evolving field of AI. Our goal is to make AI
                education accessible to students from all disciplines and backgrounds.
              </p>
              <p className="text-muted-foreground">
                We believe in learning by doing, collaborating across disciplines, and exploring the ethical dimensions
                of AI technology.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-pink-400 blur-sm opacity-50"></div>
              <div className="relative bg-card rounded-xl overflow-hidden aspect-video border">
                <Image
                  src="/ai-students-collaborating-on-project.jpg"
                  alt="AISC members collaborating on a project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From a small study group to one of the largest tech clubs on campus
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  year: "2019",
                  title: "The Beginning",
                  description:
                    "Founded by five Computer Science students as a casual study group focused on machine learning fundamentals",
                  color: "primary",
                },
                {
                  year: "2020",
                  title: "Going Virtual",
                  description:
                    "Transitioned to virtual events during the pandemic, expanded our reach, and hosted our first virtual hackathon with 150+ participants",
                  color: "pink",
                },
                {
                  year: "2021",
                  title: "Official Recognition",
                  description:
                    "Became an officially recognized student organization, partnered with the Computer Science department, and launched our first research initiatives",
                  color: "primary",
                },
                {
                  year: "2022",
                  title: "Industry Connections",
                  description:
                    "Established partnerships with tech companies, secured sponsorships, and hosted our first AI career fair with representatives from leading tech firms",
                  color: "pink",
                },
                {
                  year: "2023",
                  title: "Expanding Horizons",
                  description:
                    "Grew to over 300 active members from 20+ majors, launched specialized interest groups, and began collaborations with other UC campuses",
                  color: "primary",
                },
                {
                  year: "Today",
                  title: "Thriving Community",
                  description:
                    "Now one of the largest and most active technical clubs on campus, with a diverse membership, numerous successful alumni, and a growing impact on campus AI culture",
                  color: "pink",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-background ${item.color === "primary" ? "bg-primary" : "bg-pink-400"}`}
                  ></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={index % 2 === 0 ? "md:text-right md:pr-10" : "md:pr-10 md:order-2"}>
                      <h3
                        className={`text-xl font-bold mb-2 ${item.color === "primary" ? "text-primary" : "text-pink-400"}`}
                      >
                        {item.year}
                      </h3>
                      <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className={index % 2 === 0 ? "md:pl-10" : "md:pl-10 md:order-1"}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our club's activities and decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
              >
                <div
                  className={`mb-6 p-4 rounded-xl inline-block ${
                    index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-pink-400/10 text-pink-400"
                  }`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join call to action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Ready to be part of our story? Join the AI Student Club at UC Davis and connect with fellow AI
              enthusiasts, learn cutting-edge skills, and build the future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/join" className="btn-primary">
                Become a Member
              </Link>
              <Link href="/team" className="btn-primary">
                Meet Our Team
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
