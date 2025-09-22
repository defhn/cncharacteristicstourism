import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Users,
  Star,
  ArrowLeft,
  Camera,
  Building2,
  Car,
  Utensils,
  Mountain,
  Palette,
  Crown,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function FiveDayPlan() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/lushan-mountain-scenic-natural-landscape-waterfall.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white mb-4">
              <Crown className="h-3 w-3 mr-1" />
              Premium Customized
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">5-Day Premium Chinese Culture In-Depth Journey</h1>
            <p className="text-lg text-gray-700 mb-6">
              Complete coverage of four destinations, five-star luxury experience, exclusive customized service, creating the most unforgettable Chinese cultural journey for you
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                5 Days 4 Nights
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Private Small Group
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Zhejiang · Jiangxi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-amber-200">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">5-Star Accommodation</h3>
                <p className="text-sm text-gray-600">Selected best local 5-star hotels</p>
              </CardContent>
            </Card>
            <Card className="text-center border-amber-200">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">Exclusive Guide</h3>
                <p className="text-sm text-gray-600">Senior cultural guide one-on-one service</p>
              </CardContent>
            </Card>
            <Card className="text-center border-amber-200">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">Luxury Private Car</h3>
                <p className="text-sm text-gray-600">Mercedes business car full transfer service</p>
              </CardContent>
            </Card>
            <Card className="text-center border-amber-200">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">Michelin Restaurant</h3>
                <p className="text-sm text-gray-600">Taste authentic premium Chinese cuisine</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Carefully Designed Itinerary</h2>

          <div className="space-y-8">
            {/* Day 1 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    Day 1
                  </Badge>
                  Arrive in Yiwu - Trade Empire Exploration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-sm mb-2 flex items-center">
                    <Crown className="h-4 w-4 mr-2 text-amber-600" />
                    VIP Airport Transfer Service
                  </h5>
                  <p className="text-sm text-gray-700">Dedicated driver airport pickup, Mercedes business car direct to 5-star hotel</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold">Morning Arrangement</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Building2 className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">Yiwu International Trade City VIP Tour</h6>
                        <p className="text-xs text-gray-600">Exclusive access, in-depth understanding of global trade center</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold">Evening Arrangement</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Utensils className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">Michelin Restaurant Dinner</h6>
                        <p className="text-xs text-gray-600">Taste exquisite Zhejiang cuisine, professional sommelier service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    Day 2
                  </Badge>
                  Hengdian Film Studios - Magical Film Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold">Film Experience</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Camera className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">Professional Ancient Costume Photography</h6>
                        <p className="text-xs text-gray-600">Professional photographer, exquisite costumes, create personal photo album</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold">Cultural Experience</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Star className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">Private Tour</h6>
                        <p className="text-xs text-gray-600">Behind-the-scenes exploration, interact with actors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    Day 3
                  </Badge>
                  Jingdezhen - Millennium Porcelain Capital Art Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold">Ceramic Art</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Palette className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">Master Workshop Experience</h6>
                        <p className="text-xs text-gray-600">National ceramic master personal guidance</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold">Cultural Exploration</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Star className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">Private Museum Visit</h6>
                        <p className="text-xs text-gray-600">Precious porcelain collection, professional explanation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 4 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    Day 4
                  </Badge>
                  Lushan - Poetic Landscape Scroll
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold">Natural Wonders</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Mountain className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">Lushan Scenic Area In-depth Tour</h6>
                        <p className="text-xs text-gray-600">Sandie Spring Waterfall, Hanpo Mouth Sunrise</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold">Cultural Experience</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Star className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">Poetry Culture Experience</h6>
                        <p className="text-xs text-gray-600">Ancient poetry recitation, calligraphy experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 5 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    Day 5
                  </Badge>
                  Cultural Summary - Warm Farewell
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">Special Arrangement</h5>
                  <p className="text-sm text-gray-700">Create personal travel album, professional photographer full follow-up photo organization</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-amber-600" />
                  Premium Service Includes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Full 5-star luxury hotel
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Mercedes business car private service
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Senior cultural guide exclusive service
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Michelin restaurant dining experience
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Professional photographer follow-up service
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Personal travel album creation
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    Premium travel insurance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Book Now
                  <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">Limited Release</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">$888</div>
                  <div className="text-sm text-gray-500 line-through">Original Price $988</div>
                  <div className="text-sm text-gray-600">Per Person</div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                  size="lg"
                >
                  Book Premium Journey Now
                </Button>
                <p className="text-xs text-gray-500 text-center">* Limited to 4 people per group, enjoy discount with 30-day advance booking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
