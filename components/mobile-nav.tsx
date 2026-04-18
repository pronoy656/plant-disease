"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Plus, Info, Mail, Sun, Moon, Clock } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "History", icon: Clock, href: "/history" },
    { label: "Create", icon: Plus, href: "/create", isSpecial: true },
    { label: "About", icon: Info, href: "/about" },
    { label: "Contact", icon: Mail, href: "/contact" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md md:hidden">
      <div className="flex h-16 items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          if (item.isSpecial) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative -top-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 transition-transform active:scale-95",
                  isActive && "ring-4 ring-emerald-600/20"
                )}
              >
                <item.icon className="h-8 w-8" />
                <span className="sr-only">{item.label}</span>
              </Link>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-xs font-medium transition-colors",
                isActive 
                  ? "text-emerald-600 dark:text-emerald-400" 
                  : "text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
