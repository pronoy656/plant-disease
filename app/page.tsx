import Link from "next/link"
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Zap,
  UploadCloud,
  Activity,
  FileText,
  CheckCircle,
  Users,
  Award,
  Globe
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-48 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background Decorative Gradients */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-8 border border-emerald-200 dark:border-emerald-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Leaf className="h-4 w-4" />
            <span>AI-Powered Plant Pathology</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mb-8 leading-[1.1]">
            Protect Your Harvest with <span className="bg-gradient-to-br from-emerald-600 to-green-400 bg-clip-text text-transparent">AI Precision</span>
          </h1>
          <p className="max-w-[800px] text-zinc-500 dark:text-zinc-400 text-lg md:text-2xl mb-12 leading-relaxed">
            Instantly identify plant diseases, get expert treatment recommendations, and prevent crop loss with just a single photo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/create"
              className="group inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-600 px-10 text-lg font-bold text-white shadow-xl shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-95"
            >
              Scan Your Plant
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm px-10 text-lg font-bold shadow-sm transition-all hover:bg-white dark:hover:bg-zinc-900 active:scale-95"
            >
              Explore Guide
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">Get expert diagnosis in three simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: UploadCloud, title: "1. Snap or Upload", desc: "Take a clear picture of the affected leaf or upload from your gallery." },
              { icon: Activity, title: "2. Deep Analysis", desc: "Our neural network scans the image for patterns and symptoms." },
              { icon: FileText, title: "3. Get Results", desc: "Receive a detailed report with disease identification and treatment tips." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-lg">
                <div className="h-16 w-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 font-bold shadow-inner">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full py-6 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-[3rem] bg-zinc-900 dark:bg-emerald-900/10 p-12 md:p-24 overflow-hidden border border-zinc-800 dark:border-emerald-800/20 shadow-2xl text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] -ml-48 -mb-48" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Save Your Plants?</h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-12">Join thousands of farmers scaling their production with smart disease management.</p>
              <Link
                href="/create"
                className="inline-flex h-16 items-center justify-center rounded-2xl bg-white text-zinc-900 px-6 font-bold shadow-xl transition-all hover:bg-zinc-100 active:scale-95"
              >
                Start Scan
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
