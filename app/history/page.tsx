import { Clock, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const HISTORY_MOCK = [
  { id: 1, name: "Tomato Leaf", date: "2 hours ago", status: "healthy", disease: "None" },
  { id: 2, name: "Potato Plant", date: "Yesterday", status: "diseased", disease: "Early Blight" },
  { id: 3, name: "Rose Bush", date: "3 days ago", status: "healthy", disease: "None" },
  { id: 4, name: "Corn Stalk", date: "1 week ago", status: "diseased", disease: "Common Rust" },
]

export default function HistoryPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:py-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Scan History</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Review your previous plant diagnoses</p>
        </div>
        <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
          <Clock className="h-6 w-6" />
        </div>
      </div>

      <div className="space-y-4">
        {HISTORY_MOCK.map((item) => (
          <div 
            key={item.id}
            className="group p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "h-12 w-12 rounded-xl flex items-center justify-center",
                item.status === "healthy" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600" : "bg-amber-100 dark:bg-amber-900/30 text-amber-600"
              )}>
                {item.status === "healthy" ? <CheckCircle2 className="h-6 w-6" /> : <AlertCircle className="h-6 w-6" />}
              </div>
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className={item.status === "healthy" ? "text-emerald-600" : "text-amber-600"}>
                    {item.status === "healthy" ? "Healthy" : item.disease}
                  </span>
                </div>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-zinc-300 group-hover:text-emerald-500 transition-colors" />
          </div>
        ))}
      </div>

      <button className="w-full mt-8 py-4 text-sm font-medium text-zinc-500 hover:text-emerald-600 transition-colors">
        Export History (CSV)
      </button>
    </div>
  )
}
