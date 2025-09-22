"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Users,
  Clock,
  Building2,
  Camera,
  Mountain,
  Palette,
  Plus,
  Minus,
  Check,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface Destination {
  id: string
  name: string
  description: string
  icon: any
  duration: string
  highlights: string[]
  image: string
}

const destinations: Destination[] = [
  {
    id: "yiwu",
    name: "Yiwu International Trade City",
    description: "World's largest small commodity wholesale market",
    icon: Building2,
    duration: "1-2 Days",
    highlights: ["Global Trade Center", "Shopping Paradise", "Business Culture"],
    image: "/yiwu-international-trade-city-modern-buildings.jpg",
  },
  {
    id: "hengdian",
    name: "Hengdian Film Studios",
    description: "China's Hollywood, ancient costume drama filming base",
    icon: Camera,
    duration: "1-2 Days",
    highlights: ["Film Experience", "Costume Photography", "Cultural Performance"],
    image: "/hengdian-film-studios-movie-sets-traditional-chine.jpg",
  },
  {
    id: "jingdezhen",
    name: "Jingdezhen Porcelain Capital",
    description: "Millennium porcelain capital, ceramic culture sanctuary",
    icon: Palette,
    duration: "1-2 Days",
    highlights: ["Ceramic Making", "Cultural Experience", "Art Appreciation"],
    image: "/jingdezhen-porcelain-pottery-traditional-chinese-c.jpg",
  },
  {
    id: "lushan",
    name: "Lushan Scenic Area",
    description: "World Cultural Heritage, poetic landscape",
    icon: Mountain,
    duration: "1-2 Days",
    highlights: ["Natural Scenery", "Cultural Relics", "Photography Paradise"],
    image: "/lushan-mountain-scenic-natural-landscape-waterfall.jpg",
  },
]

