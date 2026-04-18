import { Info, Target, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex River",
      role: "Lead Pathologist",
      linkedin: "#",
      github: "#",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      name: "Sarah Chen",
      role: "AI Research Engineer",
      linkedin: "#",
      github: "#",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Marcus Thorne",
      role: "Full Stack Developer",
      linkedin: "#",
      github: "#",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    {
      name: "John Doe",
      role: "UI/UX Designer",
      linkedin: "#",
      github: "#",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    }
  ]

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
  )

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
  )

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-24">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About PlantGuard</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
          We are dedicated to revolutionizing agricultural health monitoring through artificial intelligence,
          making expert-level plant pathology accessible to everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="space-y-4 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Our mission is to reduce crop loss and promote sustainable agricultural practices worldwide. By providing instant access to disease diagnosis, we help prevent the spread of pathogens and minimize the need for broad-spectrum chemical treatments.
          </p>
        </div>

        <div className="space-y-4 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
            <BookOpen className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">How It Works</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Using advanced Convolutional Neural Networks (CNN), PlantGuard analyzes the visual patterns on plant leaves. Our model has been trained on over 100,000 images representing various health states and diseases across dozens of species.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold">Community Driven</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We are a group of plant pathologists, data scientists, and developers dedicated to bridging the gap between high-tech research and field-ready solutions.
            </p>
          </div>

          <div className="space-y-4 p-8 rounded-3xl bg-emerald-600 text-white shadow-xl shadow-emerald-600/20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md">
              <Info className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold">Privacy First</h2>
            <p className="opacity-90 leading-relaxed">
              We don't store your personal photos unless you explicitly choose to contribute them to our research database. Your data and location always remain under your control.
            </p>
          </div>
        </div>
      </div>


      {/* Team Section */}
      <section className="mt-22">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-zinc-500 dark:text-zinc-400">The brilliant minds behind PlantGuard.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group p-4 md:p-6 rounded-[2rem] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all hover:-translate-y-1">
              <div className="relative mb-4 mx-auto w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-base md:text-lg font-bold mb-1 line-clamp-1">{member.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-xs md:text-sm font-medium mb-4 line-clamp-1">{member.role}</p>
                <div className="flex justify-center gap-2 md:gap-3">
                  <Link
                    href={member.linkedin}
                    className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-lg md:rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link
                    href={member.github}
                    className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-lg md:rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <GitHubIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
