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
  const cameraInputRef = useRef<HTMLInputElement>(null)

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

  const handleAnalyze = async () => {
    if (!fileInputRef.current?.files?.[0] && !cameraInputRef.current?.files?.[0]) return

    const file = fileInputRef.current?.files?.[0] || cameraInputRef.current?.files?.[0]
    if (!file) return

    setIsAnalyzing(true)
    setResult(null)

    const formData = new FormData()
    formData.append("img", file)

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to analyze image")
      }

      const data = await response.json()
      setResult({
        status: data.status,
        message: data.message
      })
    } catch (error) {
      console.error("Error analyzing image:", error)
      setResult({
        status: "diseased",
        message: "Error connecting to the analysis server. Please make sure the backend is running."
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const reset = () => {
    setImage(null)
    setResult(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
    if (cameraInputRef.current) cameraInputRef.current.value = ""
  }

  return (
    <div className="container mx-auto max-w-lg px-4 py-8 md:py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">New Detection</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Capture or upload a clear photo of the leaf</p>
      </div>

      <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center justify-center overflow-hidden transition-all group p-4">
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
          <div className="flex flex-col gap-6 w-full max-w-[280px]">
            <button
              onClick={() => cameraInputRef.current?.click()}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500 hover:text-emerald-500 transition-all active:scale-95 group/btn"
            >
              <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-colors">
                <Camera className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="block font-bold">Take Photo</span>
                <span className="block text-xs text-zinc-500">Use your camera</span>
              </div>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500 hover:text-emerald-500 transition-all active:scale-95 group/btn"
            >
              <div className="h-12 w-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-colors">
                <Upload className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="block font-bold">Upload Gallery</span>
                <span className="block text-xs text-zinc-500">Pick from folder</span>
              </div>
            </button>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
        <input
          type="file"
          ref={cameraInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          capture="environment"
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
