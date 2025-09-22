import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Building2, 
  ShoppingCart, 
  Globe, 
  Camera,
  Utensils,
  Car,
  Phone,
  Mail,
  Calendar
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Yiwu International Trade City - World's Largest Wholesale Market | China Cultural Tourism",
  description: "Explore Yiwu International Trade City, the world's largest small commodity wholesale market. Experience global trade culture, shopping paradise, and business opportunities in China's commercial hub.",
  keywords: "Yiwu International Trade City, wholesale market, China trade, business tourism, shopping, global commerce, Yiwu travel guide",
  openGraph: {
    title: "Yiwu International Trade City - Global Trade Experience",
    description: "Discover the heart of global trade at Yiwu International Trade City. Shop, explore, and experience the world's largest wholesale marketplace.",
    images: ["/yiwu-international-trade-city-modern-buildings.jpg"],
  },
}

export default function YiwuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[url('/yiwu-international-trade-city-modern-buildings.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <Badge className="bg-blue-600 text-white mb-4">
              <Building2 className="h-3 w-3 mr-1" />
              Global Trade Hub
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Yiwu International Trade City
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Step into the world's largest small commodity wholesale market, where global trade comes alive. 
              Experience the pulse of international commerce in this modern marvel of Chinese business culture.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                Yiwu City, Zhejiang Province
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                1-2 Days Recommended
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-600" />
                Business & Cultural Tourism
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/3-day">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Book Your Visit
                </Button>
              </Link>
              <Link href="/planner">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Plan Custom Trip
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">75,000+</h3>
                <p className="text-sm text-gray-600">Booths & Shops</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">200+</h3>
                <p className="text-sm text-gray-600">Countries Served</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">1.8M+</h3>
                <p className="text-sm text-gray-600">Product Categories</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">4.6M</h3>
                <p className="text-sm text-gray-600">Annual Visitors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Heart of Global Trade</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Welcome to Yiwu International Trade City, a modern wonder that has revolutionized global commerce. 
                      Spanning over 5.5 million square meters, this colossal marketplace is not just a shopping destination—it's 
                      a cultural phenomenon that showcases China's incredible manufacturing prowess and entrepreneurial spirit.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Since its establishment in 2002, Yiwu has grown from a small local market to become the world's largest 
                      wholesale market for small commodities. Every day, thousands of international buyers from over 200 countries 
                      converge here to source products that will eventually reach consumers worldwide.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-8">
                      <h4 className="font-semibold text-blue-900 mb-2">Did You Know?</h4>
                      <p className="text-blue-800">
                        Yiwu International Trade City is so large that if you spent just 3 minutes at each booth, 
                        it would take you over 3 years to visit them all!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Market Districts */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore the Five Districts</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">District 1: Flowers, Toys & Crafts</h3>
                      <p className="text-gray-700">
                        Discover artificial flowers, plush toys, and handicrafts. This district showcases China's 
                        incredible attention to detail in decorative items and children's products.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">District 2: Hardware & Electronics</h3>
                      <p className="text-gray-700">
                        From cutting-edge electronics to traditional hardware tools, this district represents 
                        the technological advancement of modern China.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">District 3: Cosmetics & Accessories</h3>
                      <p className="text-gray-700">
                        Beauty products, jewelry, and fashion accessories that reflect contemporary Chinese 
                        design trends and global fashion influences.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">District 4: Textiles & Garments</h3>
                      <p className="text-gray-700">
                        Experience China's textile heritage through modern fabrics, clothing, and home textiles 
                        that blend traditional craftsmanship with contemporary design.
                      </p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">District 5: Imported Goods</h3>
                      <p className="text-gray-700">
                        A unique section featuring international products, showcasing Yiwu's role as a 
                        truly global marketplace connecting cultures worldwide.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cultural Experience */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Experience Beyond Shopping</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Camera className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Photography Tours</h4>
                          <p className="text-sm text-gray-600">
                            Capture the bustling energy of global commerce with guided photography sessions
                            through the most photogenic areas of the market.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Business Networking</h4>
                          <p className="text-sm text-gray-600">
                            Connect with international traders and learn about global business practices
                            in our organized networking events.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Utensils className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">International Cuisine</h4>
                          <p className="text-sm text-gray-600">
                            Taste authentic dishes from around the world at the international food court,
                            reflecting Yiwu's global community.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Building2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Architecture Tour</h4>
                          <p className="text-sm text-gray-600">
                            Explore the modern architectural marvel that houses this massive marketplace,
                            a testament to contemporary Chinese engineering.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Travel Tips */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Travel Tips</h2>
                  <div className="space-y-6">
                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-900 mb-2">💡 Pro Tip</h4>
                      <p className="text-yellow-800">
                        Download the Yiwu Market app for real-time booth locations and translator features.
                        Many vendors speak basic English, but having translation tools is invaluable.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What to Bring</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Comfortable walking shoes</li>
                          <li>• Business cards (if networking)</li>
                          <li>• Portable phone charger</li>
                          <li>• Cash and international cards</li>
                          <li>• Camera for memorable moments</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Cultural Etiquette</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Bargaining is expected and welcomed</li>
                          <li>• Business cards should be received with both hands</li>
                          <li>• Dress professionally for business interactions</li>
                          <li>• Be patient during busy periods</li>
                          <li>• Respect photography restrictions in some areas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Visit Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Visit Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Opening Hours</h4>
                    <p className="text-sm text-gray-600">Daily: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-600">Closed: Chinese New Year</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                    <p className="text-sm text-gray-600">March-May, September-November</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended Duration</h4>
                    <p className="text-sm text-gray-600">1-2 days for comprehensive tour</p>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Professional Guide Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Multi-language Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Transportation Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Shopping Assistance</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Plan Your Visit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-blue-800">
                    Ready to experience the world's largest wholesale market?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-blue-700">
                      <Phone className="h-4 w-4" />
                      <span>+86-400-123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-blue-700">
                      <Mail className="h-4 w-4" />
                      <span>info@chinajourney.com</span>
                    </div>
                  </div>
                  <Link href="/plans/custom">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Customize Your Trip
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
