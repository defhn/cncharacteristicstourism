'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mountain, Menu, ChevronDown, MapPin, Camera, Building2, Palette } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

            {/* Destinations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
                Destinations <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/destinations/yiwu" className="flex items-center">
                    <Building2 className="mr-2 h-4 w-4" />
                    Yiwu International Trade City
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinations/hengdian" className="flex items-center">
                    <Camera className="mr-2 h-4 w-4" />
                    Hengdian Film Studios
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinations/jingdezhen" className="flex items-center">
                    <Palette className="mr-2 h-4 w-4" />
                    Jingdezhen Porcelain Capital
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinations/lushan" className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Lushan Mountain
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Travel Plans Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
                Travel Plans <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/plans/3-day">3-Day Classic Journey</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/plans/5-day">5-Day Premium Journey</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/plans/custom">Custom Travel Plan</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/planner">Smart Trip Planner</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
