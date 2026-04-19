"use client"

import * as React from "react"
import {
  BookOpen,
  Droplets,
  Sun,
  Wind,
  Thermometer,
  Leaf,
  Bug,
  AlertTriangle,
  CheckCircle2,
  Search,
  ChevronRight,
  Sprout,
  Info,
  Layers,
  Scissors,
  SearchCheck,
  Stethoscope,
  Calendar,
  RefreshCw,
  Sparkles,
  ClipboardCheck,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

type Tab = "tips" | "problems" | "healthy"

export default function GuidePage() {
  const [activeTab, setActiveTab] = React.useState<Tab>("tips")

  const tabs = [
    { id: "tips", label: "Care Tips", fullLabel: "Plant Care Tips", icon: Leaf },
    { id: "problems", label: "Problems", fullLabel: "Common Problems", icon: Bug },
    { id: "healthy", label: "Guides", fullLabel: "Healthy Plant Guide", icon: CheckCircle2 },
  ]

  const infographicTips = [
    {
      id: "01",
      title: "Watering",
      icon: Droplets,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      content: "Most plants prefer to dry out slightly between waterings. Use the 'finger test'—if the top inch of soil is dry, it's time to water.",
    },
    {
      id: "02",
      title: "Temperature and Humidity",
      icon: Thermometer,
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      content: "Understand your plant's origin; tropical plants love humidity while succulents prefer dry air. Avoid drafts from heaters or AC.",
    },
    {
      id: "03",
      title: "Lighting",
      icon: Sun,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      content: "Light is food for plants. Match your plant's light requirements (Direct, Bright Indirect, or Low Light) to your home's windows.",
    },
    {
      id: "04",
      title: "Fertilizing",
      icon: Sprout,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      content: "Feed your plants during the growing season (Spring and Summer). Always follow package instructions to avoid root burn.",
    },
    {
      id: "05",
      title: "Pruning and Trimming",
      icon: Scissors,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      content: "Remove dead or yellowing leaves to encourage new growth and prevent disease spread. Always use clean, sharp tools.",
    },
    {
      id: "06",
      title: "Pests and Diseases",
      icon: Bug,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      content: "Check your plants regularly for unwanted guests. Early detection of pests like spider mites or aphids makes treatment much easier.",
    },
    {
      id: "07",
      title: "Soil Quality",
      icon: Layers,
      color: "text-stone-500",
      bgColor: "bg-stone-50 dark:bg-stone-900/20",
      content: "A well-draining soil mix is essential for preventing root rot. Choose a mix specific to your plant type (e.g., Cactus mix vs. Tropical mix).",
    }
  ]

  const commonProblems = [
    {
      title: "Yellow Leaves",
      emoji: "🟡",
      color: "amber",
      cause: "Overwatering or Lack of Sunlight",
      solution: "Allow soil to dry completely before next watering and move to a brighter spot.",
      signs: ["Pale foliage", "Wilting despite wet soil", "Soft stems"]
    },
    {
      title: "Brown / Dry Leaves",
      emoji: "🍂",
      color: "orange",
      cause: "Underwatering or Low Humidity",
      solution: "Increase watering frequency and mist the leaves daily or use a pebble tray.",
      signs: ["Crispy edges", "Curling leaves", "Dropping old leaves"]
    },
    {
      title: "Pest Attack (aphids, insects)",
      emoji: "🐛",
      color: "red",
      cause: "Spider Mites, Aphids, or Mealybugs",
      solution: "Wipe leaves with neem oil solution and isolate the plant from others.",
      signs: ["Sticky residue", "Webbing", "Visible tiny moving dots"]
    },
    {
      title: "Leaf Spots (fungus)",
      emoji: "⚫",
      color: "zinc",
      cause: "Fungal or Bacterial Infection",
      solution: "Remove affected leaves immediately and improve air circulation.",
      signs: ["Dark circular spots", "Yellow halos", "Fuzzy texture on leaves"]
    },
    {
      title: "Slow Growth",
      emoji: "🌱",
      color: "emerald",
      cause: "Nutrient Deficiency or Small Pot",
      solution: "Apply balanced fertilizer during growing season or repot into a larger vessel.",
      signs: ["No new leaves", "Small foliage", "Roots growing out of drainage holes"]
    }
  ]

  const healthyPlantSections = [
    {
      id: "signs",
      title: "Healthy Plant Signs",
      emoji: "🌿",
      icon: Sparkles,
      color: "emerald",
      items: [
        "Green, vibrant leaves",
        "New leaf growth",
        "Firm stems and roots"
      ],
      description: "Observing these signs regularly ensures your plant is thriving in its current environment."
    },
    {
      id: "routine",
      title: "Routine Care",
      emoji: "📅",
      icon: Calendar,
      color: "blue",
      items: [
        "Weekly plant check",
        "Cleaning leaves regularly",
        "Consistent light exposure"
      ],
      description: "A simple weekly routine is the foundation of long-term plant health."
    },
    {
      id: "repotting",
      title: "Repotting Guide",
      emoji: "🔄",
      icon: RefreshCw,
      color: "amber",
      items: [
        "When to change the pot",
        "Choose the right soil mix",
        "Select a pot with drainage"
      ],
      description: "Plants eventually outgrow their space. Knowing when to move them is key to growth."
    },
    {
      id: "pruning",
      title: "Pruning Tips",
      emoji: "✂️",
      icon: Scissors,
      color: "rose",
      items: [
        "Remove dry or dead leaves",
        "Trim leggy stems",
        "Use clean, sharp tools"
      ],
      description: "Pruning encourages new growth and keeps your plant looking its best."
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-10 font-sans">
      <div className="container mx-auto max-w-5xl px-2 xs:px-4 py-8 md:py-12">
        
        {/* Sticky Tab Switcher Wrapper */}
        <div className="sticky top-[64px] z-40 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md py-4 -mx-2 xs:-mx-4 px-2 xs:px-4 mb-4 md:mb-8 transition-all duration-300">
          <div className="flex justify-center">
            <div className="bg-zinc-200/50 dark:bg-zinc-800/50 p-1.5 rounded-2xl flex w-full max-w-md shadow-inner">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Tab)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all",
                      isActive
                        ? "bg-white dark:bg-zinc-700 text-emerald-600 dark:text-emerald-400 shadow-md transform scale-[1.02]"
                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                    )}
                  >
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "tips" && (
            <div className="bg-[#fdfcf9] dark:bg-zinc-900/40 rounded-[2rem] sm:rounded-[3rem] border border-[#e5e0d5] dark:border-zinc-800 p-3 sm:p-8 md:p-16 animate-in fade-in zoom-in-95 duration-700">

              {/* Infographic Header */}
              <div className="text-center mb-10 md:mb-20">
                <h1 className="text-xl sm:text-5xl md:text-xl font-black text-emerald-800/90 dark:text-emerald-500 tracking-tighter uppercase drop-shadow-lg">
                  Plant Care Tips
                </h1>
                <div className="h-1 w-20 md:h-1.5 md:w-32 bg-emerald-200 dark:bg-emerald-800 mx-auto mt-2 rounded-full" />
              </div>

              {/* Infographic Content with Colorful Icons */}
              <div className="max-w-4xl mx-auto space-y-12 md:space-y-32 relative">
                {/* Visual Connector Line (Hidden on mobile) */}
                <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-dashed bg-zinc-200 dark:bg-zinc-800 hidden md:block -translate-x-1/2 opacity-30" />

                {infographicTips.map((tip, idx) => {
                  const isEven = idx % 2 === 0
                  const TipIcon = tip.icon
                  return (
                    <div
                      key={tip.id}
                      className={cn(
                        "flex flex-row items-center gap-3 xs:gap-4 sm:gap-10 md:gap-20 relative z-10",
                        !isEven && "flex-row-reverse"
                      )}
                    >
                      {/* Icon Frame */}
                      <div className="w-[35%] md:w-1/2 flex justify-center">
                        <div className="relative group">
                          <div className={cn(
                            /* Slightly increased sizes for visibility */
                            "w-24 h-24 xs:w-28 xs:h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full border-2 sm:border-8 md:border-[12px] border-white dark:border-zinc-800 shadow-xl flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:rotate-3",
                            tip.bgColor
                          )}>
                            <TipIcon className={cn("w-10 h-10 xs:w-12 xs:h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 filter drop-shadow-md", tip.color)} strokeWidth={1.5} />
                          </div>
                          {/* Number Badge */}
                          <div className={cn(
                            "absolute top-0 flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-700 text-white font-black text-[10px] xs:text-[12px] sm:text-xs md:text-lg shadow-xl ring-1 sm:ring-4 ring-white dark:ring-zinc-900 transition-transform group-hover:scale-110",
                            isEven ? "right-0 md:-right-4" : "left-0 md:-left-4"
                          )}>
                            {tip.id}
                          </div>
                        </div>
                      </div>

                      {/* Content Box */}
                      <div className={cn(
                        "w-[65%] md:w-1/2",
                        isEven ? "text-left" : "text-right"
                      )}>
                        <div className={cn(
                          /* Slightly larger text for mobile usability */
                          "inline-block px-3 py-1 sm:px-8 sm:py-2.5 rounded-full bg-emerald-700 text-white font-black text-[10px] xs:text-[12px] sm:text-xs md:text-lg mb-2 md:mb-6 tracking-widest shadow-lg transform transition-transform group-hover:translate-y-[-2px]",
                        )}>
                          {tip.title}
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 text-[11px] xs:text-[13px] sm:text-base md:text-xl leading-relaxed font-medium max-w-lg mx-auto md:mx-0 px-1 md:px-0">
                          {tip.content}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === "problems" && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commonProblems.map((problem, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "group p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden relative",
                      `hover:border-${problem.color}-400/50`
                    )}
                  >
                    {/* Background Decorative Emoji */}
                    <div className="absolute -right-4 -bottom-4 text-7xl opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                      {problem.emoji}
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className={cn(
                        "h-14 w-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-110 duration-500",
                        `bg-${problem.color}-100 dark:bg-${problem.color}-900/30`
                      )}>
                        {problem.emoji}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-zinc-800 dark:text-zinc-100">{problem.title}</h3>
                        <div className={cn(
                          "h-1 w-12 rounded-full mt-1",
                          `bg-${problem.color}-500/50`
                        )} />
                      </div>
                    </div>

                    {/* Problem Sections */}
                    <div className="space-y-6 relative z-10">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <SearchCheck className={cn("h-4 w-4", `text-${problem.color}-500`)} />
                          <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Potential Cause</span>
                        </div>
                        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                          {problem.cause}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-2 mb-2">
                          <Stethoscope className="h-4 w-4 text-emerald-500" />
                          <span className="text-xs font-black uppercase tracking-widest text-emerald-600/80">Diagnostic Solution</span>
                        </div>
                        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                          "{problem.solution}"
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className={cn("w-1.5 h-1.5 rounded-full", `bg-${problem.color}-500`)} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Key Symptoms</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {problem.signs.map((sign, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-[10px] font-bold text-zinc-500 dark:text-zinc-400"
                            >
                              {sign}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "healthy" && (
            <div className="space-y-6 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
              {/* Header for Healthy Guide */}
              <div className="text-center max-w-2xl mx-auto px-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 mb-6 shadow-inner">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-zinc-800 dark:text-zinc-100 tracking-tight mb-4">
                  🌾 Healthy Plant Guide
                </h2>
                <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  This section includes ideal conditions and best practices for maintaining healthy plants.
                </p>
              </div>

              {/* Sub-sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                {healthyPlantSections.map((section, idx) => {
                  const Icon = section.icon
                  return (
                    <div 
                      key={section.id}
                      className={cn(
                        "group p-6 md:p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 flex flex-col relative overflow-hidden",
                        `hover:border-${section.color}-500/30`
                      )}
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div className={cn(
                          "h-14 w-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500",
                          `bg-${section.color}-50 dark:bg-${section.color}-900/20`
                        )}>
                          {section.emoji}
                        </div>
                        <div className={cn(
                          "p-2 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500",
                          `border-${section.color}-200 dark:border-${section.color}-800`
                        )}>
                          <ArrowRight className={cn("h-4 w-4", `text-${section.color}-500`)} />
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-black text-zinc-800 dark:text-zinc-100 mb-2">
                          {section.title}
                        </h3>
                        <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                          {section.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-zinc-50 dark:border-zinc-800 space-y-3">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={cn("h-2 w-2 rounded-full", `bg-${section.color}-500`)} />
                            <span className="text-sm md:text-base font-bold text-zinc-700 dark:text-zinc-300">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Subtle accent line */}
                      <div className={cn(
                        "absolute top-0 right-0 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none",
                        `bg-${section.color}-500`
                      )} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
