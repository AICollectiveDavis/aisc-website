import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Team() {
  const executives = [
    {
      name: "Curtis Chen",
      role: "President",
  // vertical: "Executive",
      image: "/images/exec/yo-gurtis.png",
      description: "Computer Science + Psychology, 4th Year",
      links: {
        linkedin: "https://linkedin.com/in/curtischen",
        github: "https://github.com",
        email: "curtis@aisc.com",
      },
    },
    {
      name: "Prati Mehta",
      role: "Vice President, Operations",
  // vertical: "Operations",
      image: "/images/exec/ppmehta.png",
      description: "Cognitive Science & Statistics, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "prati@aisc.com",
      },
    },
    {
      name: "Isha Rawal",
      role: "Vice President, Innovation",
  // vertical: "Innovation",
      image: "/images/exec/goat.png",
      description: "Applied Math, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "isha@aisc.com",
      },
    },
    {
      name: "Sathvik Parasa",
      role: "Vice President, Member Development",
  // vertical: "Member Development",
      image: "/images/exec/goat(secondary).png",
      description: "Computer Science and Engineering, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "sathvik@aisc.com",
      },
    },
    {
      name: "Crystal Garcia",
      role: "Director, Finance",
      vertical: "Executive",
      image: "/images/exec/goat(secondary).png",
      description: "Data Science, 2nd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "sathvik@aisc.com",
      },
    },
    {
      name: "Pearl Vishen",
      role: "Director, Internal Affairs",
      vertical: "Executive",
      image: "/images/exec/goat(secondary).png",
      description: "Data Science, 2nd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "sathvik@aisc.com",
      },
    },
  ]

  const memberDevelopment = [
    {
      name: "Morgan Johnson",
      role: "Director,  Education",
  // vertical: "Member Development",
      image: "/professional-headshot.png",
      description: "Computer Science, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "alex@aisc.com",
      },
    },
    {
      name: "Senara Millawabandara",
      role: "Director,  Education",
  // vertical: "Member Development",
      image: "/professional-headshot.png",
      description: "Data Science, 2nd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "sarah@aisc.com",
      },
    },
    {
      name: "Saanika Gupta",
      role: "Director, Beginner Projects",
  // vertical: "Member Development",
      image: "/professional-headshot.png",
      description: "Computer Engineering, 4th Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "michael@aisc.com",
      },
    },
    {
      name: "Jasleen Gunsi",
      role: "Director, UXR",
      vertical: "Member Development",
      image: "/professional-headshot.png",
      description: "Computer Engineering, 4th Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "michael@aisc.com",
      },
    },
  ]

  const innovation = [
    {
      name: "Aparna Chatterjee",
      role: "Director, R&D",
  // vertical: "Innovation",
      image: "/professional-headshot.png",
      description: "Computer Science, Graduate Student",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "emma@aisc.com",
      },
    },
    {
      name: "Abhinav Tata",
      role: "Engineering Manager",
  // vertical: "Innovation",
      image: "/professional-headshot.png",
      description: "Data Science, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "david@aisc.com",
      },
    },
    {
      name: "Jonathan Levitsky",
      role: "Engineering Manager",
  // vertical: "Innovation",
      image: "/professional-headshot.png",
      description: "Computer Engineering, 4th Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "lisa@aisc.com",
      },
    },
    {
      name: "Keren Skariah",
      role: "Engineering Manager",
  // vertical: "Innovation",
      image: "/professional-headshot.png",
      description: "Computer Engineering, 4th Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "lisa@aisc.com",
      },
    },
        {
      name: "Nelson Lee",
      role: "Engineering Manager",
  // vertical: "Innovation",
      image: "/professional-headshot.png",
      description: "Computer Engineering, 4th Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "lisa@aisc.com",
      },
    },
            {
      name: "Laasya Madgula",
      role: "Engineering Manager",
  // vertical: "Innovation",
      image: "/professional-headshot.png",
      description: "Computer Engineering, 4th Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "lisa@aisc.com",
      },
    },
  ]

  const operations = [
    {
      name: "Madeline Sullivan",
      role: "Director, Content Strategy",
  // vertical: "Operations",
      image: "/images/exec/ihatemybffinalboss.png",
      description: "Business Administration, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        email: "crystal@aisc.com",
      },
    },
    {
      name: "Keila Bautista",
      role: "Director, Design",
  // vertical: "Operations",
      image: "/images/exec/twin.png",
      description: "Computer Engineering, 2nd Year",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.coexem",
        email: "pearl@aisc.com",
      },
    },
    {
      name: "Akshi Rajendran",
      role: "Director,  External Affairs",
  // vertical: "Operations",
      image: "/professional-headshot.png",
      description: "Marketing, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        email: "james@aisc.com",
      },
    },
    {
      name: "Renee Odoi",
      role: "Director,  External Affairs",
  // vertical: "Operations",
      image: "/professional-headshot.png",
      description: "Marketing, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        email: "james@aisc.com",
      },
    },
        {
      name: "Sruti Elangovan",
      role: "Photographer",
  // vertical: "Operations",
      image: "/professional-headshot.png",
      description: "Marketing, 3rd Year",
      links: {
        linkedin: "https://linkedin.com",
        email: "james@aisc.com",
      },
    },
  ]

  const TeamCard = ({ member }: { member: any }) => (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/20 to-accent/20">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
          <p className="text-primary font-medium mb-2">{member.role}</p>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
        <div className="flex space-x-3">
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.links.github && (
            <a
              href={member.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {member.links.email && (
            <a
              href={`mailto:${member.links.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )

  const TeamSection = ({ title, members, id }: { title: string; members: any[]; id: string }) => (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 id={id} className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-8 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mt-16 text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Team</h1>
            <p className="text-muted-foreground text-lg">
              Meet the dedicated students who make AISC @ Davis possible.
            </p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <TeamSection title="Executives" members={executives} id="executives" />

      <TeamSection title="Member Development" members={memberDevelopment} id="member-development" />

      <TeamSection title="Innovation" members={innovation} id="innovation" />

      <TeamSection title="Operations" members={operations} id="operations" />

      {/* Join Team CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Want to Join Our Team?</h2>
          <p className="text-muted-foreground">
            We&#39;re always looking for passionate students to help lead AISC initiatives and events. Leadership positions
            open at the end of each academic year. Keep an eye out for applications!
          </p>
          {/* <button className="gradient-btn">Learn About Leadership Opportunities</button> */}
        </div>
      </section>
    </div>
  )
}
