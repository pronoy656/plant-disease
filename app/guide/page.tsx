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
  Scissors
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
      name: "Yellowing Leaves",
      cause: "Overwatering or Nutrient Deficiency",
      solution: "Check soil moisture; if wet, let it dry. If dry, try a balanced liquid fertilizer.",
      severity: "Medium"
    },
    {
      name: "Brown Crispy Edges",
      cause: "Low Humidity or Underwatering",
      solution: "Increase misting or use a pebble tray. Check watering frequency.",
      severity: "Low"
    },
    {
      name: "Powdery Mildew",
      cause: "Fungal Infection",
      solution: "Increase air circulation and use a neem oil spray or fungicide.",
      severity: "High"
    }
  ]

  const healthyGuides = [
    {
      plant: "Tomato",
      tips: ["Provide 6-8 hours of sun", "Support with cages or stakes", "Water at the base to avoid leaf blight"],
      image: "https://images.unsplash.com/photo-1592841604418-b58f3cd82104?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      plant: "Snake Plant",
      tips: ["Low light tolerant", "Water every 2-3 weeks", "Avoid overwatering"],
      image: "https://images.unsplash.com/photo-1599591037483-34509426c739?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-10 font-sans">
      <div className="container mx-auto max-w-5xl px-2 xs:px-4 pt-8 pb-2 md:py-12">
        {/* Compact Tab Switcher with visible names */}
        <div className="flex justify-center mb-8 md:mb-12">
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
                            "w-22 h-22 xs:w-28 xs:h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full border-2 sm:border-8 md:border-[12px] border-white dark:border-zinc-800 shadow-xl flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:rotate-3",
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
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
              {commonProblems.map((problem, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all shadow-lg hover:shadow-2xl group"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={cn(
                      "h-12 w-12 sm:h-16 sm:w-16 rounded-[1rem] sm:rounded-[1.25rem] flex items-center justify-center transition-transform group-hover:rotate-12",
                      problem.severity === "High" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                    )}>
                      <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-black text-zinc-800 dark:text-zinc-100">{problem.name}</h3>
                      <p className="text-[10px] sm:text-sm text-zinc-500 font-medium">Potential Cause: {problem.cause}</p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border-l-4 border-emerald-500">
                    <p className="text-zinc-600 dark:text-zinc-400 italic text-xs sm:text-base leading-relaxed">
                      "{problem.solution}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "healthy" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
              {healthyGuides.map((guide, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-all group flex flex-col"
                >
                  <div className="h-44 sm:h-56 overflow-hidden relative">
                    <img
                      src={guide.image}
                      alt={guide.plant}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                      <h3 className="text-white text-xl sm:text-2xl font-black tracking-tight">{guide.plant}</h3>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2 sm:space-y-3">
                      {guide.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-zinc-600 dark:text-zinc-300 font-medium">{tip}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 sm:mt-8 w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-black text-[10px] sm:text-sm uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all shadow-md active:scale-95">
                      Explore Full Guide
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
