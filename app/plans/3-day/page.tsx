'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, ArrowLeft, Camera, Building2, Car, Utensils } from "lucide-react"
import Link from "next/link"
import PayPalCheckout from "@/components/paypal-checkout"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ThreeDayPlan() {
  const handlePaymentSuccess = (details: any) => {
    alert(`支付成功！订单号: ${details.id}`)
    // 这里可以跳转到成功页面或发送确认邮件
  }

  const handlePaymentError = (error: any) => {
    alert("支付失败，请重试或联系客服")
  }

  const handlePaymentCancel = () => {
    alert("支付已取消")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/yiwu-international-trade-city-modern-buildings.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="bg-amber-600 text-white mb-4">Classic Recommended</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">3-Day Classic Chinese Culture Journey</h1>
            <p className="text-lg text-gray-700 mb-6">
              Selected Yiwu International Trade City and Hengdian Film Studios, two core attractions, perfect for families experiencing Chinese culture for the first time
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                3 Days 2 Nights
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                2-6 Person Small Group
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Zhejiang Province
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Detailed Itinerary</h2>

          <div className="space-y-8">
            {/* Day 1 */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    Day 1
                  </Badge>
                  Arrive in Yiwu - First Trade Culture Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Car className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">09:00 Airport Pickup</h4>
                      <p className="text-xs text-gray-600">Private car pickup, proceed to hotel for check-in</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Building2 className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">14:00 Yiwu International Trade City</h4>
                      <p className="text-xs text-gray-600">Visit the world's largest small commodity market</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Utensils className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">18:00 Welcome Dinner</h4>
                      <p className="text-xs text-gray-600">Taste authentic Zhejiang cuisine</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">Accommodation</h5>
                  <p className="text-sm text-gray-700">Yiwu 4-star business hotel, convenient location, complete facilities</p>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    Day 2
                  </Badge>
                  Hengdian Film Studios - Journey Through Ancient and Modern Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Car className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">08:00 Depart to Hengdian</h4>
                      <p className="text-xs text-gray-600">Comfortable bus, approximately 1.5 hours journey</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Camera className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">10:00 Ming & Qing Palace</h4>
                      <p className="text-xs text-gray-600">Experience costume photography, watch performances</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Star className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">15:00 Qin King Palace</h4>
                      <p className="text-xs text-gray-600">Visit magnificent architectural complex</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">Special Experience</h5>
                  <p className="text-sm text-gray-700">Free costume photography experience, professional photographer service</p>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    Day 3
                  </Badge>
                  Cultural Experience - Warm Farewell
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Star className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">09:00 Cultural Workshop</h4>
                      <p className="text-xs text-gray-600">Hands-on traditional handicraft making</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Utensils className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">12:00 Farewell Lunch</h4>
                      <p className="text-xs text-gray-600">Special farmhouse cuisine experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Car className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">14:00 Airport Transfer</h4>
                      <p className="text-xs text-gray-600">Private car to airport or train station</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Price Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    4-star hotel accommodation throughout
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Professional guide throughout
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    All attraction tickets
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Airport transfer service
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Travel accident insurance
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    6 meals (3 breakfasts, 3 main meals)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="lg:col-span-2">
              <PayPalCheckout
                amount="288.80"
                currency="USD"
                planName="3-Day Classic Chinese Culture Journey"
                planDetails={[
                  "Yiwu International Trade City + Hengdian Film Studios",
                  "4-star hotel accommodation (2 nights)",
                  "Professional guide throughout",
                  "All attraction tickets",
                  "Airport transfer service",
                  "Travel accident insurance",
                  "6 meals (3 breakfasts, 3 main meals)"
                ]}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
                onCancel={handlePaymentCancel}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
