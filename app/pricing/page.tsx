import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Check,
  Star,
  Users,
  Clock,
  Car,
  Utensils,
  Camera,
  Shield,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/chinese-traditional-architecture-with-mountains.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing, Premium Service</h1>
            <p className="text-lg text-gray-700">
              We provide clear and transparent pricing system and comprehensive professional services, making your Chinese cultural journey excellent value for money
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Travel Package Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Three different levels of travel packages to meet different budgets and family needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 3-Day Classic Plan */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">3-Day Classic Journey</CardTitle>
                <p className="text-gray-600">Perfect for first-time families</p>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-amber-600">$288</div>
                  <div className="text-sm text-gray-500">Per Person</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Yiwu International Trade City + Hengdian Film Studios</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">4-star hotel accommodation (2 nights)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Professional guide throughout</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">All attraction tickets</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Airport transfer service</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Travel accident insurance</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">6 meals (3 breakfasts, 3 main meals)</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6">Book Now</Button>
                <p className="text-xs text-gray-500 text-center">* Minimum 2 people, please inquire for children's prices</p>
              </CardContent>
            </Card>

            {/* 5-Day Premium Plan */}
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-amber-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">5-Day Premium Journey</CardTitle>
                <p className="text-gray-600">In-depth experience, luxury enjoyment</p>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-amber-600">$888</div>
                  <div className="text-sm text-gray-500">Per Person</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Complete coverage of four destinations</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">5-star luxury hotel (4 nights)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Mercedes business car private service</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Senior cultural guide exclusive service</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Michelin restaurant dining experience</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Professional photographer follow-up service</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Personal travel album creation</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Premium travel insurance</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6">Book Now</Button>
                <p className="text-xs text-gray-500 text-center">* Limited to 4 people per group, enjoy discount with 30-day advance booking</p>
              </CardContent>
            </Card>

            {/* Custom Plan */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">Custom Travel Plan</CardTitle>
                <p className="text-gray-600">Completely personalized customization</p>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-amber-600">Negotiable</div>
                  <div className="text-sm text-gray-500">Quote based on requirements</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Tailored to your specific needs</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Flexible time arrangement</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Dedicated travel advisor</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">VIP exclusive service</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Unique cultural experience</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">24-hour attentive service</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Special requirements fulfillment</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6">Start Customization</Button>
                <p className="text-xs text-gray-500 text-center">* Free consultation, payment after satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Advantages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional team, attentive service, making your trip worry-free</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Professional Guide</h3>
                <p className="text-sm text-gray-600">Senior cultural guides with in-depth Chinese cultural knowledge</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Car className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Comfortable Transportation</h3>
                <p className="text-sm text-gray-600">Luxury business cars or comfortable buses, safe and convenient</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Utensils className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Selected Cuisine</h3>
                <p className="text-sm text-gray-600">Local specialty restaurants, taste authentic Chinese cuisine</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Safety Guarantee</h3>
                <p className="text-sm text-gray-600">Full insurance coverage, 24-hour emergency service</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Camera className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Photography Service</h3>
                <p className="text-sm text-gray-600">Professional photographer follow-up, capturing beautiful moments</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Accommodation</h3>
                <p className="text-sm text-gray-600">Selected star hotels, comfortable and safe accommodation</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Flexible Arrangement</h3>
                <p className="text-sm text-gray-600">Adjust itinerary according to customer needs, personalized service</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <MessageCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Attentive Service</h3>
                <p className="text-sm text-gray-600">Full customer service support, answering your questions anytime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Details</h2>
            <p className="text-lg text-gray-600">Transparent pricing, no hidden fees</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Full accommodation costs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Attraction ticket costs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Guide service costs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Transportation transfer costs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Travel insurance costs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Meal costs within itinerary</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Not Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">Round-trip transportation costs</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">Personal consumption and shopping</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">Optional activities outside itinerary</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">Single room supplement</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">Costs due to force majeure</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">Other costs not explicitly included</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Professional customer service team, always at your service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone Consultation</h3>
                <p className="text-amber-600 font-semibold">+1-800-123-4567</p>
                <p className="text-sm text-gray-600 mt-2">Working hours: 9:00-21:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <MessageCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">WhatsApp Consultation</h3>
                <p className="text-amber-600 font-semibold">ChinaJourney2024</p>
                <p className="text-sm text-gray-600 mt-2">Scan to add customer service</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Consultation</h3>
                <p className="text-amber-600 font-semibold">info@chinajourney.com</p>
                <p className="text-sm text-gray-600 mt-2">Reply within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Process</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    1
                  </div>
                  <p className="text-sm font-semibold">Inquiry Requirements</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    2
                  </div>
                  <p className="text-sm font-semibold">Confirm Itinerary</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    3
                  </div>
                  <p className="text-sm font-semibold">Sign & Payment</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    4
                  </div>
                  <p className="text-sm font-semibold">Happy Journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
