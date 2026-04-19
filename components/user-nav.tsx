"use client"

import * as React from "react"
import Link from "next/link"
import { User, Settings, LogOut, Shield, ChevronDown, Clock } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export function UserNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen((prev) => !prev)
        }}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
      >
        <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 overflow-hidden">
          <User className="h-5 w-5" />
        </div>
        <ChevronDown className={cn("h-4 w-4 text-zinc-500 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/10 z-[100] overflow-hidden"
        >
          <div className="p-4 border-b border-zinc-100 dark:border-zinc-900">
            <p className="text-sm font-bold">John Doe</p>
            <p className="text-xs text-zinc-500 truncate">john.doe@plantguard.ai</p>
          </div>
          
          <div className="p-2">
            <Link 
              href="/history" 
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              <Clock className="h-4 w-4 text-zinc-500" />
              <span>Scan History</span>
            </Link>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              <Settings className="h-4 w-4 text-zinc-500" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              <Shield className="h-4 w-4 text-zinc-500" />
              <span>Privacy</span>
            </button>
          </div>

          <div className="p-2 border-t border-zinc-100 dark:border-zinc-900">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm">Appearance</span>
              <ThemeToggle />
            </div>
          </div>

          <div className="p-2 border-t border-zinc-100 dark:border-zinc-900">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
