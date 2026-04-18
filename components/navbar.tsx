import Link from "next/link"
import { UserNav } from "./user-nav"
import { Sprout } from "lucide-react"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400">
          <Sprout className="h-6 w-6" />
          <span>PlantGuard</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-8 text-sm font-medium">
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link>
            <Link href="/history" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">History</Link>
            <Link href="/create" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Create</Link>
            <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</Link>
          </div>
          <UserNav />
        </div>
      </div>
    </nav>
  )
}