export default function TravelPlannerPage() {
  const [step, setStep] = useState(1)
  const [planData, setPlanData] = useState({
    travelers: 2,
    duration: 3,
    budget: "5000-8000",
    startDate: "",
    selectedDestinations: [] as string[],
    interests: [] as string[],
    accommodation: "4-star",
    transportation: "private-car",
    specialRequests: "",
  })

  const handleDestinationToggle = (destinationId: string) => {
    setPlanData((prev) => ({
      ...prev,
      selectedDestinations: prev.selectedDestinations.includes(destinationId)
        ? prev.selectedDestinations.filter((id) => id !== destinationId)
        : [...prev.selectedDestinations, destinationId],
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setPlanData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    stepNumber <= step
                      ? "bg-amber-600 text-white"
                      : stepNumber === step + 1
                        ? "bg-amber-100 text-amber-600 border-2 border-amber-600"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {stepNumber < step ? <Check className="h-4 w-4" /> : stepNumber}
                </div>
                {stepNumber < 5 && (
                  <div className={`w-16 h-1 mx-2 ${stepNumber < step ? "bg-amber-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Basic Info</span>
            <span>Destinations</span>
            <span>Interests</span>
            <span>Services</span>
            <span>Confirm</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Basic Information */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-amber-600" />
                Basic Travel Information
              </CardTitle>
              <p className="text-gray-600">Tell us your basic needs, we will customize for you</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Number of Travelers</Label>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPlanData((prev) => ({ ...prev, travelers: Math.max(1, prev.travelers - 1) }))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-semibold w-8 text-center">{planData.travelers}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPlanData((prev) => ({ ...prev, travelers: prev.travelers + 1 }))}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Travel Duration</Label>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPlanData((prev) => ({ ...prev, duration: Math.max(1, prev.duration - 1) }))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-semibold w-8 text-center">{planData.duration}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPlanData((prev) => ({ ...prev, duration: prev.duration + 1 }))}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Departure Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={planData.startDate}
                    onChange={(e) => setPlanData((prev) => ({ ...prev, startDate: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Budget Range (Per Person)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["3000-5000", "5000-8000", "8000-12000", "12000+"].map((budget) => (
                      <Button
                        key={budget}
                        variant={planData.budget === budget ? "default" : "outline"}
                        size="sm"
                        className={planData.budget === budget ? "bg-amber-600 hover:bg-amber-700" : ""}
                        onClick={() => setPlanData((prev) => ({ ...prev, budget }))}
                      >
                        ${budget}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={nextStep} className="bg-amber-600 hover:bg-amber-700">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Destination Selection */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                Select Your Interested Destinations
              </CardTitle>
              <p className="text-gray-600">You can select multiple destinations, we will arrange the itinerary reasonably for you</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {destinations.map((destination) => {
                  const Icon = destination.icon
                  const isSelected = planData.selectedDestinations.includes(destination.id)
                  return (
                    <Card
                      key={destination.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        isSelected ? "border-amber-600 bg-amber-50" : "hover:shadow-md"
                      }`}
                      onClick={() => handleDestinationToggle(destination.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-full ${isSelected ? "bg-amber-600" : "bg-amber-100"}`}>
                            <Icon className={`h-5 w-5 ${isSelected ? "text-white" : "text-amber-600"}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{destination.name}</h3>
                              {isSelected && <Check className="h-5 w-5 text-amber-600" />}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{destination.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-xs">
                                {destination.duration}
                              </Badge>
                              <div className="flex flex-wrap gap-1">
                                {destination.highlights.slice(0, 2).map((highlight) => (
                                  <Badge key={highlight} variant="secondary" className="text-xs">
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={planData.selectedDestinations.length === 0}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Interests */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2 text-amber-600" />
                Your Interest Preferences
              </CardTitle>
              <p className="text-gray-600">Select the types of activities you are interested in to help us customize more suitable experiences</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Cultural History",
                  "Handicraft Experience",
                  "Photography",
                  "Food Tasting",
                  "Shopping Experience",
                  "Natural Scenery",
                  "Family Activities",
                  "Art Appreciation",
                  "Traditional Performance",
                ].map((interest) => (
                  <div
                    key={interest}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      planData.interests.includes(interest)
                        ? "border-amber-600 bg-amber-50"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                    onClick={() => handleInterestToggle(interest)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{interest}</span>
                      {planData.interests.includes(interest) && <Check className="h-5 w-5 text-amber-600" />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={nextStep} className="bg-amber-600 hover:bg-amber-700">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Service Selection */}
        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-amber-600" />
                服务选择
              </CardTitle>
              <p className="text-gray-600">选择您偏好的住宿和交通方式</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-semibold mb-3 block">住宿标准</Label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      { value: "3-star", label: "三星级酒店", desc: "舒适经济" },
                      { value: "4-star", label: "四星级酒店", desc: "品质保证" },
                      { value: "5-star", label: "五星级酒店", desc: "奢华体验" },
                    ].map((option) => (
                      <Card
                        key={option.value}
                        className={`cursor-pointer transition-all duration-200 ${
                          planData.accommodation === option.value ? "border-amber-600 bg-amber-50" : "hover:shadow-md"
                        }`}
                        onClick={() => setPlanData((prev) => ({ ...prev, accommodation: option.value }))}
                      >
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold">{option.label}</h4>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                          {planData.accommodation === option.value && (
                            <Check className="h-5 w-5 text-amber-600 mx-auto mt-2" />
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">交通方式</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { value: "private-car", label: "专车服务", desc: "舒适便捷，专属司机" },
                      { value: "group-bus", label: "旅游大巴", desc: "经济实惠，团队出行" },
                    ].map((option) => (
                      <Card
                        key={option.value}
                        className={`cursor-pointer transition-all duration-200 ${
                          planData.transportation === option.value ? "border-amber-600 bg-amber-50" : "hover:shadow-md"
                        }`}
                        onClick={() => setPlanData((prev) => ({ ...prev, transportation: option.value }))}
                      >
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold">{option.label}</h4>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                          {planData.transportation === option.value && (
                            <Check className="h-5 w-5 text-amber-600 mx-auto mt-2" />
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-requests">特殊需求</Label>
                  <Textarea
                    id="special-requests"
                    placeholder="如有特殊饮食要求、身体状况需要注意的事项等，请在此说明..."
                    value={planData.specialRequests}
                    onChange={(e) => setPlanData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  上一步
                </Button>
                <Button onClick={nextStep} className="bg-amber-600 hover:bg-amber-700">
                  下一步 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-amber-600" />
                确认您的旅行计划
              </CardTitle>
              <p className="text-gray-600">请确认以下信息，我们将为您生成专属的旅行方案</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-lg">基本信息</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>出行人数:</span>
                      <span className="font-semibold">{planData.travelers}人</span>
                    </div>
                    <div className="flex justify-between">
                      <span>出行天数:</span>
                      <span className="font-semibold">{planData.duration}天</span>
                    </div>
                    <div className="flex justify-between">
                      <span>出发日期:</span>
                      <span className="font-semibold">{planData.startDate || "待定"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>预算范围:</span>
                      <span className="font-semibold">¥{planData.budget}/人</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-lg">服务选择</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>住宿标准:</span>
                      <span className="font-semibold">
                        {planData.accommodation === "3-star"
                          ? "三星级酒店"
                          : planData.accommodation === "4-star"
                            ? "四星级酒店"
                            : "五星级酒店"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>交通方式:</span>
                      <span className="font-semibold">
                        {planData.transportation === "private-car" ? "专车服务" : "旅游大巴"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">选择的目的地</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {planData.selectedDestinations.map((destId) => {
                      const destination = destinations.find((d) => d.id === destId)
                      return (
                        <Badge key={destId} className="bg-amber-600 text-white">
                          {destination?.name}
                        </Badge>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">兴趣偏好</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {planData.interests.map((interest) => (
                      <Badge key={interest} variant="outline">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {planData.specialRequests && (
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-lg">特殊需求</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{planData.specialRequests}</p>
                  </CardContent>
                </Card>
              )}

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  上一步
                </Button>
                <Button className="bg-amber-600 hover:bg-amber-700" size="lg">
                  生成专属旅行方案
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}
