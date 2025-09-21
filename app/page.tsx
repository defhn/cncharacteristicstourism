import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, ArrowRight, Camera, Mountain, Building2, Palette } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-amber-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chinese-traditional-architecture-with-mountains.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
              Discover the Beauty of Chinese Culture
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              From the bustling Yiwu International Trade City to the magical Hengdian Film Studios,
              from the thousand-year porcelain heritage of Jingdezhen to the natural wonders of Lushan Mountain,
              we create unforgettable Chinese cultural journeys for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/planner">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/plans/3-day">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  View Travel Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Four distinctive destinations, each carrying profound Chinese cultural heritage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/yiwu-international-trade-city-modern-buildings.jpg')] bg-cover bg-center"></div>
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">Trade Hub</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Building2 className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-lg">Yiwu International Trade City</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">World's largest wholesale market for small commodities, feel the pulse of global trade</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    Yiwu, Zhejiang
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hengdian-film-studios-movie-sets-traditional-chine.jpg')] bg-cover bg-center"></div>
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">Film Studios</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-lg">Hengdian Film Studios</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">China's Hollywood, experience the charm of ancient costume drama filming sites</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    Hengdian, Zhejiang
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/jingdezhen-porcelain-pottery-traditional-chinese-c.jpg')] bg-cover bg-center"></div>
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">Porcelain Capital</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Palette className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-lg">Jingdezhen Porcelain Capital</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Thousand-year porcelain capital, hands-on experience of traditional ceramic craftsmanship</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    Jingdezhen, Jiangxi
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/lushan-mountain-scenic-natural-landscape-waterfall.jpg')] bg-cover bg-center"></div>
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">Natural Wonder</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Mountain className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-lg">Lushan Mountain</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">UNESCO World Heritage Site, experience the poetic beauty of "not knowing the true face of Lushan"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    Lushan, Jiangxi
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Travel Plans Preview */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Carefully Designed Travel Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From classic routes to premium customization, meeting different family travel experience needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3-Day Classic Journey</h3>
                  <p className="text-gray-600">Selected core attractions, perfect for first-time experience</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Yiwu Trade City + Hengdian Studios
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Family-friendly itinerary
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Professional guide service
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">View Details</Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-2 border-amber-200">
              <div className="bg-amber-600 text-white text-center py-2 text-sm font-medium">Recommended Choice</div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5-Day Premium Journey</h3>
                  <p className="text-gray-600">In-depth experience, luxury enjoyment</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    All four destinations covered
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Five-star hotel accommodation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Private customized experience
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">View Details</Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Palette className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Travel Plan</h3>
                  <p className="text-gray-600">Completely personalized, exclusively for you</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Tailored to your needs
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Flexible time arrangement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Dedicated travel advisor
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Start Customizing</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
