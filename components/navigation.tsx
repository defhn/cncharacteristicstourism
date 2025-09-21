import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mountain, Menu } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-gray-900">China Journey</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="/planner" className="text-gray-700 hover:text-amber-600 transition-colors">
              Trip Planner
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-amber-600 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-amber-600 transition-colors">
              Blog
            </Link>
            <Link href="/blog/create">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Write Blog
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
