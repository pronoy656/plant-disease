"use client"

import { useState, useRef } from "react"
import { Plus, Camera, Upload, RefreshCw, CheckCircle2, AlertCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function CreatePage() {
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{ status: "healthy" | "diseased"; message: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
      const isHealthy = Math.random() > 0.4
      setResult({
        status: isHealthy ? "healthy" : "diseased",
        message: isHealthy
          ? "Your plant looks healthy and vibrant! Keep up the good work."
          : "Early signs of Leaf Spot detected. We recommend pruning affected leaves and improving air circulation."
      })
    }, 2000)
  }

  const reset = () => {
    setImage(null)
    setResult(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  return (
    <div className="container mx-auto max-w-lg px-4 py-8 md:py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">New Detection</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Upload a clear photo of the affected plant leaf</p>
      </div>

      <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center justify-center overflow-hidden transition-all group">
        {image ? (
          <div className="relative w-full h-full">
            <img src={image} alt="Upload preview" className="w-full h-full object-cover" />
            <button
              onClick={reset}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center gap-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform"
          >
            <div className="h-20 w-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Plus className="h-10 w-10" />
            </div>
            <span className="font-semibold text-lg">Click to Upload</span>
          </button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
      </div>

      <div className="mt-8 space-y-4">
        {image && !result && (
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                Analyzing Plant...
              </>
            ) : (
              <>
                <Camera className="h-5 w-5" />
                Analyze Health
              </>
            )}
          </button>
        )}

        {result && (
          <div className={cn(
            "p-6 rounded-2xl border flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500",
            result.status === "healthy"
              ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100"
              : "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100"
          )}>
            <div className="flex items-center gap-2 font-bold text-lg">
              {result.status === "healthy"
                ? <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                : <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              }
              {result.status === "healthy" ? "Healthy Report" : "Disease Detected"}
            </div>
            <p className="text-sm leading-relaxed opacity-90">{result.message}</p>
            <button
              onClick={reset}
              className="mt-2 text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity w-fit"
            >
              Scan another plant
            </button>
          </div>
        )}
      </div>


    </div>
  )
}
